document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission

    const formData = new FormData(this);

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Display server response
    })
    .catch(error => {
        console.error('Error:', error);
    });
});