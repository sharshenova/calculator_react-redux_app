import React, {Component} from 'react';
// import './NumberButton.css';


class NumberButton extends Component {
    render() {
        const {number, displayNumber} = this.props;
        let str_number = String(number);
        return (
            <div className='Button'>
                <button className='btn btn-info' onClick={() => displayNumber(str_number)}>{number}</button>
            </div>
        )
    }
}

export default NumberButton;

