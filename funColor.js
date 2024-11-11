let inp=document.querySelector("input")
function colorBG(c){
    if(c.key==="Enter"){
    document.body.style.background=inp.value;
    }
    else{
        document.body.style.background="white";
    }
}