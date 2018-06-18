import React from "react"
import "../css/estilos.css";
import { PresentationCard } from "./PresentationCard";

export class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            clases: ""
        }
    }

    render(){
        return(
            <div className="body" >
                <PresentationCard/>
            </div>
        );
    }
}