
// drop down button functionality
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

// Theme button functionality
let night = document.getElementById('nightmode');
let isWhite = true;
night.addEventListener('click', () => {
    if (isWhite){
        let form = document.querySelector('.hiddenform');
        form.style.display = 'none';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        isWhite = false;
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        isWhite = true;
    }
});

// Add button functionality

let add = document.getElementById('btn');
add.addEventListener('click', () => {
    let form = document.querySelector('.hiddenform');
    form.style.display = 'block';
    document.body.style.backgroundColor = '#e8e6e6ac';
    form.style.backgroundColor = 'white';
});

// Apply button functionality
let apply = document.getElementById('submit');
apply.addEventListener('click', () => {
    // Select the hidden form, description input, and notes container
    let form = document.querySelector('.hiddenform');
    let description = document.getElementById('description').value;
    let notes = document.getElementsByClassName('notes');

    if (!description.trim()) {
        alert('Description cannot be empty!');
        return; // Exit the function if description is empty
    }

    // Create the new div with a checkbox and paragraph
    let div = document.createElement('div');
    div.classList.add('boxes');

    let checkbox = document.createElement('input');
    checkbox.classList.add('box');
    checkbox.type = 'checkbox';

    let p = document.createElement('p');
    p.textContent = description;


    let edit = document.createElement('button');
    edit.classList.add('edit');
    edit.textContent = '^';

    let del = document.createElement('button');
    del.classList.add('delete');
    del.textContent = '-';

    div.appendChild(checkbox);
    div.appendChild(edit);
    div.appendChild(del);
    div.appendChild(p);

    let line = document.createElement('hr');
    notes[0].appendChild(line);

    notes[0].appendChild(div);

    form.style.display = 'none';
    document.body.style.backgroundColor = 'white';

    // Clear the description input field
    document.getElementById('description').value = '';
});

//cancel button functionality
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
    let form = document.querySelector('.hiddenform');
    form.style.display = 'none';
    document.body.style.backgroundColor = 'white';
});




