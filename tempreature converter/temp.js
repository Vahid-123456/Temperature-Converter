


function convert(){
let finalresult=document.querySelector(".result");
let oldinput=document.querySelector("input").value;
let unit=document.querySelector("#unit").value;


if(oldinput===""){
    

    alert("enter your input");
    finalresult.textContent="";


    
}

const input=parseFloat(oldinput);
    let result="";
    

if(unit==="celsius"){
    
    const f=(input*9/5)+32;
    result=`${input} °C=${f} °F`;
   
    

}
else if(unit==="fahrenheit"){
    
    const c=(input-32)*5/9;
    result=`${input}degree F=${c}degree C`;
   
    

}
finalresult.textContent=result;


}