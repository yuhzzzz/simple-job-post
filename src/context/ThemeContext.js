import { createContext, useReducer } from "react"

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
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode })
  }
  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
