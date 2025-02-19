import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:not-disabled:bg-blue hover:not-disabled:text-gray-900 disabled:opacity-70 hover:disabled:cursor-not-allowed"
      {...props}
    />
  )
}
