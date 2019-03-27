// первоначальное значение стейта, которое будет храниться в хранилище после первого вызова редьюсера:
const initialState = {
    number_on_display: '',
    number2_on_display: '',
    operation_on_display: null,
    first_operand: null,
    second_operand: null,
    print_number2: false,
    result: null
};

// редьюсер принимает первым значением некий "аккумулятор" (стейт),
// вторым аргументом - "значение" (здесь - пришедший action)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_NUMBER':
            if (state.print_number2 === false) {
                return {...state, number_on_display: state.number_on_display + action.number}
            } else {
                return {...state, number2_on_display: state.number2_on_display + action.number};
            }
        case 'DISPLAY_OPERATION':
            let {first_operand, number_on_display} = state;
            first_operand = Number(number_on_display);
            console.log(state, 'state');
            return {...state, operation_on_display: action.operation,
                first_operand: first_operand, print_number2: true};
        case 'EVAL_OPERATION':
            let {second_operand, number2_on_display} = state;
            second_operand = Number(number2_on_display);
            console.log(state, 'state');
            let result = null;
            if (state.operation_on_display === '+') {
                result = state.first_operand + second_operand;
            } else if (state.operation_on_display === '-') {
                result = state.first_operand - second_operand;
            } else if (state.operation_on_display === '*') {
                result = state.first_operand * second_operand;
            } else if (state.operation_on_display === '/') {
                result = state.first_operand / second_operand;
            } else result = null;
            return {...state, eval_on_display: '=', second_operand: second_operand, print_number2: false,
                result: result};
        case 'ERASE_ALL':
            state = initialState;
            return {...state};
        default:
            return state;
    }
};

export default reducer;
