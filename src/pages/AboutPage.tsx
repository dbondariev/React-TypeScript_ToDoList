import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1> Information Page</h1>
      <p>
        This is To Do List App v1.0.0
        Using React, TypeScript, React Router, React Hooks, Context, Materialize CSS
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Back to the list
      </button>
    </>
  )
}
