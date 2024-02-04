import { Link } from "react-router-dom";
import './App.css';

export default function Navbar() {
    return (
        <div className="App">
            <center>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Work</Link>
                </ul>
            </center>
        </div>

    )
}