import React, {Component} from 'react';


class EvalButton extends Component {
    render() {
        const {displayEval} = this.props;
        return (
            <div className='Button'>
                <button className='btn btn-info' onClick={() => displayEval()}>=</button>
            </div>
        )
    }
}

export default EvalButton;