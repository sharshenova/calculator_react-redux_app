import React, {Component} from 'react';
import './Display.css';


class Display extends Component {
    render() {
        const {number_on_display, operation_on_display, number2_on_display, eval_on_display, result} = this.props;
        console.log(number_on_display, 'numbers on Display');
        return (
            <div className='Display'>
                <p>Считаю!</p>
                {number_on_display ? <p>{number_on_display}</p> : []}
                {operation_on_display ? <p>{operation_on_display}</p> : []}
                {number2_on_display ? <p>{number2_on_display}</p> : []}
                {eval_on_display ? <p>{eval_on_display}</p> : []}
                {result ? <p>{result}</p> : []}
            </div>
        )
    }
}

export default Display;