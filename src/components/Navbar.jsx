import React from 'react'
import TaskForm from './TaskForm'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid d-flex justify-content-between">
          <div className='left-nav-section'>
          <Link className="navbar-brand text-primary" to="/">
            My Task Tracker
          </Link>
          <Link className="navbar-brand text-secondary" to="/about">
            About
          </Link>
          </div>
          <button className="btn btn-outline-success me-2" type="button" data-bs-toggle="modal" data-bs-target="#taskDetailModal">
            New Task
          </button>
        </div>
      </nav>
  )
}


