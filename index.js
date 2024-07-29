let btn = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let listContainer  = document.querySelector(".listContainer")
btn.addEventListener("click",()=>addLi())

function addLi(){
    let inpVal = input.value
    let capitalFirst = inpVal.charAt(0).toUpperCase();
    inpVal = capitalFirst + inpVal.slice(1);
        if(inpVal === ""){
            return;
        }
        else{
            let li = document.createElement("li")
            li.textContent = `${inpVal}`
            let span = document.createElement("span")
            span.innerHTML = "\u00d7"
            li.appendChild(span) 
            ul.appendChild(li)
        }
    saveData();
}
ul.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

let saveData=()=>{
    localStorage.setItem("data",listContainer.innerHTML)
}
let showData=()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
