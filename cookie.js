let set=document.getElementById("set");
let get=document.getElementById("get");
let del=document.getElementById("del");
let keyS=document.getElementById("keyS")
let keyG=document.getElementById("keyG")
let keyD=document.getElementById("keyD")
let value1=document.getElementById("value1")
set.onclick = function(){
    cookieSet(keyS.value,value1.value)
    if(value1.value.length==0||keyS.value.length==0)
        alert("Cannot leave empty")
    else
        alert("Cookie created with value "+ value1.value)
    
    
    };

get.onclick = function(){
  
        alert("The value of the cookie is "+ cookieGet(keyG.value))
        
       
    };
    

del.onclick = function(){
    cookieDel(keyD.value)
    alert("Cookie deleted")
    
    
};

function cookieSet(key,value) {

	document.cookie = key+"="+value;
    
    
}

function cookieGet(key) {
	var name = key + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);

	}
	return null;
    
}
function Listofcookies(){
	var arr = document.cookie.split(';');
	for(var i=0;i < arr.length;i++) {
		document.write(arr[i]+"<br>")
}
}

function cookieDel(key) {
        document.cookie = key +'=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      
}



