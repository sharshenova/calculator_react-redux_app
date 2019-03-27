import React, {Component} from 'react';
// import './NumberButton.css';


class OperationButton extends Component {
    render() {
        const {operation, displayOperation} = this.props;
        console.log(operation, 'operation');
        console.log(displayOperation, 'displayOperation');
        return (
            <div className='Button'>
                <button className='btn btn-info' onClick={() => displayOperation(operation)}>{operation}</button>
            </div>
        )
    }
}

export default OperationButton;