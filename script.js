//your JS code here. If required.
var input = document.getElementById('fname');

input.addEventListener('blur', () => {
    input.value = input.value.toUpperCase();
});
