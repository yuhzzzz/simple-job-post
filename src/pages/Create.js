import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { postData } from "../hooks/usePost"
import useTheme from "../hooks/useTheme"
export default function Create() {
  const [title, setTitle] = useState("")
  const [salary, setSalary] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, salary, location, description })

    navigate("/")
  }

  return (
    <div className="mx-auto max-w-fit md:max-w-screen-sm shadow-xl">
      <form
        className="bg-gray-400 flex flex-col p-5 rounded-sm text-xl"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col mb-4">
          <span>Title: </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="bg-gray-200 outline-none rounded-sm mt-1"
          />
        </label>
        <label className="flex flex-col mb-4">
          <span>Salary: </span>
          <input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            type="text"
            className="bg-gray-200 outline-none rounded-sm mt-1"
          />
        </label>
        <label className="flex flex-col mb-4">
          <span>Locations: </span>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="bg-gray-200 outline-none rounded-sm mt-1"
          />
        </label>
        <label className="flex flex-col mb-4">
          <span>description: </span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="bg-gray-200 outline-none rounded-sm h-32 mt-1"
          />
        </label>
        <button
          type="submit"
          className="border-solid border-2 border-gray-300 py-2 rounded-lg text-base text-zinc-900 hover:bg-sky-700"
        >
          Add job
        </button>
      </form>
    </div>
  )
}
