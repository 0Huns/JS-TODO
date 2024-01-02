//실시간 현재 날짜 및 시간 기능

let nowtime = document.getElementById("nowtime");
let today = document.getElementById("today");

function outputdate(){
    let nowdate = new Date();
    let nowday = ["일요일","월요일", "화요일","수요일","목요일","금요일","토요일"]
    let year = nowdate.getFullYear();
    let month = nowdate.getMonth() +1;
    let date = nowdate.getDate();
    let day = nowdate.getDay();
    
    let hours = nowdate.getHours();
    let minutes = nowdate.getMinutes();
    let seconds = nowdate.getSeconds();

    today.innerHTML = year+"년 " + month+"월 " + date+"일 " + nowday[day];
    nowtime.innerHTML = hours+" : " + minutes+" : " + seconds+" ";
};

outputdate();
setInterval(outputdate, 1000); 




//아날로그 시계 기능
function analogclock() {
    let now = new Date();

    let hour = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds(); 
 
    let degH = h * (360 /12) + m * (360 / 12 / 60);
    let degM = m * (360 / 60) + s * (360 / 60 /60);
    let degS = s * (360 / 60);
    
    hour.style.transform = `rotate(${degH}deg)`;
    min.style.transform = `rotate(${degM}deg)`;
    sec.style.transform = `rotate(${degS}deg)`;
};

analogclock();
setInterval(analogclock, 1000); 




//To_do_list 등록 
let todolist = document.getElementById("todolist");
let inputtext = document.getElementById("text");
let form = document.getElementById("form");

function listup(text){
    let li = document.createElement("li");
    let delbtn = document.createElement("span");
    let check = document.createElement("input");
    let checklabel = document.createElement("label");
    let checkbox = document.createElement("div");
    let listtext = document.createElement("div");

    if(text.trim() !== ''){
        li.appendChild(checklabel);
        checklabel.appendChild(check);
        check.setAttribute("type","checkbox");
        check.setAttribute("class","classcheck");
        check.setAttribute("name","checkbox");
        checklabel.appendChild(checkbox);
        checkbox.setAttribute("class","divbox");
        listtext.appendChild(document.createTextNode(inputtext.value));
        li.appendChild(listtext);
        listtext.setAttribute("class","listtext")
        check.addEventListener('change', function () {
            listtext.classList.toggle('checked', check.checked);
        });
        delbtn.innerText = "❌";
        delbtn.addEventListener('click', listdel);
        li.appendChild(delbtn);
        todolist.appendChild(li);
    }
    else{
        alert("입력하세요")
    };
};

//To_do_list 삭제
function listdel(event){
    event.target.parentElement.remove();
};

////To_do_list 실행 
function upload(event){
    event.preventDefault();
    listup(inputtext.value);
    inputtext.value = "";
}

form.addEventListener('submit', upload);