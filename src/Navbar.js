import { Link } from "react-router-dom";
import './App.css';

export default function Navbar() {
    return (
        <div className="App">
            <center>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Example">Example</Link>
                </ul>
            </center>
        </div>

    )
}