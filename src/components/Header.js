import React from "react";
import "../css/estilos.css";

export class Header extends React.Component {

    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#"><span className="navlink">Algo</span></a></li>
                        <li><a href="#"><span className="navlink">Algo</span></a></li>
                        <li><a href="#"><span className="navlink">Algo</span></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}