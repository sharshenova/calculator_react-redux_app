import React, {Component} from 'react';
import './Button.css';



class Button extends Component {
    render() {
        const {number} = this.props;
        console.log(number, 'number');
        return (
            <div className='Button'>
                <button className='btn btn-info'>{number}</button>
            </div>
        )
    }
}

export default Button;


{/*<h1>{count}</h1>*/}
{/*<button onClick={increaseCounter}>Increase</button>*/}
{/*<button onClick={() => addCounter(5)}>Increase by 5</button>*/}