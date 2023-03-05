import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useMemo, useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [msg, setMsg] = useState("");

  const apitest = async () => {
    await axios.get("http://localhost:3000").then((res) => {
      setMsg(res?.data)
    })
  }

  useEffect(() => {
    apitest();
  }, [])
  
  return (
    <h1>{msg}</h1>
  )
}
