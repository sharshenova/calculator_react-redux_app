// первоначальное значение стейта, которое будет храниться в хранилище после первого вызова редьюсера:
const initialState = {
    count: 0
};

// редьюсер принимает первым значением некий "аккумулятор" (стейт),
// вторым аргументом - "значение" (здесь - пришедший action)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_SYMBOL':
            return {...state, count: state.count};
        case 'SUM':
            return {...state, count: state.count + action.amount};
        default:
            return state;
    }
};

export default reducer;
