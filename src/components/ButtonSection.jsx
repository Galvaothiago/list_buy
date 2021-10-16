import '../styles/ButtonSection.scss'
import { IoMdAddCircle } from 'react-icons/io'
import  { BsBookmarkCheck, BsCheckAll } from 'react-icons/bs'
import {  useLocation, Link } from 'react-router-dom'

export function ButtonSection() {
    const { pathname } = useLocation()

    return (
        <div className="buttonContainer">
            <Link to="/Verify" className={pathname === '/Verify' && 'active'}>
                    verify
                    <BsBookmarkCheck />
            </Link>
            
        
            <Link to="/AddNewList" className={`buttonCenter ${pathname === '/AddNewList' && 'active'}`} >
                add
                <IoMdAddCircle />
            </Link>

            <Link >
                all buys
                <BsCheckAll />
            </Link>

        </div>

    )
}