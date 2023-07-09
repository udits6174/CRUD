import Link from "next/link"
const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className="text-white font-bold" href={"/"}>
            CRUD  
        </Link>
        <Link className="bg-white p-2" href={"/addTopic"}>
            Add a Topic
        </Link>
    </nav>
  )
}

export default Navbar