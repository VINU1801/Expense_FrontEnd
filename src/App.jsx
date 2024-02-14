import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./Home";
import About from "./components/about";
import Contact from "./components/Contact";
import Layout from "./Layout";
const App = () => {
  const router = createBrowserRouter(
 [ {
    path:"/",
    element:<Layout />,
    children:[
      {path:"/home",element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/contact",element:<Contact/>}
    ]}
  // ,
  // {
  //   path:"/about",
  //   element:<About />
  // },
  // {
  //   path:"/contact",
  //   element:<Contact/>}
  ]);
  return(
  
    
    <RouterProvider router={router}/>
  )
}
export default App