
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
var dx = document.getElementById('dangxuat').addEventListener('click',()=>{
    localStorage.removeItem('loggedInUser')
})
var openFile = function (file) {
    var input = file.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var img = document.createElement('img');
        img.src = dataURL;
        img.style.padding = '10px';
        img.style.display = 'block';
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';
        img.style.maxWidth = '900px';
        var tcontent = document.getElementById('contentmain');
        tcontent.append(img);
    };
    reader.readAsDataURL(input.files[0]);
};

function youtube() {
    var embeded = prompt("Nhập embed từ YouTube, Spotify ");
    var ifra = document.createElement('div');
    ifra.innerHTML = embeded;
    ifra.style.textAlign = 'center';
    var tcontent = document.getElementById('contentmain');
    tcontent.append(ifra);
}

var imgdata = "";
var titleFile = function (file) {
    var input = file.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        imgdata = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};


var listbv = JSON.parse(localStorage.getItem('baivietlist')) || {};
for (let i = 0; i < listbv.length; i++) {
    baiviet = listbv[i];
    const mainp = document.getElementById('mainpage');
    const contentpage = document.getElementById('contentpage');

    const div = document.createElement('div');
    const div2 = document.createElement('div');
    div.appendChild(div2);
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'space-around';
    div2.style.display = 'flex';
    div2.style.minWidth = '80%';

    div2.style.height = 'fit-content';
    div2.style.border = '2px solid black';
    div2.style.margin = 'auto';
    div2.style.marginTop = '20px';
    div2.style.borderRadius = '4px';
    const anh = document.createElement('img');
    anh.style.width = '300px';
    anh.style.height = '190px';
    anh.src = baiviet.img;
    div2.appendChild(anh);
    const div3 = document.createElement('div');
    div3.style.display = 'flex';
    div3.style.flexDirection = 'column';
    div3.style.marginLeft = '30px';
    div3.style.width = '780px';
    div3.style.marginTop = '10px';
    div2.appendChild(div3);
    var tinhtrang = document.createElement('p');
    tinhtrang.style.textAlign = 'right';
    tinhtrang.style.fontSize = 'large';
    tinhtrang.style.marginRight = '20px';
    tinhtrang.innerText = "Trạng thái: " + baiviet.status;
    const tiude = document.createElement('label');
    tiude.style.fontWeight = 'bold';
    tiude.style.fontSize = 'larger';
    tiude.style.padding = '5px';
    tiude.innerText = baiviet.title;
    var sttvatt = document.createElement('div');

    var stt = document.createElement('p');
    stt.innerText = 'Số thứ tự: ' + (i + 1);
    stt.style.fontSize = 'large';
    sttvatt.style.display = 'flex';
    sttvatt.style.justifyContent = 'space-between';
    sttvatt.appendChild(stt);
    sttvatt.appendChild(tinhtrang);
    div3.appendChild(sttvatt);
    div3.appendChild(tiude);
    const div4 = document.createElement('div');
    div4.style.display = 'inline-flex';
    div4.style.marginLeft = '10px';
    const timestamp = document.createElement('p');
    timestamp.innerText = baiviet.timestamp;
    timestamp.style.marginRight = '50px';
    const author = document.createElement('p');
    author.innerText = "Tác giả: " + baiviet.author;
    author.style.marginRight = '50px';
    const game = document.createElement('p');
    game.innerText = "Phân loại: " + baiviet.game;
    const div5 = document.createElement('div');
    var trimline = document.createElement('p');
    trimline.innerText = baiviet.trim;
    trimline.style.marginTop = '10px';
    trimline.style.marginLeft = '10px';
    trimline.style.fontSize = 'large';
    const xem = document.createElement('button');
    xem.style.backgroundColor = 'skyblue';
    xem.innerText = 'Xem'
    const sua = document.createElement('button');
    sua.style.backgroundColor = 'orange';
    sua.innerText = 'Sửa';
    sua.onclick = function fetchIndex() {
        localStorage.setItem("index", JSON.stringify(i));
    };
    const xoa = document.createElement('button');
    xoa.style.backgroundColor = 'red';
    xoa.innerText = 'Xóa';
    const duyet = document.createElement('button');
    const koduyet = document.createElement('button');
    duyet.style.backgroundColor = 'lightgreen';
    duyet.innerText = 'Duyệt';
    koduyet.style.backgroundColor = 'red';
    koduyet.innerText = 'Không duyệt';
    div5.appendChild(xem);
    div5.appendChild(sua);
    div5.appendChild(xoa);
    div5.appendChild(duyet);
    div5.appendChild(koduyet);
    div5.style.display = 'flex';
    div5.style.justifyContent = 'space-evenly';
    div5.style.marginTop = '20px';
    div5.style.flexWrap = 'wrap';
    div5.style.marginBottom = '15px';
    div4.appendChild(timestamp);
    div4.appendChild(author);
    div4.appendChild(game);
    div3.appendChild(div4);
    div3.appendChild(trimline);
    div3.appendChild(div5);
    contentpage.appendChild(div);

    const divtin = document.createElement('div');
    divtin.style.border = '2px solid black';
    divtin.style.position = 'relative';
    divtin.style.width = '70%';
    divtin.style.marginBottom = '30px';
    divtin.style.borderRadius = '5px';
    divtin.style.display = 'none';
    const divfullnd = document.createElement('div');
    const textnd = document.createElement('p');
    textnd.style.padding = '30px';
    textnd.style.lineHeight = '25px';
    textnd.innerHTML = baiviet.content;
    divtin.appendChild(textnd);
    divtin.appendChild(divfullnd);
    contentpage.appendChild(divtin);
    xem.addEventListener('click', function () {
        if (divtin.style.display == 'none') {
            divtin.style.display = "block";
        } else {
            divtin.style.display = "none";
        }
    })

    sua.addEventListener('click', () => {
        var suoc = JSON.parse(localStorage.getItem('index'));
        const ovl = document.getElementById('overlay');
        ovl.style.display = 'block';
        let guitin = document.getElementById('submittin');
        guitin.style.display = 'none';
        var subt = document.getElementById('edittin');
        subt.style.display = 'block';
        var title = document.getElementById('title');
        var trim = document.getElementById('trim');
        title.value = listbv[suoc].title;
        trim.value = listbv[suoc].trim;
        var game = document.getElementById('game');
        game.value = listbv[suoc].game;
        var tcontent = document.getElementById('contentmain');
        tcontent.innerHTML = listbv[suoc].content;
        var status = listbv[suoc].status;
        var author = listbv[suoc].author;
        subt.onclick = function update() {
            var title = document.getElementById('title').value;
            var trim = document.getElementById('trim').value;
            var game = document.getElementById('game').value;
            var tcontent = document.getElementById('contentmain').innerHTML;
            var timestamp = new Date().toLocaleString();
            if (title == "" || tcontent == "" || game == "" || imgdata == "") {
                alert("Vui lòng nhập thông tin");
            } else {
                var edit = {
                    title: title,
                    trim: trim,
                    game: game,
                    img: imgdata,
                    status: status,
                    author: author,
                    content: tcontent,
                    timestamp: timestamp,
                }
                listbv[suoc] = edit;
                localStorage.setItem('baivietlist', JSON.stringify(listbv));
                alert('Sửa thành công');
                location.reload();
            }
        }
    })

    duyet.addEventListener('click', function () {
        if (confirm('Bạn có chắc chắn muốn duyệt?')) {
            updateStatus(i, 'Đã duyệt');
            alert("Duyệt thành công");
            location.reload();
        }
    })

    koduyet.addEventListener('click', function () {
        if (confirm('Bạn có chắc chắn muốn không duyệt?')) {
            updateStatus(i, 'Không duyệt');
            alert("Không duyệt thành công");
            location.reload();
        }
    })

    xoa.addEventListener('click', function () {
        if (confirm("Bạn có chắc chắn muốn xóa?")) {
            contentpage.removeChild(div);
            contentpage.removeChild(divtin);
            listbv.splice(i, 1);
            localStorage.setItem('baivietlist', JSON.stringify(listbv));
            alert("Xóa thành công");
            location.reload();
        }
    })

}


function updateStatus(index, status) {

    listbv[index].status = status;


    localStorage.setItem("baivietlist", JSON.stringify(listbv));
}



