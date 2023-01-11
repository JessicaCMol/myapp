import React, {Component} from "react";

class Languages extends Component {
    state = {  } 
    render() { 
        return (
            <div className="languages">
                <div className="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="--value:100"></div>
                <div className="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="65" style="--value:65"></div>
                <div className="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="45" style="--value:45"></div>
                <div className="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25" style="--value:25"></div>
            </div>
        );
    }
}
 
export default Languages;