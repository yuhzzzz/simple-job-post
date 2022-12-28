import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import Searchbar from "../components/Searchbar"
import useTheme from "../hooks/useTheme"
import { WiDaySunny } from "react-icons/wi"

export default function RootLayout() {
  const { mode, changeMode } = useTheme()

  return (
    <div>
      <main
        className={`min-h-screen ${
          mode === "dark" ? "bg-slate-500" : "bg-gray-200"
        }`}
      >
        <header
          className={`${
            mode === "dark" ? "text-white" : "text-gray-400"
          } font-serif p-4 max-w-screen-xl mx-auto text-2xl mb-3`}
        >
          <nav
            className={`flex items-end justify-center	${
              mode === "dark" ? "text-white-300" : "text-black"
            } `}
          >
            <NavLink to="/" className="mr-auto">
              <h1>Your Jobs</h1>
            </NavLink>
            <Searchbar />
            <NavLink
              to="/create"
              className="text-xl  border-solid border-2 border-zinc-600 px-2 rounded-sm hover:text-red-400"
            >
              Create Job
            </NavLink>

            <WiDaySunny
              onClick={() => changeMode(mode === "dark" ? "light" : "dark")}
              className={`text-4xl mr-4 ${
                mode === "dark" ? "text-white" : "text-zinc-400"
              }`}
            />
          </nav>
        </header>
        <h1>Hello world</h1>
        <Outlet />
      </main>
    </div>
  )
}
