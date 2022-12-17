"use client"
import React from "react"
  
export default function PostError({ error }) {
  return (
    <div>
      PostError
      <p>{error.message} </p>
    </div>
  )
}