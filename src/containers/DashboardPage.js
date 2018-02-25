import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <div>
      <h1>Início</h1>
      <Link to='/questoes'>Minhas questões</Link>
    </div>
  )
}

export default DashboardPage
