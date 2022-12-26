import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useTheme from "../hooks/useTheme"

export default function Searchbar() {
  const [term, setTerm] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/jobs?q=${term}`)
  }
  const { mode } = useTheme()

  return (
    <div className="mr-3">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="mr-1">
          Search:
        </label>
        <input
          id="search"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
          className={`rounded-sm text-black text-lg outline-none ${
            mode === "dark" ? "" : "bg-zinc-400"
          }`}
        />
        {/* <input
          type="text"
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="rounded-sm outline-none"
        /> */}
      </form>
    </div>
  )
}
