import React from 'react'
import "../Css/Navbar.css"

const Navbar = () => {
  return (
    <div id="Navbar">
        <div id="Navbar_child1">Title</div>
        <div id="Navbar_child2">
            <div>Home</div><div>About</div><div>Blog</div><div>Contact</div><div><button>Button</button></div>
        </div>
    </div>
  )
}

export default Navbar