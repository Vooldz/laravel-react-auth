import { useEffect, useState } from "react"
import axiosClient from "./axiosClient"

//components
import Header from "./components/header/Header"
import Home from "./pages/Home"
function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axiosClient.get('/categories').then(response => {
      console.log('categories: ', response.data)
    })
    axiosClient.get('/products').then(response => {
      console.log('products: ', response.data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
