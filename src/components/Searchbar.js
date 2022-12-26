import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Searchbar() {
  const [term, setTerm] = useState("place job")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/job?q=" + term)
  }

  return (
    <div className="mr-3">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          required
          className="rounded-sm outline-none"
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
