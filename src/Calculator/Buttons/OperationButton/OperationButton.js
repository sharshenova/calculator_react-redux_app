import React, {Component} from 'react';


class OperationButton extends Component {
    render() {
        const {operation, displayOperation} = this.props;
        return (
            <div className='Button'>
                <button className='btn btn-info' onClick={() => displayOperation(operation)}>{operation}</button>
            </div>
        )
    }
}

export default OperationButton;