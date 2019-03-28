import React, { useState } from 'react'
import Dashboard from '../admin/Dashboard'
import AdminSubheader from '../header/AdminSubheader'
import Questions from '../admin/questions/Questions'
import Analytics from '../admin/Analytics'
import Polls from '../admin/Polls'
export default function Admin({ setCurrentRoute, questions, sortData }) {
  setCurrentRoute('Admin')
  const [currentView, setCurrentView] = useState('questions')

  function ActiveView() {
    switch (currentView) {
      case 'home':
        return <Dashboard setCurrentView={setCurrentView} />
      case 'questions':
        return <Questions sortData={sortData} questions={questions} />
      case 'polls':
        return <Polls />
      case 'analytics':
        return <Analytics />
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
