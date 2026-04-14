let main=document.querySelector(".main")
let input=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postBtn=document.querySelector(".postBtn")
let allPost=document.querySelector(".allPost")
let updateBtn=document.querySelector(".updateBtn")
let popUp=document.querySelector(".popup")
let editInput=document.querySelector(".editname")
let editCaption=document.querySelector(".editcaption")


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
  arr[editIndex].input=editInput.value
  arr[editIndex].caption=editCaption.value

  allPost.innerHTML=""
  play()

  editInput.value=""
  editCaption.value=""


  main.style.display="block"
  popUp.style.display="none"


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
        

        main.style.display="none"
        popUp.style.display="block"


        updateBtn.style.display="block"
        popUp.style.display="block"



        editIndex=index

        editInput.value=arr[index].input
        editCaption.value=arr[index].caption

      })
    })


})
}
