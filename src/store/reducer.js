// первоначальное значение стейта, которое будет храниться в хранилище после первого вызова редьюсера:
const initialState = {
    counter: 0
};

// редьюсер принимает первым значением некий "аккумулятор" (стейт),
// вторым аргументом - "значение" (здесь - пришедший action)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'ADD_COUNTER':
            return {...state, counter: state.counter + action.amount};
        default:
            return state;
    }
};

export default reducer;
