import React, {Component} from 'react';
import './Display.css';


class Display extends Component {
    render() {
        const {number_on_display, displaySymbol} = this.props;
        console.log(number_on_display, 'numbers on Display');
        return (
            <div className='Display'>
                <p>Считаю!</p>
                <p>{number_on_display}</p>
                <p>{displaySymbol}</p>
            </div>
        )
    }
}

export default Display;