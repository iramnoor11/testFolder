// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link href="/" style={{ marginRight: '15px', color: '#fff' }}>
        Home
      </Link>
      <Link href="/login" style={{ marginRight: '15px', color: '#fff' }}>
        Login
      </Link>
      <Link href="/signup" style={{ color: '#fff' }}>
        Signup
      </Link>
    </nav>
  );
};

export default Navbar;
