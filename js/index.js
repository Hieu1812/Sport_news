
var adminAccount = {
    name: "Admin",
    username: "adminAccount",
    password: "adminAccount123"
};

localStorage.setItem('admin', JSON.stringify(adminAccount));
function logo() {
    window.location.href = "index.html";
}
localStorage.removeItem('index');

var listbv = JSON.parse(localStorage.getItem('baivietlist')) || {};
for (let i = 0; i < listbv.length; i++) {
    baiviet = listbv[i];
    if (baiviet.status == 'Đã duyệt') {
        var content = document.getElementById('content');
        let ndpage = document.createElement('div');
        ndpage.setAttribute('id', "page")
        ndpage.style.display = 'flex';
        ndpage.style.height = 'fit-content';
        ndpage.style.border = '2px solid black';
        ndpage.style.backgroundColor = 'white';
        ndpage.style.borderRadius = '5px';
        ndpage.style.marginBottom = '30px';
        ndpage.style.width = '100%';
        let img = document.createElement('img');
        img.style.width = '300px';
        img.style.height = '190px';
        img.src = baiviet.img;
        let text = document.createElement('div');
        text.style.marginLeft = '20px';
        text.style.padding = '10px';
        let title = document.createElement('a');
        title.innerText = baiviet.title;
        title.href = "trangtinKhachTham.html";
        title.title = baiviet.title;
        title.onclick = function fetchIndex() {
            localStorage.setItem("index", JSON.stringify(i));
        };

        title.style.fontWeight = 'bold';
        title.style.textDecoration = 'none';
        title.style.fontSize = 'larger';
        title.style.color = 'black';
        title.style.fontFamily = 'Montserrat';
        let timenau = document.createElement('div');

        timenau.style.padding = '10px';
        timenau.style.gap = '20px';
        timenau.style.display = 'flex';
        let time = document.createElement('p');
        time.innerText = 'Time: ' + baiviet.timestamp;
        let author = document.createElement('p');
        author.innerText = 'Tác giả: ' + baiviet.author;
        let game = document.createElement('p');
        game.innerText = 'Phân loại: ' + baiviet.game;
        timenau.appendChild(time);
        timenau.appendChild(author);
        timenau.appendChild(game);
        let trim = document.createElement('p');
        trim.innerText = baiviet.trim;
        text.appendChild(title);
        text.appendChild(timenau);
        text.appendChild(trim);
        ndpage.appendChild(img);
        ndpage.appendChild(text);
        content.appendChild(ndpage);
    }

}



function duyet(dauvao) {

    for (let i = 0; i <= listbv.length; i++) {
        baiviet = listbv[i];
        if (baiviet.status == 'Đã duyệt' && baiviet.game == dauvao) {
            console.log(baiviet);
            let content = document.getElementById('content');
            content.innerHTML = '';
            let ndpage = document.createElement('div');
            ndpage.setAttribute('id', "page")
            ndpage.style.display = 'flex';
            ndpage.style.height = 'fit-content';
            ndpage.style.border = '2px solid black';
            ndpage.style.borderRadius = '5px';
            ndpage.style.backgroundColor = 'white';
            ndpage.style.marginBottom = '30px';
            ndpage.style.width = '100%';
            let img = document.createElement('img');
            img.style.width = '300px';
            img.style.height = '190px';
            img.src = baiviet.img;
            let text = document.createElement('div');
            text.style.marginLeft = '20px';
            text.style.padding = '10px';
            let title = document.createElement('a');
            title.innerText = baiviet.title;
            title.href = "trangtinKhachTham.html";
            title.title = baiviet.title;
            title.onclick = function fetchIndex() {
                localStorage.setItem("index", JSON.stringify(i));
            };

            title.style.fontWeight = 'bold';
            title.style.textDecoration = 'none';
            title.style.fontSize = 'larger';
            title.style.color = 'black';
            title.style.fontFamily = 'Montserrat';
            let timenau = document.createElement('div');

            timenau.style.padding = '10px';
            timenau.style.gap = '20px';
            timenau.style.display = 'flex';
            let time = document.createElement('p');
            time.innerText = 'Time: ' + baiviet.timestamp;
            let author = document.createElement('p');
            author.innerText = 'Tác giả: ' + baiviet.author;
            let game = document.createElement('p');
            game.innerText = 'Phân loại: ' + baiviet.game;
            timenau.appendChild(time);
            timenau.appendChild(author);
            timenau.appendChild(game);
            let trim = document.createElement('p');
            trim.innerText = baiviet.trim;
            text.appendChild(title);
            text.appendChild(timenau);
            text.appendChild(trim);
            ndpage.appendChild(img);
            ndpage.appendChild(text);
            content.appendChild(ndpage);
        }

    }


}