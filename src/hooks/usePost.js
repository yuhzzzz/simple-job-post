export async function postData({ salary, title, location, description }) {
  const json = {
    salary,
    title,
    location,
    description,
  }
  const res = fetch("http://localhost:4000/careers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  })
}
