function operatorsBtn(){
    document.getElementById("mul").disabled=true;
    document.getElementById("div").disabled=true;
    document.getElementById("subtract").disabled=true;
    document.getElementById("add").disabled=true;
   

}
function clearBtn(){
    document.getElementById("mul").disabled=false;
    document.getElementById("div").disabled=false;
    document.getElementById("subtract").disabled=false;
    document.getElementById("add").disabled=false;
     
}

function calculation(){
   const ques= document.querySelector(".displayInput").value;
   document.getElementById("mul").disabled=false;
document.getElementById("div").disabled=false;
document.getElementById("subtract").disabled=false;
document.getElementById("add").disabled=false;

  
   if(ques.split("/").length==2){
    const arr=ques.split("/");
    return Number(arr[0])/Number(arr[1]);
}
else if(ques.split("*").length==2){
    
    const arr=ques.split("*");
    return arr[0]*arr[1];
}
  else if(ques.split("+").length==2){
    
       const arr=ques.split("+");
       return Number(arr[0])+Number(arr[1]);
   }
 else{
    
    const arr=ques.split("-");
    return arr[0]-arr[1];
}



}