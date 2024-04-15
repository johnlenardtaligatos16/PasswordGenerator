document.getElementById('generate').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";

    for (var i = 0; i < length; i++) {
        var randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
        password += randomChar;
    }

    document.getElementById('password').value = password;
});