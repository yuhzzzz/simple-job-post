import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// layout
import RootLayout from "./layout/RootLayout"
// components
import Home, { loadData } from "./pages/Home"
import Layout from "./pages/Create"
import Job, { getJob } from "./pages/Job"
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={loadData} />
        <Route path="/create" element={<Layout />} />
        <Route path="/jobs" element={<Job />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
