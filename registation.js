document.getElementById('registrationForm').addEventListener('submit', function(event) {
event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;

    if (username === "" || email === "" || password === "" || age === "" ) {
        alert("Please fill in all required fields.");
    } else {
        window.location.href = 'mygames.html'; 
    }
});