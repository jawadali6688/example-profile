import React from "react"
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Profile from "./Profile/Profile"
import Github from "./Github/Github"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "user/:username",
//         element: <Profile/>
//       },
//       {
//         path: "github",
//         element: <Github/>
//       }
//     ] 
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>} >
      <Route path = "about" element = {<About/>}/>
      <Route path = "contact" element = {<Contact/>}/>
      <Route path = "users/:username" element = {<Profile/>}/>
      <Route path = "github" element = {<Github/>}/>
       </Route>
  )
)
function App() {
  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}

export default App
