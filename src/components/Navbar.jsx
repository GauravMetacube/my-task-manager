import React from 'react'
import TaskForm from './TaskForm'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand text-primary" href="/">
            My Task Tracker
          </a>
          <button className="btn btn-outline-success me-2" type="button" data-bs-toggle="modal" data-bs-target="#taskDetailModal">
            New Task
          </button>
        </div>
      </nav>
  )
}


