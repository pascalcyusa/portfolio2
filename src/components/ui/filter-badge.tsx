import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { RiCloseFill } from '@remixicon/react'

const filterBadgeVariants = cva(
  "inline-flex items-center bg-background text-tremor-label text-muted-foreground border",
  {
    variants: {
      variant: {
        default: "rounded-tremor-small gap-x-2.5 py-1 pl-2.5 pr-1",
        pill: "rounded-tremor-full gap-x-2.5 py-1 pl-2.5 pr-1",
        avatar: "rounded-tremor-full gap-2 px-1 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface FilterBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof filterBadgeVariants> {
  label?: string;
  value?: string;
  avatar?: string;
  children?: React.ReactNode;
  selected?: boolean;
}

export function FilterBadge({
  className,
  variant,
  label,
  value,
  avatar,
  children,
  selected, // Keep this line
  ...props
}: FilterBadgeProps) {
  if (variant === "avatar") {
    return (
      <span className={cn(filterBadgeVariants({ variant }), className)} {...props}>
        {avatar && (
          <img
            className="inline-block size-5 rounded-tremor-full"
            src={avatar}
            alt=""
          />
        )}
        {children}
        {/* Remove the onRemove button logic */}
      </span>
    )
  }

  return (
    <span
      className={cn(
        filterBadgeVariants({ variant }),
        className,
        "rounded-full", // Ensure badges are rounded
        selected ? "bg-primary text-white" : "" // Highlight selected filters
      )}
      {...props}
    >
      {label}
      <span className="font-medium text-foreground">
        {value}
      </span>
    </span>
  );
}