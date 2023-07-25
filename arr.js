let grades = [];

function makeRandomArray() {
    let randomNum = Math.floor(Math.random() * 100) + 1;

    if (grades.length < 12) {
        grades.push(randomNum);
        makeRandomArray();
    }
    else {
        return;
    }
}

makeRandomArray();

console.log(grades);

let gradesBlock = document.getElementById("grades");
gradesBlock.textContent = grades;

// Вычисляем средний балл

let sum = 0;
grades.forEach(function (grade) {
    sum = sum + grade;
})
console.log(sum);

let averageGr = sum / grades.length;
console.log(averageGr);

let averageBlock = document.getElementById("average");
averageBlock.textContent = averageGr;

// Находим максимальный балл
const maxGrade = Math.max(...grades);
console.log(maxGrade);

let maxBlock = document.getElementById("max");
maxBlock.textContent = maxGrade;

// Находим минимальный балл (другим способом)
const grades1 = [...grades];

grades1.sort((a, b) => a - b);

const minGrade = grades1[0];
console.log(minGrade);

let minBlock = document.getElementById("min");
minBlock.textContent = minGrade;
// Найдем количество студентов, получивших положительную оценку

const positivGrades = grades.filter((grade) => grade >= 60);

console.log(`Положительную оценку получили - ${positivGrades.length}`);

let positiveBlock = document.getElementById("positive");
positiveBlock.textContent = positivGrades.length;

// Найдем количество студентов, получивших отрицательную оценку

const negativGrades = grades.filter((grade) => grade < 60);
console.log(`Отрицательную оценку получили - ${negativGrades.length}`);

let negativeBlock = document.getElementById("negative");
negativeBlock.textContent = negativGrades.length;

//Распределим результаты по оценкам:


let letterGrades = grades.map(grade => {
    if (grade >= 80) {
        return "A";
    } else if (grade >= 60) {
        return "B";
    } else if (grade >= 40) {
        return "C";
    } else if (grade >= 20) {
        return "D";
    } else {
        return "E";
    }
});

console.log(letterGrades);

let lettersBlock = document.getElementById("letters");
lettersBlock.textContent = letterGrades;
