let rangeEle=document.getElementById('range');
let rangeLblEle=document.getElementById('rangelbl');
let display=document.getElementById('dis');
let formEle=document.getElementById('form');
let len=8,inu=0,inn=0,ins=0,passStr='';
function updateLbl(){
    len=rangeEle.value;
    rangeLblEle.innerHTML=`Password Length ${len}`;
}
function updateVar(){    
    const data={number:0,symbol:0,uppercase:0};
    const formData= new FormData(formEle);
    formData.forEach((value,key)=>{
        data[key]=+value;
    });
    inu=data.uppercase;
    inn=data.number;
    ins=data.symbol;
    len=data.length;  
}
function genChar(){
    let n= String.fromCharCode(Math.floor(Math.random()*26)+97);
    let m= String.fromCharCode(Math.floor(Math.random()*26)+65);
    let o= String.fromCharCode(Math.floor(Math.random()*10)+48);
    let p= String.fromCharCode(Math.floor(Math.random()*15)+33);
    let arr=[n,m,o,p];
    if((inu==0 && inn==0 && ins==0)||(inu==1 && inn==0 && ins==0)||(inu==0 && inn==2 && ins==0)||(inu==0 && inn==0 && ins==3))
    {
        let x=Math.floor(Math.random()*2);
        if(x==0)
            return  arr[x];
        else
            return arr[inu+inn+ins]
    }
    else if(inu+inn+ins==6)
    {
        let x=Math.floor(Math.random()*4);
        if(x==0)
            return  arr[0];
        else if(x==1)
            return arr[1]
        else if(x==2)
            return arr[2]
        else
            return arr[3]
    }
    else if(inu==0)
    {
        let x=Math.floor(Math.random()*3);
        if(x==0)
            return  arr[x];
        else if(x==1)
            return arr[2]
        else
            return arr[3]
    }
    else if(inn==0)
    {
        let x=Math.floor(Math.random()*3);
        if(x==0)
            return  arr[x];
        else if(x==1)
            return arr[1]
        else
            return arr[3]
    }
    else
    {
        let x=Math.floor(Math.random()*3);
        if(x==0)
            return  arr[x];
        else if(x==1)
            return arr[1]
        else
            return arr[2]
    }
}
function copy(e) {
    if(e.target.innerText.length>0)
    {
        navigator.clipboard.writeText(display.innerText);
        alert("Copied the text: " + display.innerText);
    }
  }
function index(event){
    event.preventDefault();    
    updateVar()
    passStr='';
    for(let i=0;i<len;i++)
    {
        passStr+=genChar();
    }
    display.innerText=passStr;
}
formEle.addEventListener("submit", index);
display.addEventListener("click", (e)=>copy(e));
rangeEle.addEventListener("input", updateLbl);

// let cb1=document.getElementById('cb1');
// let cb2=document.getElementById('cb2');
// let cb3=document.getElementById('cb3');
// let btn=document.getElementById('btn');
//btn.addEventListener("click", gen);
// cb1.addEventListener("click", cbF);
// cb2.addEventListener("click", cbF);
// cb3.addEventListener("click", cbF);

// function cbFun(){
//     if(cb1.checked==true)
//         inu=1;
//     if(cb2.checked==true)
//         inn=2;
//     if(cb3.checked==true)
//         ins=3;   
//     if(cb1.checked==false)
//         inu=0;
//     if(cb2.checked==false)
//         inn=0;
//     if(cb3.checked==false)
//         ins=0;   
// }