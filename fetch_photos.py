import pickle
import os.path
import json  # Added for JSON output
from googleapiclient.discovery import build
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ["https://www.googleapis.com/auth/photoslibrary.readonly"]

# --- Configuration ---
# TODO: Replace with the actual ID of the album you want to fetch photos from.
TOKEN_PICKLE_PATH = "token.pickle"
OUTPUT_JSON_PATH = "src/data/google_photos_data.json"  # Path to save the photo data
# -------------------


def get_photos_service():
    """Shows basic usage of the Google Photos Library API.
    Loads credentials and creates an API service instance.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time (using authenticate.py).
    if os.path.exists(TOKEN_PICKLE_PATH):
        with open(TOKEN_PICKLE_PATH, "rb") as token:
            creds = pickle.load(token)

    # If there are no (valid) credentials available, let the user know.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            try:
                creds.refresh(Request())
                # Save the refreshed credentials
                with open(TOKEN_PICKLE_PATH, "wb") as token:
                    pickle.dump(creds, token)
            except Exception as e:
                print(f"Error refreshing token: {e}")
                print("Please re-run authenticate.py to get new credentials.")
                return None
        else:
            print("Credentials not found or invalid. Please run authenticate.py first.")
            return None

    try:
        service = build(
            "photoslibrary", "v1", credentials=creds, static_discovery=False
        )
        return service
    except Exception as e:
        print(f"Error building Photos API service: {e}")
        return None


def list_albums(service):
    """Lists albums available in the user's Google Photos library."""
    albums = []
    page_token = None
    try:
        while True:
            response = (
                service.albums().list(pageSize=50, pageToken=page_token).execute()
            )
            albums.extend(response.get("albums", []))
            page_token = response.get("nextPageToken")
            if not page_token:
                break
    except Exception as e:
        print(f"An error occurred listing albums: {e}")
    return albums


def fetch_photos_from_album(service, album_id):
    """Fetches photos from a specific album."""
    results = []
    page_token = None
    try:
        while True:
            # Execute the search request
            response = (
                service.mediaItems()
                .search(
                    body={"albumId": album_id, "pageSize": 100, "pageToken": page_token}
                )
                .execute()
            )

            # Process the items in the response
            items = response.get("mediaItems", [])
            for item in items:
                # Extract the base URL - this URL is temporary and might expire
                # For permanent URLs, consider sharing settings or other methods
                # Adding '=d' might provide a direct download link
                # Adding '=w<width>-h<height>' can request specific dimensions
                results.append(
                    {
                        "id": item["id"],
                        "url": item["baseUrl"]
                        + "=d",  # Example: get direct download link
                        "filename": item["filename"],
                    }
                )

            # Check if there are more pages
            page_token = response.get("nextPageToken")
            if not page_token:
                break  # Exit loop if no more pages

    except Exception as e:
        print(f"An error occurred fetching photos: {e}")

    return results


if __name__ == "__main__":  # Removed format_for_typescript function
    # Before running: pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib
    photos_service = get_photos_service()
    if photos_service:
        print("Fetching albums...")
        albums = list_albums(photos_service)

        if not albums:
            print("No albums found or an error occurred.")
        else:
            print("\nAvailable Albums:")
            for i, album in enumerate(albums):
                print(
                    f"  {i}: {album.get('title', 'Untitled Album')} ({album.get('mediaItemsCount', 0)} items)"
                )

            while True:
                try:
                    choice = input("\nEnter the number of the album you want to use: ")
                    selected_index = int(choice)
                    if 0 <= selected_index < len(albums):
                        selected_album = albums[selected_index]
                        selected_album_id = selected_album["id"]
                        print(
                            f"\nSelected album: {selected_album.get('title', 'Untitled Album')}"
                        )
                        break
                    else:
                        print("Invalid selection. Please enter a number from the list.")
                except ValueError:
                    print("Invalid input. Please enter a number.")

            print(f"Fetching photos from album ID: {selected_album_id}...")
            photos = fetch_photos_from_album(photos_service, selected_album_id)
            if photos:
                print(f"Fetched {len(photos)} photos.")

                # Ensure the output directory exists
                output_dir = os.path.dirname(OUTPUT_JSON_PATH)
                if output_dir and not os.path.exists(output_dir):
                    os.makedirs(output_dir)
                    print(f"Created directory: {output_dir}")

                # Save photos to JSON file
                try:
                    with open(OUTPUT_JSON_PATH, "w") as f:
                        json.dump(photos, f, indent=2)  # Use indent for readability
                    print(f"\nPhoto data successfully saved to: {OUTPUT_JSON_PATH}")
                    print(
                        "You can now import this JSON file into your TypeScript code."
                    )
                except Exception as e:
                    print(f"Error writing to JSON file: {e}")

            else:
                print("No photos found in the selected album or an error occurred.")
