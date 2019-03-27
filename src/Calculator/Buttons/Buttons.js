import React, {Component} from 'react';
import './Buttons.css';
import Button from './Button/Button';



class Buttons extends Component {
    render() {
        const {numbers, displaySymbol, number_on_display} = this.props;
        console.log(numbers, 'numbers in Buttons');
        return (
            <div className='Buttons row'>
                {numbers.map(number => {
                    return <div className='col col-4' key={number}>
                        <Button displaySymbol={displaySymbol} number={number} number_on_display={number_on_display}/>
                    </div>
                })}
            </div>
        )
    }
}

export default Buttons;