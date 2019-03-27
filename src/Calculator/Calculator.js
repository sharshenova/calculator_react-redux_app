import React, {Component} from 'react';
import './Calculator.css';
import {connect} from "react-redux";
import Buttons from './Buttons/Buttons';
import Display from "./Display/Display";


class Calculator extends Component {
    render() {
        const {numbers, operations, number_on_display, number2_on_display, operation_on_display,
            displayNumber, displayOperation, print_number2, displayEval, eval_on_display, result} = this.props;
        console.log(numbers, 'numbersss');
        return (
            <div className='Calculator'>
                <Display number_on_display={number_on_display} operation_on_display={operation_on_display}
                         number2_on_display={number2_on_display} eval_on_display={eval_on_display} result={result}/>
                <Buttons displayNumber={displayNumber} numbers={numbers} number_on_display={number_on_display}
                         operations={operations} displayOperation={displayOperation}
                         displayEval={displayEval} print_number2={print_number2}/>
            </div>
        )
    }
}

// let numbers = [];
// console.log(numbers, 'numbers');
// for (let number=0; number < 10; number++) {
//     numbers.push(number);
// }
// numbers = numbers.reverse();

let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
console.log(numbers, 'numbers');

let operations = ['+', '-', '*', '/'];


// Первый аргумент connect-a
// нужен для того, чтобы "соединить" props, которые будут приходить в наш компонент, с глобальным стейтом Redux-а
// принимает state и возвращает объект, который будет передан как props в наш компонент
const mapStateToProps = state => {
    return {
        numbers: numbers,
        operations: operations,
        number_on_display: state.number_on_display,
        number2_on_display: state.number2_on_display,
        operation_on_display: state.operation_on_display,
        first_operand: state.first_operand,
        print_number2: state.print_number2,
        second_operand: state.second_operand,
        eval_on_display: state.eval_on_display,
        result: state.result
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
