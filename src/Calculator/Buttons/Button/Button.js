import React, {Component} from 'react';
import './Button.css';


class Button extends Component {
    render() {
        const {number, displaySymbol, number_on_display} = this.props;
        console.log(number, 'number');
        let str_number = String(number);
        console.log(str_number, 'str_number');
        console.log(number_on_display, 'number_on_display');
        return (
            <div className='Button'>
                <button className='btn btn-info' onClick={() => displaySymbol(str_number)}>{number}</button>
            </div>
        )
    }
}

export default Button;


{/*<h1>{count}</h1>*/}
{/*<button onClick={increaseCounter}>Increase</button>*/}
{/*<button onClick={() => addCounter(5)}>Increase by 5</button>*/}