import React from 'react'
import {Link} from 'react-router-dom'

const nav = () => {
  return (
    <header>
      <Link to="/BlogHome">myBlog</Link>
      <nav>
        <Link to="/adminBlog">Logout</Link>
      </nav>
    </header>
  );
}

export default nav