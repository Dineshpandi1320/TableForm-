document.getElementById("error").style.display="none";
var firstName,lastName,Address,City,Pincode,Gender,State;
let form_submit=document.getElementById("submit");
form_submit.addEventListener("click",(e)=>{
    e.preventDefault()
     firstName=document.querySelector(`[placeholder="First Name"]`).value
     lastName=document.querySelector(`[placeholder="Last Name"]`).value
     Address=document.querySelector(`[placeholder="Address"]`).value
     City=document.querySelector(`[placeholder="City"]`).value
     Pincode=document.querySelector(`[placeholder="Pincode"]`).value
     Gender=document.querySelector(`[placeholder="Gender"]`).value
     State=document.querySelector(`[placeholder="State"]`).value 
 //   console.log(firstName,lastName,Address,City,Pincode,Gender);
    var count=[firstName,lastName,Address,City,Pincode,Gender,State]
    var key=false;
    for(let i of count){
      //  console.log("values of null",i,"is given")
           if(i!==""){
             key=true;
             document.getElementById("error").style.display="none";
           }
           else{
            key=false;
            document.getElementById("error").style.display="block";
            return;
           }
    }
    if(key){
        form()
    }
})

function form(){
    var data=[firstName,lastName,Address,City,Pincode,Gender,State]
    var creating_tr=document.createElement(`tr`)
    for(i=0; i<7; i++){
        var creating_td=document.createElement("td")
        creating_td.innerText= data[i]
        creating_tr.append(creating_td)
    }
    document.querySelector("tbody").append(creating_tr)
   
    data.length=0;
    console.log("data after",data)

    let foemValues = document.getElementsByClassName("input");
    console.log("FormValues : " , foemValues);
    for(let i of foemValues){
        i.value="";
    }
}