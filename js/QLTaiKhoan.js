
window.onload = function () {

    var username = localStorage.getItem('loggedInUser') || [];
    var user = JSON.parse(username);
    var name = user.name;

    if (username) {

        document.getElementById('username').innerText = name;
    }
}
function logo() {
    window.location.href = "trangchuAdmin.html";
}

function themTaiKhoan() {
    var username = document.getElementById("taiKhoan");
    var password = document.getElementById("matKhau");
    var name = document.getElementById("tenNguoiDung");
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
    alert("Thêm tài khoản thành công");
    location.reload();

}

function xoaTaiKhoan() {

    if (confirm('Bạn có muốn xóa toàn bộ dữ liệu không ?')) {
        localStorage.removeItem('users');
    }

    DSTaiKhoan.innerHTML = "Không có dữ liệu người dùng trong localStorage";
};




var DSTaiKhoan = document.getElementById("DSTaiKhoan");


var users = JSON.parse(localStorage.getItem('users'));


if (users) {

    users.forEach(function (user, index) {
        var username = user.username;
        var password = user.password;
        var name = user.name;


        var userDiv = document.createElement("div");
        userDiv.innerHTML = "Tên người dùng: " + name + "<br>" +
            "Tên đăng nhập: " + username + "<br>" +
            "Mật khẩu: " + password + "<br>";



        var deleteButton = document.createElement("button");
        deleteButton.style.padding = '8px';
        deleteButton.style.backgroundColor = 'red';
        deleteButton.style.borderStyle = 'none';
        deleteButton.style.color = 'white';
        deleteButton.style.borderRadius = '2px';
        deleteButton.innerHTML = "Xóa tài khoản";
        deleteButton.onclick = function () {
            if (confirm('Bạn có muốn xóa dữ liệu không ?')) {

                users.splice(index, 1);

                localStorage.setItem('users', JSON.stringify(users));

                userDiv.remove();
            }
        };


        var editButton = document.createElement("button");
        editButton.style.backgroundColor = 'green';
        editButton.style.padding = '8px';
        editButton.style.color = 'white';
        editButton.style.borderStyle = 'none';
        editButton.style.borderRadius = '2px';
        editButton.innerHTML = "Chỉnh sửa tài khoản";

        editButton.onclick = function () {
            var newName = prompt("Nhập tên người dùng mới:", name);
            var newUsername = prompt("Nhập tên đăng nhập mới:", username);
            var newPassword = prompt("Nhập mật khẩu mới:", password);
            if (newName && newUsername && newPassword) {

                if (newUsername.length < 8) {
                    alert("Tên đăng nhập phải bằng hoặc hơn 8 kí tự!");
                    return false;
                }
                if (newPassword.length < 8) {
                    alert("Mật khẩu phải bằng hoặc hơn 8 kí tự!");
                    return false;
                }

                var duplicateName = users.find(function (user, idx) {
                    return user.name === newName && idx !== index;
                });
                if (duplicateName) {
                    alert("Tên người dùng đã tồn tại!");
                    return false;
                }

                var duplicateUsername = users.find(function (user, idx) {
                    return user.username === newUsername && idx !== index;
                });
                if (duplicateUsername) {
                    alert("Tên đăng nhập đã tồn tại!");
                    return false;
                }



                users[index].name = newName;
                users[index].username = newUsername;
                users[index].password = newPassword;
                localStorage.setItem('users', JSON.stringify(users));
                alert("Chỉnh sửa tài khoản thành công");
                location.reload();
            } else {
                alert("Vui lòng nhập đầy đủ thông tin!");
            }

        };

        var hr = document.createElement('hr');
        var groupbt = document.createElement('div');
        groupbt.appendChild(deleteButton);
        groupbt.appendChild(editButton);
        groupbt.style.padding = '10px';
        groupbt.style.display = 'flex';
        groupbt.style.justifyContent = 'space-around';

        userDiv.appendChild(groupbt);
        userDiv.appendChild(hr);

        DSTaiKhoan.appendChild(userDiv);
    });
}
else {
    DSTaiKhoan.innerHTML = "Không có dữ liệu người dùng trong localStorage";
}

