import React, {Component} from 'react';


class EraseAllButton extends Component {
    render() {
        const {eraseAll} = this.props;
        console.log(eraseAll, 'eraseAll');
        return (
            <div className='Button'>
                <button className='btn btn-info' onClick={() => eraseAll()}>AC</button>
            </div>
        )
    }
}

export default EraseAllButton;