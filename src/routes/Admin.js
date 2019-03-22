import React, { useState } from 'react'
import Dashboard from '../admin/Dashboard'
import AdminSubheader from '../header/AdminSubheader'
import Questions from '../admin/questions/Questions'
export default function Admin({ setCurrentRoute }) {
  setCurrentRoute('Admin')
  const [currentView, setCurrentView] = useState('questions')

  function ActiveView() {
    switch (currentView) {
      case 'home':
        return <Dashboard />
      case 'questions':
        return <Questions />
      case 'polls':
        return <Dashboard />
      case 'analytics':
        return <Dashboard />
      default:
        return <Dashboard />
    }
  }

  return (
    <React.Fragment>
      <AdminSubheader
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <ActiveView />
    </React.Fragment>
  )
}
