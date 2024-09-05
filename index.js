let count = 1; 
const countDisplay = document.getElementById('count'); 
const errorMessage = document.getElementById('error-message'); 
const clearButton = document.getElementById('clear');


document.getElementById('increment').addEventListener('click', function() {
    count++; 
    updateCount(); 
});


document.getElementById('decrement').addEventListener('click', function() {
    if (count < 1) { 
        errorMessage.style.display = 'block'; 
    } 
    else {
        count--;
        updateCount(); 
    }
});


clearButton.addEventListener('click', function() {
    count = 1; 
    updateCount();
    clearButton.style.display = 'none'; 
});


function updateCount() {
    countDisplay.innerText = count; 
    errorMessage.style.display = 'none'; 
    if (count < 1) { 
        clearButton.style.display = 'none';
    } else {
        clearButton.style.display = 'inline-block'; 
    }
}
