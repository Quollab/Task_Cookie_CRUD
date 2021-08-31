console.log("hello world");
show();
function setCookie(){
    let p = document.getElementById("key").value;
    let q = document.getElementById("value").value;
    document.cookie = p + "=" + q;
    let r = document.cookie;
    console.log(r);
    show();
}
function getCookie(){
    let get = document.getElementById("getkey").value;
    let arr = document.cookie.split(';');
    let len = arr.length;
    // console.log(len);
    // console.log(arr[2]);
    // console.log(match);
    for(let i=0;i<len;i++){
        let match=arr[i].split('=');
        console.log(match[1]);
        // console.log(i);
        if(match[0]=get){
            console.log(match[0],get,match[1])
            console.log(i*0);
            // console.log(match[1]);
            return document.getElementById("getdis").value = match[1];
            // break;
        }
    }

}
function deleteCookie(){
    let del = document.getElementById("delkey").value;
    let key = del + '=';
    console.log(key)
    console.log(del)
    document.cookie = del + "=;max-age=0";
    show();
}
    // let arr = document.cookie.split(';');
    // let len = arr.length;
    // console.log(len);
    // for(let i=0;i<len;i++){
    //     let match=arr[i].split('=');
    //     // console.log(i);
    //     if(match[0]=del){
    //         // console.log(i*0);
    //         console.log(match[1]);
    //         // document.cookie
    //     }
    // }
    

function show(){
    let arr = document.cookie.split(';');
    let len = arr.length;
    console.log(arr)
    for(let i=0;i<len;i++){
        document.getElementById("show").value=arr[i];
    }
}