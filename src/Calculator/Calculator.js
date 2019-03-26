import React, {Component} from 'react';
import './Calculator.css';
import {connect} from "react-redux";


class Calculator extends Component {
    render() {
        const {counter, increaseCounter, addCounter} = this.props;
        return (
            <div className='Calculator'>
                <h1>{counter}</h1>
                <button onClick={increaseCounter}>Increase</button>
                <button onClick={() => addCounter(5)}>Increase by 5</button>
            </div>
        )
    }
}

// Первый аргумент connect-a
// нужен для того, чтобы "соединить" props, которые будут приходить в наш компонент, с глобальным стейтом Redux-а
// принимает state и возвращает объект, который будет передан как props в наш компонент
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};

// второй аргумент в функцию connect служит для передачи в компонент специальных props-функций,
// которые получают доступ к вызову метода dispatch.
// принимает dispatch, а возвращает объект, каждый ключ которого будет передан в props нашего компонента.
const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch({type: 'INCREMENT'}),
        addCounter: (amount) => dispatch({type: 'ADD_COUNTER', amount}),
    };
};

// используем специальную функцию connect, которая находится в 'react-redux' и возвращает функцию,
// которую мы сразу же и вызываем, передавая туда наш компонент
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);