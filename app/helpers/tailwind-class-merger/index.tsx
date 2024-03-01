import { twMerge } from 'tailwind-merge'

export const tailwindClassMerger = (primaryClasses: string, secondaryClasses: string) => twMerge(primaryClasses, secondaryClasses)
