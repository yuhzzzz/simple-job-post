import React from "react"
import useTheme from "../hooks/useTheme"
export default function Card({ id, title, salary, location }) {
  const { mode } = useTheme()

  return (
    <div
      className={`bg-zinc-600 p-3 rounded-md hover:scale-y-105 font-sans  ${
        mode === "dark" ? "text-white" : "text-zinc-200"
      }`}
    >
      <h2 className="text-xl ">Job title: {title}</h2>
      <h3>Salary: {salary}</h3>
      <h5>Location: {location}</h5>
      <div>
        <h6>Job Description:</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          voluptatem dicta repellat! Sint repudiandae eos adipisci recusandae
          eum? Inventore, modi dolor praesentium nesciunt expedita laudantium!
        </p>
      </div>
    </div>
  )
}
