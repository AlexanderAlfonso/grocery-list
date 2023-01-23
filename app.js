let groceryButton = document.getElementById('grocery-button');
let inputList = document.getElementById('input-list');
let inputField = document.getElementById('input-field');

// This script allows you to click on the submit button and resets the form to an empty string
groceryButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    inputList.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        inputList.removeChild(paragraph);
    })
})

// // This script allows you to hit enter after typing in your item and resets the form to an empty string
inputField.addEventListener('keydown', function(event){
    if (inputField.value.length > 0 && event.which === 13) {
        var paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        inputList.appendChild(paragraph);
        inputField.value = '';
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = 'line-through';
        })
        paragraph.addEventListener('dblclick', function(){
            inputList.removeChild(paragraph);
        })
    }
})