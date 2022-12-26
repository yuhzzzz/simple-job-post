import React from "react"

export default function Card({ id, title, salary, location }) {
  return (
    <div className="bg-sky-200 p-3 rounded-md hover:scale-y-105 font-sans">
      <h2 className="text-xl text-cyan-900">Job title: {title}</h2>
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
