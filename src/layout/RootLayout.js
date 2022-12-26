import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import Searchbar from "../components/Searchbar"

export default function RootLayout() {
  return (
    <div className="">
      <main className="min-h-screen bg-slate-500 ">
        <header className=" text-white font-serif p-4 max-w-screen-lg mx-auto text-2xl mb-3">
          <nav className="flex items-end justify-center	 ">
            <NavLink to="/" className="mr-auto">
              <h1>Your Jobs</h1>
            </NavLink>
            <Searchbar />
            <NavLink
              to="/create"
              className="text-xl text-gray-300 border-solid border-2 border-zinc-600 px-2 rounded-sm hover:text-red-400"
            >
              Create Job
            </NavLink>
          </nav>
        </header>
        <Outlet />
      </main>
    </div>
  )
}
