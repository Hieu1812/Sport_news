
window.onload = function () {

    var username = localStorage.getItem('loggedInUser') || [];
    var user = JSON.parse(username);
    var name = user.name;

    if (username) {

        document.getElementById('username').innerText = name;
    }
}

window.onbeforeunload = function () {
    localStorage.setItem('index', suoc);
}
var dx = document.getElementById('dangXuat').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser')
})
function logo() {
    window.location.href = "trangchuAdmin.html";
}


var listbv = JSON.parse(localStorage.getItem('baivietlist')) || [];
var suoc = JSON.parse(localStorage.getItem('index'));
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!listbv[suoc].likes) listbv[suoc].likes = [];
if (!listbv[suoc].dislikes) listbv[suoc].dislikes = [];
if (!listbv[suoc].comments) listbv[suoc].comments = [];

for (let i = 0; i < listbv.length; i++) {
    if (i == suoc) {
        let baiviet = listbv[i];
        document.getElementById('title1').innerText = baiviet.title;
        document.title = baiviet.title;
        document.getElementById('time').innerText = baiviet.timestamp;
        document.getElementById('author').innerText = "Tác giả: " + baiviet.author;
        document.getElementById('game').innerText = baiviet.game;
        document.getElementById('trim').innerText = baiviet.trim;
        document.getElementById('noidung').innerHTML = baiviet.content;


        var likeDislikeDiv = document.createElement('div');
        likeDislikeDiv.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div id="likeCount" style="cursor: pointer;">${baiviet.likes.length} Likes</div>
                <div id="dislikeCount" style="margin-left: 20px; cursor: pointer;">${baiviet.dislikes.length} Dislikes</div>
                <div id="commentCount" style="margin-left: 20px; cursor: pointer;">${baiviet.comments.length} Comments</div>
            </div>
        `;
        document.getElementById('noidung').appendChild(likeDislikeDiv);


        var iconDiv = document.createElement('div');
        iconDiv.innerHTML = ` 
            <span id="likeIcon" style="font-size: 24px; cursor: pointer;">👍</span>
            <span id="dislikeIcon" style="font-size: 24px; margin-left: 20px; cursor: pointer;">👎</span>
            <hr style="margin-top: 30px; margin-bottom: 30px;">
            <textarea id="commentInput" placeholder="Thêm bình luận" style="display: block;width: 500px; height: 100px;"></textarea>
            <button id="commentBtn" style="margin-top: 10px; background-color: green; padding:8px; color: white; border-style:none; border-radius:2px;">Đăng bình luận</button>
        `;
        document.getElementById('noidung').appendChild(iconDiv);


        var userLiked = baiviet.likes.includes(loggedInUser.name);
        var userDisliked = baiviet.dislikes.includes(loggedInUser.name);


        document.getElementById('likeIcon').addEventListener('click', function () {
            if (!userLiked && !userDisliked) {
                baiviet.likes.push(loggedInUser.name);
                userLiked = true;
            } else if (userLiked) {
                baiviet.likes = baiviet.likes.filter(user => user !== loggedInUser.name);
                userLiked = false;
            } else {
                alert("Bạn đã dislike bài viết này rồi!");
                return;
            }
            document.getElementById('likeCount').innerText = `${baiviet.likes.length} Likes`;
            localStorage.setItem('baivietlist', JSON.stringify(listbv));
        });


        document.getElementById('dislikeIcon').addEventListener('click', function () {
            if (!userLiked && !userDisliked) {
                baiviet.dislikes.push(loggedInUser.name);
                userDisliked = true;
            } else if (userDisliked) {
                baiviet.dislikes = baiviet.dislikes.filter(user => user !== loggedInUser.name);
                userDisliked = false;
            } else {
                alert("Bạn đã like bài viết này rồi!");
                return;
            }
            document.getElementById('dislikeCount').innerText = `${baiviet.dislikes.length} Dislikes`;
            localStorage.setItem('baivietlist', JSON.stringify(listbv));
        });


        document.getElementById('commentBtn').addEventListener('click', function () {
            let commentInput = document.getElementById('commentInput');
            if (commentInput.value.trim()) {
                let newComment = {
                    user: loggedInUser.name,
                    content: commentInput.value
                };
                baiviet.comments.push(newComment);
                document.getElementById('commentCount').innerText = `${baiviet.comments.length} Comments`;
                localStorage.setItem('baivietlist', JSON.stringify(listbv));
                commentInput.value = '';
                window.location.reload();
            }
        });


        document.getElementById('likeCount').addEventListener('click', function () {
            alert("Những người đã like: " + baiviet.likes.join(", "));
        });

        document.getElementById('dislikeCount').addEventListener('click', function () {
            alert("Những người đã dislike: " + baiviet.dislikes.join(", "));
        });

        for (let i = 0; i < baiviet.comments.length; i++) {
            var divmct = document.createElement('div');
            divmct.style.marginLeft = '30px';
            divmct.style.marginTop = '30px';

            var namecmt = document.createElement('p');
            namecmt.innerText = listbv[suoc].comments[i].user;
            namecmt.style.marginBottom = '15px';
            namecmt.style.fontWeight = 'bold';
            var comnt = document.createElement('p');
            comnt.innerText = listbv[suoc].comments[i].content;
            var hr = document.createElement('hr');
            hr.style.marginTop = '10px';
            divmct.appendChild(namecmt);
            divmct.appendChild(comnt);
            divmct.appendChild(hr);
            var ct = document.getElementById('displaycmt').appendChild(divmct);
        }
    }
}

localStorage.removeItem('index');

