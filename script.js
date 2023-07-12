let friends=["img/friend1.jpg", "img/friend2.jpg", "img/friend3.jpg", "img/friend4.jpg", "img/friend5.jpg", "img/friend6.jpg", "img/friend7.jpg", "img/friend8.jpg",]
let names=["hannaMuster11", "Maximilian_Neustadt13100", "Dackelword_sausi", "Modelagentur_NEW", "Lionsfriendclub XXL", "GOAT", "Scary_Spider_66", "anonymous"]
let newFollower=["Folgen","Folgen","Folgen","Folgen","Folgen","Folgen","Folgen","Folgen"]

let posts=[
    {
        "user":"Österreich_Berge",
        "profile_pic":"img/pic1.png",
        "place":"Alpen",
        "img":"img/img1.jpg",
        "comments": ['Freue mich schon auf die nächste Skisaison', 'Herrlich :)'],
        "date": "1 Wo.",
        "caption": "Hier ein kleiner Einblick in die schönen österreichischen Alpen :)",
        "likes": 1200,
        "likeimg":"icon/like_blk.png",
        "follow":"show"

    },

    {
        "user":"martin_unger",
        "profile_pic":"img/pic2.png",
        "place":"Tiergarten",
        "img":"img/img2.jpg",
        "comments": [],
        "date": "3 Tage",
        "caption": "Bengalischer Tiger live in Action",
        "likes":65,
        "likeimg":"icon/like_blk.png",
        "follow": "show"
    },

]

load();

function renderMenu(){
    let contentMenu=document.getElementById('menu');
    contentMenu.innerHTML=renderMenuHTML();
}

function renderMenuHTML(){
    return `
    <h1>DevelopGram</h1>
    <div class="menu">
        <img  class="icon_menu_left" src="icon/home.png" alt="">
        <p>Startseite</p>
    </div>
    <div class="menu">
        <img  class="icon_menu_left" src="icon/suche.png" alt="">
        <p>Suche</p>
    </div>
    <div class="menu">
        <img  class="icon_menu_left" src="icon/kompass.png" alt="">
        <p>Entdecken</p>
    </div>
    <div class="menu">
        <img  class="icon_menu_left" src="icon/reel.png" alt="">
        <p>Reels</p>
    </div>
    <div class="menu">
        <img  class="icon_menu_left" src="icon/share.png" alt="">
        <p>Nachrichten</p>
    </div>
    <div class="menu">
        <img  class="icon_menu_left" src="icon/like_blk.png" alt="">
        <p>Benachrichtigungen</p>
    </div>
    <div class="menu">
        <img  class="icon_menu_left" src="icon/plus.png" alt="">
        <p>Erstellen</p>
    </div>
    <div class="menu">
        <img  class="icon_menu_left_profil" src="img/friend5.jpg" alt="">
        <p>Erstellen</p>
    </div>
    <div class="menu">
        <img  class="icon_menu_left_profil" src="icon/verknupfung.png" alt="">
        <a href="https://www.flaticon.com/de/kostenlose-icons/verknupfung" title="verknüpfung Icons">Flaticon</a>
    </div>
    `
}

function renderFriends(){
    let contentFriend=document.getElementById('friendlist');
    for (let i = 1; i < friends.length+1; i++) {
        contentFriend.innerHTML+=`
        <img src="img/friend${i}.jpg" class="friends_profile">
        `
    }
}

function render(){
    
    let content=document.getElementById('content');
    content.innerHTML='';
    
    for (let i = 0; i < posts.length; i++) {
        let  post = posts[i];
        content.innerHTML+=writeHTML(post,i);
        

        let commentcontent = document.getElementById(`comments${i}`);
        for (let j = 0; j < post['comments'].length; j++) {
            let comment = post['comments'][j];
            commentcontent.innerHTML += `
            <div><i>Kommentar</i> ${j+1}: ${comment}</div>
            `            
        }
        
    }
}

function renderNewFollower(){
    let contentNewFollower=document.getElementById('newFollower');
    contentNewFollower.innerHTML=renderNewFollowerHTML();
    let contentTable=document.getElementById('table_vorschlag');
    for (let i = 0; i < friends.length; i++) {
        contentTable.innerHTML+=`
        <tr>
            <td>
                <img src="${friends[i]}" class="profile_pic" alt="">
            </td>
            <td>
                <b>${names[i]}</b>
            </td>
            <td onclick="isFollower(${i})" class="follow">${newFollower[i]}</td>
        </tr>
        `        
    }

}

function renderNewFollowerHTML(){
    return `
        <div class="new_people">
            <img src="img/friend5.jpg" class="new_people_img" alt="">
            <p><b>max_mustermannXX</b>
            <br>Mustermann</p> 
            <a class="change_link" href="#">Wechseln</a>
        </div>
        <div class="vorschlag">
            Vorschläge für dich
        </div>
        <div>
            <table class="vorschlag_liste" id="table_vorschlag">
                
            </table>
        </div>
    `
}

function isFollower(index){
    newFollower[index]="Gefolgt";
    renderNewFollower();
    save();
}

function writeHTML(post,index){
    return `
    <div class="post">        
        <div class="post_head">
            <div class="post_head_content">
                <img src="${post['profile_pic']}" class="profile_pic">
                <span><b>${post['user']}</b> • vor ${post['date']} <br>${post['place']}</span>
                <span>•</span>
                <button onclick="d_none(${index})" class=${post["follow"]} id="follow${index}">Folgen</button>
            </div>
            <div class="post_head_content">
                <img src="icon/punkte.png" class="icon">    
            </div>    
        </div>

        <div class="post_main">
            <img src="${post['img']}" class="main_img">
        </div>

        <div class="icon_bar">
            <div class="icon_left">
                <img src="${post['likeimg']}" class="icon" id="like${index}" onclick="likeButton(${index})">
                <img src="icon/comment.png" class="icon">
                <img src="icon/share.png" class="icon">
            </div>
            <div class="icon_right">
                <img src="icon/save.png" class="icon">
            </div>
        </div>
        <div class="interact_sec">
            <div>
                <span><b>Gefällt</b></span> 
                <span id="likes${index}">${post['likes']}</span>
            </div>
            <div><b>${post['user']}</b> • ${post['caption']}</div>
            <div id="comments${index}"></div>
            <div>
                <input id="input${index}" placeholder="kommentieren">
                <button onclick="addComment(${index})">Posten</button>
            </div>
        </div>
    </div>
    `;
}

function d_none(i){
    posts[i]['follow']="d-none";
    render();
    save();
}

function addComment(index){
    let input=document.getElementById(`input${index}`);
    
    if(input.value!==''){
    posts[index]['comments'].push(input.value);
    render()
    save();
    }
}

function likeButton(index){

    let liked=posts[index]['likeimg'];

    if(liked==="icon/like_blk.png"){
        liked="icon/like_red.png";
        posts[index]['likeimg']=liked;
        posts[index]['likes']++;
    }

    else{
        liked="icon/like_blk.png";
        posts[index]['likeimg']=liked;
        posts[index]['likes']--;
    }
    render();
    save();
    
}

function save(){
    let postAsText = JSON.stringify(posts);
    let newFollowerAsText = JSON.stringify(newFollower);
    localStorage.setItem('posts', postAsText);
    localStorage.setItem('newFollower', newFollowerAsText);
}

function load(){
    let postAsText = localStorage.getItem('posts');
    let newFollowerAsText = localStorage.getItem('newFollower');
    if (postAsText && newFollowerAsText){
        posts = JSON.parse(postAsText);
        newFollower = JSON.parse(newFollowerAsText);
    }
}