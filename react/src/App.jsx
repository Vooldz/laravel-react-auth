//components
import { useEffect } from "react"
import Header from "./components/header/Header"
import axiosClient from "./axiosClient"
function App() {

  useEffect(() => {
    axiosClient.get('/customers').then(response => {
      console.log('Customers: ', response.data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
