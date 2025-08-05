let button = document.querySelector("button");
let input = document.querySelector("input");
let list= document.querySelector("ul");

button.addEventListener("click", function() {
    

        
        let item = document.createElement("li");
        item.innerText = input.value;
        list.appendChild(item);
        
        
        let delbutton= document.createElement("button");
        delbutton.innerText="delete";
        delbutton.classList.add("delete");
        item.appendChild(delbutton);
        
        input.value = "";
        
    
});
list.addEventListener("click", function(){
    if(event.target.nodeName=="BUTTON"){
        let  itm= event.target.parentElement;
        itm.remove();
    }



}) ;   
// let deletebtns=document.querySelectorAll(".delete");
// for(deletebtn of deletebtns){
//     deletebtn.addEventListener("click", function(){
//         let items = this.parentElement;
        
//         items.remove();


    
//     });
// }

