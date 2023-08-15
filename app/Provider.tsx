"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"

type SessionProviderProps = {
  children: React.ReactNode
}
function Provider({children}: SessionProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider