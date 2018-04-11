import React from "react";
import ScrollUpButton from "react-scroll-up-button"; 
import './ScrollButton.css';
 
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton className='scroll-button'/>
            </div>
        );
    }
}

