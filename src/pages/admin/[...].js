import React from "react"
import { Router } from "@reach/router"

const AdminHome = () => {
  return (
    <div>
      <h2>Admin Home</h2>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <AdminHome path="/admin/"/>
    </Router>
  )
}

export default App