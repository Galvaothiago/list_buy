import { useContext } from 'react'
import '../styles/Header.css'
import { AuthContext } from './context/AuthContext'

export function Header() {
    const { user } = useContext(AuthContext)
    const { displayName } = user
    
    const date = new Date()
    const hours = date.getHours()

    const greatting = hours < 12 ? 'Bom dia' : hours < 18 ? 'Boa tarde' : 'Boa noite' 
    return (
        <div className="headerContainer">
                <p>{greatting}, { displayName || 'Caro usuario' }</p>
                <span>menu</span>
        </div>
    )
} 