import React from "react"
import { useLoaderData } from "react-router-dom"
import Card from "../components/Card"
export default function Home() {
  const cards = useLoaderData()

  console.log(cards)
  return (
    <div className="max-w-screen-xl	mx-auto px-3 grid  gap-y-3  grid-cols-1 md:grid-cols-3 md:gap-3">
      {cards && cards.map((card) => <Card key={card.id} {...card} />)}
    </div>
  )
}

export const loadData = async () => {
  const res = await fetch("http://localhost:4000/careers")

  return res.json()
}
