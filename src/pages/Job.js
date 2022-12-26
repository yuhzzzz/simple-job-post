import React from "react"
import { useSearchParams } from "react-router-dom"
export default function Job() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get("q")
  return <div></div>
}
