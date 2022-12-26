import { useEffect, useState } from "react"

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const afterJson = await res.json()
        setIsPending(false)
        setData(afterJson)
      } catch (error) {
        setIsPending(false)
        setError(error)
      }
    }
    fetchData()
  }, [url])
  return { data, error, isPending }
}
