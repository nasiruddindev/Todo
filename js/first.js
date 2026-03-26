let input=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postBtn=document.querySelector(".postBtn")
let allPost=document.querySelector(".allPost")
let updateBtn=document.querySelector(".updateBtn")


let arr=[]
let editIndex;

postBtn.addEventListener("click",()=>{
  if(!input.value){
    input.style.border="2px solid red"
    input.placeholder="Please enter Your Name"
    return
  }else if(!caption.value){
    caption.style.border="2px solid red"
    caption.placeholder="please enter a caption"
    return
  }else{
    arr.push({
      input:input.value,
      caption:caption.value
    })
  }
  allPost.innerHTML=""
  play()
  input.value=""
  caption.value=""
})

updateBtn.addEventListener("click",()=>{
  arr[editIndex].input=input.value
  arr[editIndex].caption=caption.value

  allPost.innerHTML=""
  play()

  input.value=""
  caption.value=""

  updateBtn.style.display="none"
  postBtn.style.display="block"
})


function play(){
  arr.map((item)=>{
  allPost.innerHTML+=`<div class="card ">
      <h2 class="text-2xl">${item.input}</h2>
      <h4 class="text-[18px]">${item.caption}</h4>
      <button class="editBtn btn">Edit</button>
      <button class="deleteBtn btn">Delete</button>
    </div>`


    let deleteBtn=document.querySelectorAll(".deleteBtn")
    let convertDeleteBtn=Array.from(deleteBtn)
    convertDeleteBtn.forEach((item,index)=>{
      item.addEventListener("click",()=>{
        arr.splice(index,1)
        allPost.innerHTML=""
        play()
      })
    })


    let editBtn=document.querySelectorAll(".editBtn")
    let convertEditBtn=Array.from(editBtn)
    convertEditBtn.forEach((item,index)=>{
      item.addEventListener("click",()=>{
        postBtn.style.display="none"
        updateBtn.style.display="block"

        editIndex=index

        input.value=arr[index].input
        caption.value=arr[index].caption

      })
    })


})
}
