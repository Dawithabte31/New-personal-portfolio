import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to combine class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}