// первоначальное значение стейта, которое будет храниться в хранилище после первого вызова редьюсера:
const initialState = {
    number_on_display: 0
};

// редьюсер принимает первым значением некий "аккумулятор" (стейт),
// вторым аргументом - "значение" (здесь - пришедший action)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_SYMBOL':
            return {...state, number_on_display: state.number_on_display + 5};
        case 'SUM':
            return {...state, number_on_display: state.number_on_display + action.amount};
        default:
            return state;
    }
};

export default reducer;
