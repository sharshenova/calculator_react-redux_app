import React, {Component} from 'react';
import './Calculator.css';
import {connect} from "react-redux";
import Buttons from './Buttons/Buttons';
import Display from "./Display/Display";



class Calculator extends Component {
    render() {
        const {numbers, operations, numbers_on_display, symbols_on_display, result,
            displayNumber, displayOperation, displayEval, eraseAll} = this.props;
        return (
            <div className='Calculator'>
                <Display symbols_on_display={symbols_on_display}/>
                <Buttons numbers={numbers} displayNumber={displayNumber} numbers_on_display={numbers_on_display}
                         operations={operations} displayOperation={displayOperation} displayEval={displayEval}
                         eraseAll={eraseAll}/>
            </div>
        )
    }
}

let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
// console.log(numbers, 'numbers');

let operations = ['+', '-', '*', '/'];

// Первый аргумент connect-a
// нужен для того, чтобы "соединить" props, которые будут приходить в наш компонент, с глобальным стейтом Redux-а
// принимает state и возвращает объект, который будет передан как props в наш компонент
const mapStateToProps = state => {
    return {
        numbers: numbers,
        operations: operations,
        symbols_on_display: state.symbols_on_display,
        numbers_on_display: state.numbers_on_display,
        calc_arguments: state.calc_arguments,
        result: state.result,
    }
};

// второй аргумент в функцию connect служит для передачи в компонент специальных props-функций,
// которые получают доступ к вызову метода dispatch.
// принимает dispatch, а возвращает объект, каждый ключ которого будет передан в props нашего компонента.
const mapDispatchToProps = dispatch => {
    return {
        displayNumber: (number) => dispatch({type: 'DISPLAY_NUMBER', number}),
        displayOperation: (operation) => dispatch({type: 'DISPLAY_OPERATION', operation}),
        displayEval: (operation) => dispatch({type: 'EVAL_OPERATION', operation}),
        eraseAll: (operation) => dispatch({type: 'ERASE_ALL', operation}),
    };
};

// используем специальную функцию connect, которая находится в 'react-redux' и возвращает функцию,
// которую мы сразу же и вызываем, передавая туда наш компонент
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
