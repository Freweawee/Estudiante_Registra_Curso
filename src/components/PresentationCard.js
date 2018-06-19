import React from "react";
import "../css/estilos.css";

export class PresentationCard extends React.Component {

    constructor() {
        super();
        this.state = {
            clase : ""
        }
    }

    buildPresentationCard() {
        
    }
    
    componentDidMount(){
        var params = new URLSearchParams(location.search.slice(1));
        var idclase = params.get('idclase');

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var clase = JSON.parse(xmlhttp.responseText);
                console.log(clase);
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/getClase.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("idclase="+idclase);
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        {this.state.clase}
                    </div>
                </div>
            </div>
        );
    }
}