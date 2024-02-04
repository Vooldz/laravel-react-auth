//components
import { useEffect } from "react"
import Header from "./components/header/Header"
import axiosClient from "./axiosClient"
import Home from "./pages/Home"
function App() {

  useEffect(() => {
    axiosClient.get('/customers').then(response => {
      console.log('Customers: ', response.data)
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
