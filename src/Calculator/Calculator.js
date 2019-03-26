import React, {Component} from 'react';
import './Calculator.css';
import {connect} from "react-redux";
// import Display from './Display/Display';
import Buttons from './Buttons/Buttons';
import Display from "./Display/Display";


class Calculator extends Component {
    render() {
        const {numbers, number_on_display} = this.props;
        console.log(numbers, 'numbersss');
        return (
            <div className='Calculator'>
                <Display number_on_display={number_on_display}></Display>
                <Buttons numbers={numbers}></Buttons>
            </div>
        )
    }
}

let numbers = [];
console.log(numbers, 'numbers');
for (let number=1; number < 10; number++) {
    numbers.push(number);
}
console.log(numbers, 'numbers');


// Первый аргумент connect-a
// нужен для того, чтобы "соединить" props, которые будут приходить в наш компонент, с глобальным стейтом Redux-а
// принимает state и возвращает объект, который будет передан как props в наш компонент
const mapStateToProps = state => {
    return {
        numbers: numbers,
        number_on_display: state.number_on_display,
        count: state.count,
        operation: state.operation,
    }
};

// второй аргумент в функцию connect служит для передачи в компонент специальных props-функций,
// которые получают доступ к вызову метода dispatch.
// принимает dispatch, а возвращает объект, каждый ключ которого будет передан в props нашего компонента.
const mapDispatchToProps = dispatch => {
    return {
        displaySymbol: () => dispatch({type: 'DISPLAY_SYMBOL'}),
        sum: (amount) => dispatch({type: 'SUM', amount}),
    };
};

// используем специальную функцию connect, которая находится в 'react-redux' и возвращает функцию,
// которую мы сразу же и вызываем, передавая туда наш компонент
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
