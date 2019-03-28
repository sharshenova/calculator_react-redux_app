import React, {Component} from 'react';


class EraseAllButton extends Component {
    render() {
        const {eraseAll} = this.props;
        return (
            <div className='Button'>
                <button className='btn btn-info' onClick={() => eraseAll()}>AC</button>
            </div>
        )
    }
}

export default EraseAllButton;