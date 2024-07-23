function login() {

    var storedAdmin = JSON.parse(localStorage.getItem('admin'));
    var usernameAdmin = storedAdmin.username;
    var passwordAdmin = storedAdmin.password;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = users.find(function (user) {
        return user.username === username && user.password === password;
    });
    if (user) {

        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert("Đăng nhập thành công");
        window.location.href = "trangchuUser.html";
    }
    else if (username == usernameAdmin && password == passwordAdmin) {
        localStorage.setItem('loggedInUser', JSON.stringify(storedAdmin));
        alert("Chào mừng admin !")
        window.location.href = "trangchuAdmin.html";
    }
    else {
        alert("Tài khoản không tồn tại hoặc mật khẩu không chính xác!");
    }
}