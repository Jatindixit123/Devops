import "./Header.css";
import {Link, useNavigate} from "react-router-dom";

export function Header() {
    const navigate = useNavigate();
    return (
        <header id="header">
            <div className="logo">
                <h1>JIRA Application</h1>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}