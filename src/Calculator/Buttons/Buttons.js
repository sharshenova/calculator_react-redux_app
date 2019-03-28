import React, {Component} from 'react';
import './Buttons.css';
import NumberButton from './NumberButton/NumberButton';
import OperationButton from './OperationButton/OperationButton';
import EvalButton from './EvalButton/EvalButton';
import EraseAllButton from './EraseAllButton/EraseAllButton';

class Buttons extends Component {
    render() {
        const {numbers, displayNumber, operations, displayOperation, numbers_on_display, displayEval, eraseAll} = this.props;
        return (
            <div className='row Buttons'>
                <div className='col-10'>
                    <div className='row'>
                        {numbers.map(number => {
                            return <div className='col col-4' key={number}>
                                <NumberButton displayNumber={displayNumber} number={number}
                                              numbers_on_display={numbers_on_display}/>
                            </div>
                        })}
                        <div className='col col-4'>
                            <EvalButton displayEval={displayEval}/>
                        </div>
                        <div className='col col-4'>
                            <EraseAllButton eraseAll={eraseAll}/>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='row'>
                        {operations.map(operation => {
                            return <div className='col col-4' key={operation}>
                                <OperationButton displayOperation={displayOperation} operation={operation}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Buttons;