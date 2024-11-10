import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">MJ Chocolate</h1>
    <ul className="nav-links">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;

