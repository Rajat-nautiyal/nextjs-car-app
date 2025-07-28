"use client"
import React from 'react'
import { CustomButtonProps } from '@types'

export const CustomButton = ({fontStyle,containerStyle,title,handleClick}:CustomButtonProps) => {
  return (
    <div>
      <button
        className={`${containerStyle}`}
        onClick={handleClick}
      >
        <span className={`${fontStyle}`}>{title}</span>
      </button>
    </div>
  )
}
