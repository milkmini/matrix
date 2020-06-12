// выводим значение инпута
const valueInput = (id) => {
    return document.getElementById(id).value;
}
// отчищаем значение инпута
const cleanInput = (id) => {
    return document.getElementById(id).value = ' ';
}
// создание матрицы
function matrix(widthBlock, lengthBlock) {
    // Переменные схемы матрицы
    let result = new Array(lengthBlock).fill().map(() => new Array(widthBlock).fill(''));
    let counter = 1;
    let startCol = 0;
    let endCol = widthBlock - 1;
    let startRow = 0;
    let endRow = lengthBlock - 1;

    // цикл выполнения матрицы
    while ( startCol <= endCol && startRow <= endRow ) {
        // цикл построения первой горизонтали
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        // опускаем горинзонталь
        startRow++;
        // цикл построение первой ввертикали
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        // сдвигаем вертикаль
        endCol--;
        // цикл построения конечной горизонтали
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        // поднимаем вертикаль
        endRow--;
        // цикл построение конечной вертикали
        for (let j = endRow; j >= startRow; j--) {
            result[j][startCol] = counter;
            counter++;
        }
        // сдвигаем горизонталь
        startCol++;
    }
    // возвращаем массив матрицы
    return result;
}
// Вырисовка матрицы
function matrixView(result) {
    let rows = '';
    // делаем построение матницы
    for(let i = 0; i < result.length; i++) {
        let cells = '';
        // построение колоннок
        for(let j = 0; j < result[i].length; j++) {
            cells += '<div class="block__col">' + result[i][j] + '</div>';
        }
    // построение горизонталей
        rows += '<div class="block__row">' + cells + '</div>';
    }
    // рисуем их в HTML
    let div = document.createElement('div');
    div.className = "block";
    div.innerHTML = rows;
    section.after(div);
}
// Построенние матрицы
document.getElementById('button').onclick = function () {
    // берем значение из инпутов
    const widthBlock = Number(valueInput('width'));
    const lengthBlock = Number(valueInput('length'));
    // передаем их в функции
    matrixView(matrix(widthBlock, lengthBlock));
    cleanInput('length');
    cleanInput('width');
}