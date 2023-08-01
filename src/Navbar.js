const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The TK BLOG</h1>
      <div className="links"></div>
      <a href="/">Home</a>
      <a href="/create" style={{
        color: "white",
        backgroundColor:'orange',
        borderRadius: '8px'
      }}>
        New Blog
      </a>
    </nav>
  );
};

export default Navbar;
