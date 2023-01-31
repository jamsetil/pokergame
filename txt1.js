
let MyLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function (){
    MyLeads.push(inputEl.value)
    inputEl.value=""
    renderleads()
    
})
function renderleads(){
let listItems = ""

for (let i = 0; i < MyLeads.length; i++){
 
//    listItems += "<li><a target='_blank' href= '"+ MyLeads[i] +"' >"+MyLeads[i]+"</li> "
listItems += `<li>
<a target='_blank' href= '${MyLeads[i]}' >${MyLeads[i]}</a>
</li>`
   console.log(listItems)
}

ulEl.innerHTML= listItems
}