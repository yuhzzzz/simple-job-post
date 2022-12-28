import React from "react"
import { useLoaderData } from "react-router-dom"
import Card from "../components/Card"
import useTheme from "../hooks/useTheme"
export default function Home() {
  const cards = useLoaderData()
  const { userJob } = useTheme()
  console.log(userJob)
  return (
    <div className="max-w-screen-xl	mx-auto px-3 grid  gap-y-3  grid-cols-1 md:grid-cols-3 md:gap-3">
      {userJob && userJob.map((card) => <Card key={card.id} {...card} />)}
    </div>
  )
}

export const loadData = async () => {
  const res = await fetch("http://localhost:4000/jobs")

  return res.json()
}
