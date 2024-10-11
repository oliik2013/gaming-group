function showPassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {        
        window.location.href = 'menu.html';
        passwordField.type = 'text';
        }
        else {
        passwordField.type = 'password';
    }
}

function changePlaceholder() {
    const passwordField = document.getElementById('password');
    passwordField.placeholder = '2jocu4';
}
