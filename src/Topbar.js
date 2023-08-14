import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <Link to={'/'}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </Link>
        <Link to={'/dashboard'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        </Link>
        
        <Link to={'/hooks1'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Hoooks1</a>
        </li>
        </Link>
        
        <Link to={'/student form'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Studentform</a>
        </li>
        </Link>
        <Link to={'/Student'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Student</a>
        </li>
        </Link>
        <Link to={'/hello'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Hello</a>
        </li>
        </Link>
        <Link to={'/demo'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Demo</a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Topbar