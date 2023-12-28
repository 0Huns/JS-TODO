//실시간 현재 날짜 및 시간 기능

var nowtime = document.getElementById("nowtime");
var today = document.getElementById("today");

function outputdate(){
    var nowdate = new Date();
    var nowday = ["일요일","월요일", "화요일","수요일","목요일","금요일","토요일"]
    var year = nowdate.getFullYear();
    var month = nowdate.getMonth() +1;
    var date = nowdate.getDate();
    var day = nowdate.getDay();
    
    var hours = nowdate.getHours();
    var minutes = nowdate.getMinutes();
    var seconds = nowdate.getSeconds();

    today.innerHTML = year+"년 " + month+"월 " + date+"일 " + nowday[day];
    nowtime.innerHTML = hours+"시 " + minutes+"분 " + seconds+"초 ";
};

outputdate();
setInterval(outputdate, 1000); 




//아날로그 시계 기능
function analogclock() {
    var now = new Date();

    var hour = document.getElementById('hour');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
    
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds(); 
 
    var degH = h * (360 /12) + m * (360 / 12 / 60);
    var degM = m * (360 / 60) + s * (360 / 60 /60);
    var degS = s * (360 / 60);
    
    hour.style.transform = `rotate(${degH}deg)`;
    min.style.transform = `rotate(${degM}deg)`;
    sec.style.transform = `rotate(${degS}deg)`;
};

analogclock();
setInterval(analogclock, 1000); 




//To_do_list 등록 
var todolist = document.getElementById("todolist");
var inputtext = document.getElementById("text");
var form = document.getElementById("form");

function listup(text){
    var li = document.createElement("li");
    var delbtn = document.createElement("span");
    var check = document.createElement("input");
    var checklabel = document.createElement("label");
    var checkbox = document.createElement("div");
    var listtext = document.createElement("div");

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

