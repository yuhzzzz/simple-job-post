import { createContext, useEffect, useReducer, useState } from "react"
import useFetch from "../hooks/useFetch"

export const ThemeContext = createContext()
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload }

    default:
      return state
  }
}
export function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    mode: "dark",
  })
  const [userJob, setUserJobs] = useState([])
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode })
  }
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/jobs")
      const JSONdata = await res.json()
      setUserJobs(JSONdata)
    }
    fetchData()
  }, [])
  return (
    <ThemeContext.Provider value={{ ...state, changeMode, userJob }}>
      {children}
    </ThemeContext.Provider>
  )
}
