import React, { forwardRef } from "react";

// A simple utility to join class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Avatar component
const Avatar = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

// AvatarImage component
const AvatarImage = forwardRef(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
    alt=""
  />
));
AvatarImage.displayName = "AvatarImage";

// AvatarFallback component
const AvatarFallback = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-600",
      className
    )}
    {...props}
  >
    {children || "?"}
  </div>
));
AvatarFallback.displayName = "AvatarFallback";

// Export components
export { Avatar, AvatarImage, AvatarFallback };
