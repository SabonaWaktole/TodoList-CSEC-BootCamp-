let dropdown = document.getElementById('toselect');


dropdown.addEventListener('click', () => {
    let selectedOption = dropdown.options[dropdown.selectedIndex].id;
    let checkboxes = document.querySelectorAll('.box');

    if (selectedOption === 'All') {
        checkboxes.forEach((box) => {
            box.parentElement.style.display = 'flex';
        });
    } else if (selectedOption === 'Inprogress') {
        checkboxes.forEach((box) => {
        if (box.checked) {
            box.parentElement.style.display = 'none';
        } else {
            box.parentElement.style.display = 'flex';
        }
        });
    } else if (selectedOption === 'Finished') {
        checkboxes.forEach((box) => {
        if (box.checked) {
            box.parentElement.style.display = 'flex';
        } else {
            box.parentElement.style.display = 'none';
        }
        });
    }
});

let add = document.getElementById('btn');
add.addEventListener('click', () => {
    let form = document.querySelector('.hiddenform');
    form.style.display = 'block';
    document.body.style.backgroundColor = 'grey';
});


let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
    let form = document.querySelector('.hiddenform');
    form.style.display = 'none';
    document.body.style.backgroundColor = 'white';
});

