import React, {Component} from 'react';
import './Display.css';


class Display extends Component {
    render() {
        const {symbols_on_display} = this.props;
        return (
            <div className='Display'>
                <p>CALCULATOR</p>
                {symbols_on_display ? <p>{symbols_on_display}</p> : []}
            </div>
        )
    }
}

export default Display;