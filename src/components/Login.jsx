import { useContext } from 'react'
import '../styles/Login.scss'
import { AuthContext } from './context/AuthContext'
import { auth, provider } from './service/firebase'

export function Login() {
    const { signIn } = useContext(AuthContext)

    function handleSignIn() {
        auth.signInWithPopup(provider)
        .then(result => signIn(result.user))
    }
    return (
        <div className="containerLogin">
            <div className="contentLogin">
                <img src="carrinho.png" alt="carrinho de compras" />
                <button onClick={handleSignIn}>Login With Google</button>
             </div>
        </div>
    )
}