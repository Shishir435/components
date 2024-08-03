import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const convertToHslaString = (bg: Background) => {
  return `hsla(${bg.h},${bg.s}%,${bg.l}%,${bg.a})`;
};