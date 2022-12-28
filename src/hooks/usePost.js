import useTheme from "./useTheme"

export async function postData({ salary, title, location, description }) {
  const json = {
    salary,
    title,
    location,
    description,
  }

  const res = fetch("http://localhost:4000/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  })
}
