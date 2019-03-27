import React, {Component} from 'react';
import './Buttons.css';
import NumberButton from './NumberButton/NumberButton';
import OperationButton from './OperationButton/OperationButton';


class Buttons extends Component {
    render() {
        const {numbers, operations, displayNumber, displayOperation, number_on_display, number2_on_display,
            operation_on_display} = this.props;
        console.log(numbers, 'numbers in Buttons');
        return (
            <div className='row Buttons'>
                <div className='col-10'>
                    <div className='row'>
                        {numbers.map(number => {
                            return <div className='col col-4' key={number}>
                                <NumberButton displayNumber={displayNumber} number={number} number_on_display={number_on_display}
                                              number2_on_display={number2_on_display}/>
                            </div>
                        })}
                    </div>
                </div>
                <div className='col-2'>
                    <div className='row'>
                        {operations.map(operation => {
                            return <div className='col col-4' key={operation}>
                                <OperationButton displayOperation={displayOperation} operation={operation}
                                                 operation_on_display={operation_on_display}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Buttons;