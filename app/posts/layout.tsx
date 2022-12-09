import React, { Children } from 'react'

export default function PostsLayout({
  children }) {
  return (
    <div>
      PostsLayout
      <ul>
        <li> some link</li>
        <li> some link 2</li>
      </ul>
      <div>
        {children}
      </div>
    </div>
  )
}
