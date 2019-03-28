// первоначальное значение стейта, которое будет храниться в хранилище после первого вызова редьюсера:
const initialState = {
    numbers_on_display: '',
    symbols_on_display: '',
    calc_arguments: [],
    result: null
};


// редьюсер принимает первым значением некий "аккумулятор" (стейт),
// вторым аргументом - "значение" (здесь - пришедший action)
const reducer = (state = initialState, action) => {
    let {numbers_on_display, calc_arguments, symbols_on_display, result} = state;
    switch (action.type) {
        // выполняется при нажатии на кнопку с цифрой
        case 'DISPLAY_NUMBER':


            // записываем цифру с кнопки, которая была нажата, на экран
            symbols_on_display = symbols_on_display + action.number;

            // записываем цифру с кнопки, которая была нажата, в строку, где будет собираться число
            numbers_on_display = numbers_on_display + action.number;


            console.log(state, 'state - DISPLAY_NUMBER');
            return {...state, symbols_on_display: symbols_on_display, numbers_on_display: numbers_on_display};

        // выполняется при нажатии на кнопку со знаком арифметической операции: +, -, * или /
        case 'DISPLAY_OPERATION':
            // записываем
            symbols_on_display = symbols_on_display + action.operation;

            // переделываем строку, содержащую цифры нового операнда, в целое число
            let new_operand = Number(numbers_on_display);


            // добавляем новый операнд в вычислительные аргументы
            calc_arguments.push(new_operand);
            // добавляем знак арифметической операции в вычислительные аргументы
            calc_arguments.push(action.operation);

            //  обнуляем numbers_on_display
            numbers_on_display = '';

            console.log(state, 'state - DISPLAY_OPERATION');
            // возвращаем нужные значения и указываем, что дальше "numbers_on_display" будет заполняться заново
            return {...state, symbols_on_display: symbols_on_display,
                calc_arguments: calc_arguments, numbers_on_display: numbers_on_display};

        // выполняется при нажатии на кнопку "="
        case 'EVAL_OPERATION':
            // записываем на экран знак "="
            symbols_on_display = symbols_on_display + '=';
            // переделываем строку, содержащую цифры нового операнда, в целое число:
            new_operand = Number(numbers_on_display);
            // добавляем новый операнд в вычислительные аргументы:
            calc_arguments.push(new_operand);

            // обнуляем numbers_on_display:
            numbers_on_display = '';
            console.log(numbers_on_display, 'numbers_on_display - eval_operation');

            // выполняем вычисления поэтапно, сокращая массив до одного значения - результата
            // пример: calc_arguments: [1, -, 5, *, 8, /, 10, +, 4] (результат: [1])

            do {
                for (let index=0; index < calc_arguments.length; index++) {
                    let result;
                    if (calc_arguments[index] === '*' || calc_arguments[index] === '/') {
                        let first_operand_index = index - 1;
                        let second_operand_index = index + 1;
                        if (calc_arguments[index] === '*') {
                            result = calc_arguments[first_operand_index] * calc_arguments[second_operand_index]
                        } else {
                            result = calc_arguments[first_operand_index] / calc_arguments[second_operand_index]
                        }
                        // кладем результат умножения или деления в массив
                        calc_arguments[first_operand_index] = result;
                        // удаляем лишние элементы из массива
                        calc_arguments.splice(index, 2);
                        // [1, -, 40, /, 10, +, 4]
                        // return calc_arguments;
                    }
                }
                console.log(calc_arguments)
            } while (calc_arguments.includes('*') || calc_arguments.includes('/'));

            do {
                for (let index=0; index < calc_arguments.length; index++) {
                    let result;
                    if (calc_arguments[index] === '+' || calc_arguments[index] === '-') {
                        let first_operand_index = index - 1;
                        let second_operand_index = index + 1;
                        if (calc_arguments[index] === '+') {
                            result = calc_arguments[first_operand_index] + calc_arguments[second_operand_index]
                        } else {
                            result = calc_arguments[first_operand_index] - calc_arguments[second_operand_index]
                        }
                        // кладем результат сложения или вычитания в массив
                        calc_arguments[first_operand_index] = result;
                        // удаляем лишние элементы из массива
                        calc_arguments.splice(index, 2);
                        // [1, -, 40, /, 10, +, 4]
                        // return calc_arguments;
                    }
                }
                console.log(calc_arguments)
            } while (calc_arguments.includes('+') || calc_arguments.includes('-'));
            console.log(calc_arguments, 'calc_arguments3');

            // записываем единственный элемент, полученный после преобразования массива, в result
            result = calc_arguments[0];
            console.log(result, 'result');

            // // обнуляем calc_arguments
            // calc_arguments = null;
            console.log(calc_arguments, 'calc_arguments after result');

            // записываем на экран результат
            symbols_on_display = symbols_on_display + result;

            return {...state, calc_arguments: calc_arguments, result: result,
                numbers_on_display: numbers_on_display, symbols_on_display: symbols_on_display};

        // выполняется при нажатии на кнопку перезагрузки (AC)
        case 'ERASE_ALL':
            state = initialState;
            state.calc_arguments = [];
            


            console.log(state, 'erase all - state=InitialState');

            return {...state};
        default:
            return state;
    }
};

export default reducer;
