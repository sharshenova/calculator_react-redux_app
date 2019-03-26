import React, {Component} from 'react';
import './Buttons.css';
import Button from './Button/Button';



class Buttons extends Component {
    render() {
        const {numbers} = this.props;
        console.log(numbers, 'numbers in Buttons');
        return (
            <div className='Buttons row'>
                {numbers.map(number => {
                    return <div className='col col-4'>
                        <Button number={number}/>
                    </div>
                })}
            </div>
        )
    }
}

export default Buttons;