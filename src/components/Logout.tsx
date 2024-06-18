"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

export default function Logout() {
  return (
    <span onClick={() =>
        signOut({ redirect: true, callbackUrl: "/login" })
      }>Logout</span>
  )
}
