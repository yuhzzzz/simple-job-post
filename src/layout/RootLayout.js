import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import Searchbar from "../components/Searchbar"
import useTheme from "../hooks/useTheme"

export default function RootLayout() {
  const { mode } = useTheme()

  return (
    <div>
      <main
        className={`min-h-screen ${
          mode === "dark" ? "bg-slate-500" : "bg-gray-500"
        }`}
      >
        <header
          className={`${
            mode === "dark" ? "text-white" : "text-zinc-400"
          } font-serif p-4 max-w-screen-lg mx-auto text-2xl mb-3`}
        >
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
