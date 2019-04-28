import React, { useState } from 'react'
import Dashboard from '../admin/Dashboard'
import AdminSubheader from '../header/AdminSubheader'
import Questions from '../admin/questions/Questions'
import Analytics from '../admin/Analytics'
import Polls from '../admin/Polls'
export default function Admin({ questions, sortData, userData }) {
  const [currentView, setCurrentView] = useState('home')

  function ActiveView() {
    switch (currentView) {
      case 'home':
        return <Dashboard setCurrentView={setCurrentView} />
      case 'questions':
        return (
          <Questions
            userData={userData}
            sortData={sortData}
            questions={questions}
          />
        )
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
