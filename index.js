document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    if (username === "" || email === "") {
        alert("Please fill in all fields.");
    } else            
    {
        window.location.href = 'registation.html';
    }
});