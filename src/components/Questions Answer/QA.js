import React from 'react';
import './QA.css'

const QA = () => {
    return (
        <div>
            <div className="questionAns">
                <div className="one">
                    <h2>How React Works</h2>
                    <p><b>Ans.</b> 
                    React and react-dom are the two node packages by which react actually works. Every component which is written in JSX is converted into HTML code by the react package. Those transformed HTML codes are injected into an HTML file by the react-dom package. Thus react works.
                    </p>
                </div>
                <div className="two">
                    <h2>Difference between Props & State</h2>
                    <p><b>Ans. </b>
                    For sending data from one component to another component props are used.
                    It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. <br />
                    The state is used to contain data or information about the component and can change over time. By the response to a user action or system event, the state could change. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QA;