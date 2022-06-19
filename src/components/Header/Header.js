import { Link } from 'react-router-dom'
import './Header.module.css'

export default function Header() {

    return(
        <nav>
            <h1>Todo List</h1>
            <ul>
                <li>
                    <Link to='/'>Tasks</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}