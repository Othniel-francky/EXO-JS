const form = document.querySelector('.form-quizz');
let tableauResultats = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for (let i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    console.log(tableauResultats);
    tableauResultats = [];
})
