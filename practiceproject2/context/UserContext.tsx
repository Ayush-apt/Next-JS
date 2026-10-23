'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

type userContextType = {
  user: userType | null | undefined,
  setUser: (user: userType | null) => void
}

type userType = {
  name: string,
  email: string,
  id: string,
  image?: string 
}

export const userDataContext = React.createContext<userContextType | undefined>(undefined)

function UserContext({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<userType | null>(null)
  const { status } = useSession()

  const data = {
    user,
    setUser
  }

  useEffect(() => {
    async function getUser() {
      if (status !== 'authenticated') {
        setUser(null)
        return
      }

      try {
        const result = await axios.get("/api/user")
        setUser(result.data)
      } catch (error) {
        console.log("Error fetching user data:", error)
      }
    }

    getUser()
  }, [status])

  return (
    <userDataContext.Provider value={data}>
      {children}
    </userDataContext.Provider>
  )
}

export default UserContext