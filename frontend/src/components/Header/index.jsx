import { Link } from 'react-router-dom'
import './style.css'
import { AuthContext } from '../../auth/Context'
import { useContext } from 'react'

export default function Header() {
    //pegar o token
    const { token } = useContext(AuthContext)

    return (
        <header>
            <h1>Minha API</h1>
            <nav>
                <Link to='/'>
                    <button>
                        Inicio
                    </button>
                </Link>
                {
                    !token
                        ? null
                        : <Link to='/clientes'>
                            <button>
                                Cliente
                            </button>
                        </Link>
                }
                <Link to='/login'>
                    <button>
                        Login
                    </button>
                </Link>
            </nav>
        </header>
    )
}