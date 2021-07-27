import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Users List</h1>
            </div>
            <Link href="\"><a>Home</a></Link>
            <Link href="\about"><a>About</a></Link><a>About</a>
            <Link href="\users"><a>User List</a></Link>

        </nav>
     );
}

export default Navbar;