
var adminAccount = {
    name: "Admin",
    username: "adminAccount",
    password: "adminAccount123"
};

localStorage.setItem('admin', JSON.stringify(adminAccount));

function register() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var name = document.getElementById("name");
    var repassword = document.getElementById("repassword");
    if (name.value == "") {
        alert("Vui lòng nhập tên người dùng !");
        return false;
    }
    if (username.value != "") {
        if (username.value.length < 8) {
            alert("Vui lòng nhập tên đăng nhập bằng hoặc hơn 8 kí tự !");
            return false;
        }
    }
    else {
        alert("Vui lòng nhập tên đăng nhập !");
        return false;
    }
    if (password.value != "") {
        if (password.value.length < 8) {
            alert("Vui lòng nhập mật khẩu bằng hoặc hơn 8 kí tự !");
            return false;
        }
    }
    else {
        alert("Vui lòng nhập mật khẩu !");
        return false;
    }
    if (repassword.value != "") {
        if (repassword.value != password.value) {
            alert("Mật khẩu không trùng khớp !");
            return false;
        }
    }
    else {
        alert("Vui lòng nhập lại mật khẩu !");
        return false;
    }
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var newUser = {
        name: name.value,
        username: username.value,
        password: password.value,
    };

    var existingUser = users.find(function (user) {
        return user.username === newUser.username;
    });
    if (existingUser) {
        alert("Tên đăng nhập đã tồn tại!");
        return false;
    }

    var existingName = users.find(function (users) {
        return users.name === newUser.name;
    });
    if (existingName) {
        alert("Tên người dùng đã tồn tại!");
        return false;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Đăng ký thành công");
}



