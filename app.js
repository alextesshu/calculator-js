document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const result = document.getElementById('result');
    
    let operation = null;

    const setOperation = (op) => {
        operation = op;
    };

    document.getElementById('add').addEventListener('click', () => setOperation('add'));
    document.getElementById('sub').addEventListener('click', () => setOperation('sub'));
    document.getElementById('mul').addEventListener('click', () => setOperation('mul'));
    document.getElementById('div').addEventListener('click', () => setOperation('div'));

    document.getElementById('equals').addEventListener('click', () => {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);

        if (isNaN(num1) || isNaN(num2)) {
            result.textContent = 'Error: Invalid input';
            operation = null;
            return;
        }

        let res;
        switch (operation) {
            case 'add':
                res = num1 + num2;
                break;
            case 'sub':
                res = num1 - num2;
                break;
            case 'mul':
                res = num1 * num2;
                break;
            case 'div':
                if (num2 === 0) {
                    result.textContent = 'Error: Division by zero';
                    operation = null;
                    return;
                }
                res = num1 / num2;
                break;
            default:
                result.textContent = 'Error: No operation selected';
                operation = null;
                return;
        }

        result.textContent = `Result: ${res}`;
        operation = null;
    });
});
