import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card"
import Collapse from "./components/Collapse";

const App = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">
                    
                    <div className="col">
                        <Collapse href="collapseExample1">
                        <Card
                            //cardTitle="Norway"
                            cardText="Lorem Ipsum Text 22"
                            updatedTime="Last Updated 1 min ago"
                            image="https://picsum.photos/id/83/200/300" />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample2">
                        <Card
                            cardTitle="Sweden"
                            cardText="Lorem Ipsum Text 1"
                            updatedTime="Last Updated 1 min ago"
                            image="https://picsum.photos/id/60/200/300" />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample3">
                        <Card
                            cardTitle="Denmark"
                            cardText="Lorem Ipsum Text 1"
                            updatedTime="Last Updated 1 min ago"
                            image="https://picsum.photos/id/88/200/300" />
                        </Collapse>
                    </div>

                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
<App />,
document.getElementById('root')
)