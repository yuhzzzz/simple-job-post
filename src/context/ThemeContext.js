import { createContext, useEffect, useReducer, useState } from "react"
import useFetch from "../hooks/useFetch"

export const ThemeContext = createContext()
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload }
    case "ADD_DATA":
      return {
        ...state,
        userJob: [...state.userJob, action.payload],
      }
    case "FETCH_DATA":
      return { ...state, userJob: [...action.payload] }
    default:
      return state
  }
}
export function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    mode: "dark",
    userJob: [],
  })
  // const [userJob, setUserJobs] = useState([])
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode })
  }
  const addJob = (data) => {
    dispatch({ type: "ADD_DATA", payload: data })
  }
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/jobs")
      const JSONdata = await res.json()
      dispatch({ type: "FETCH_DATA", payload: JSONdata })
    }
    fetchData()
  }, [])
  return (
    <ThemeContext.Provider value={{ ...state, changeMode, addJob }}>
      {children}
    </ThemeContext.Provider>
  )
}
