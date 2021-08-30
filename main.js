function setCookie(key,value){
    console.log(key,value)
    document.cookie = key+"="+value;
    listCookies();
}
function getCookie(key){
    let cookiearr=document.cookie.split(';');
    for(var i=0;i<cookiearr.length;i++){
        if(key.trim() == cookiearr[i].split('=')[0].trim())
            return cookiearr[i].split('=')[1];
    }
    return "Not found!";
}
function delCookie(key){
    console.log(key)
    document.cookie = key+'=; Path=/Task_Cookie_CRUD; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    listCookies();
}
function listCookies(){
    if(document.cookie=="") return;
    let cookiearr=document.cookie.split(';');
    list.innerHTML="<tr><th>KEY</th><th>VALUE</th></tr>";
    for(var i=0;i<cookiearr.length;i++){
        let key = cookiearr[i].split('=')[0];
        let value = cookiearr[i].split('=')[1];
        list.innerHTML+="<tr><td>"+key+"</td><td>"+value+"</td></tr>";
    }
}
let addbtn=document.getElementById("addbtn");
let getbtn=document.getElementById("getbtn");
let delbtn=document.getElementById("delbtn");
let key1=document.getElementById("key1")
let key2=document.getElementById("key2")
let key3=document.getElementById("key3")
let val=document.getElementById("val")
let list=document.getElementById("list")
addbtn.onclick = function(){setCookie(key1.value,val.value)};
getbtn.onclick = function(){alert("Value for given key is "+getCookie(key2.value))};
delbtn.onclick = function(){delCookie(key3.value)};
listCookies();