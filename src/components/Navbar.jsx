import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className= "mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <span className="mx-2 w-10 text-4xl text-neutral-50">Ks</span>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedinIn />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </nav>
    )
}

export default Navbar