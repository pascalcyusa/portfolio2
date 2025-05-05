from google_auth_oauthlib.flow import InstalledAppFlow
import pickle

# Define the scopes
SCOPES = ["https://www.googleapis.com/auth/photoslibrary"]


def authenticate():
    flow = InstalledAppFlow.from_client_secrets_file("client_secret.json", SCOPES)
    credentials = flow.run_local_server(port=8080)
    # Save the credentials for future use
    with open("token.pickle", "wb") as token:
        pickle.dump(credentials, token)
    return credentials


if __name__ == "__main__":
    authenticate()
