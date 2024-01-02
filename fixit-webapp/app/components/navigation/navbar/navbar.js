import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-orange-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 text-white text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <button className="bg-orange-200 text-white py-2 px-3 rounded text-sm">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
