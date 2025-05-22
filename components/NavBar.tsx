import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f8f8f8', borderBottom: '1px solid #ccc' }}>
      <a href="/" style={{ marginRight: '1rem' }}>Home</a>
      <a href="/about" style={{ marginRight: '1rem' }}>About</a>
      <a href="/courses" style={{ marginRight: '1rem' }}>Courses</a>
      <a href="/blog">Blog</a>
    </nav>
  );
};

export default NavBar;
