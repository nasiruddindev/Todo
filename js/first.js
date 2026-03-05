let input=document.querySelector(".input")
let caption=document.querySelector(".caption")
let postBtn=document.querySelector(".postBtn")
let allPost=document.querySelector(".all-Post")


let arr=[]

postBtn.addEventListener("click",()=>{
  if(!input.value){
    input.placeholder="please Enter Something"
    input.style.border="1px solid red"
    return
  }else{
    if(!caption.value){
    caption.placeholder="Please Enter Something"
    caption.style.border="1px solid red"
    return
  }
  arr.push({
    input:input.value,
    caption:caption.value
  })
  allPost.innerHTML=""
  play()
  input.value=""
  caption.value=""

}})



function play(){
  arr.map(item=>{
    allPost.innerHTML+=`<div class="card">
      <h4>${item.input}</h4>
      <p>${item.caption}</p>
      <button class="btn">Edit</button>
      <button class="btn delete">Delete</button>
    </div>`
  })
}






