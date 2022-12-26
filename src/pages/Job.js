import React from "react"
import { useSearchParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Card from "../components/Card"
export default function Job() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get("q")
  console.log(q)
  const url = "http://localhost:4000/jobs?q=" + q
  console.log(url)
  const { data, isPending, error } = useFetch(url)
  console.log(data)
  return (
    <div className="px-2 md:max-w-screen-sm md:mx-auto">
      {error && <h1>erros</h1>}
      {isPending && <h1>Loading..</h1>}
      {data && data.map((card) => <Card {...card} />)}
    </div>
  )
}
