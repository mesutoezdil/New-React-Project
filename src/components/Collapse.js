import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";


class Collapse extends React.Component {

    constructor() {
        super();

        this.state = {
            showContent: true 
        }
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100"> 
                Link with href 
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show">
                        {this.props.children}
                        </div>
                        ) : null
                }

            </div>  
        );
    }
};

export default Collapse;

