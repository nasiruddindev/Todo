let input = document.querySelector('.input')
let caption = document.querySelector('.caption')
let postBtn = document.querySelector('.postBtn')
let allPost = document.querySelector('.allPost')
let updateBtn = document.querySelector('.updatebtn')

let arr = []
let editIndex;

postBtn.addEventListener('click', () => {
  if (!input.value) {
    input.style.border = '2px solid red'
    input.placeholder = 'Pleasr enter something'
    return
  } else if (!caption.value) {
    caption.style.border = '2px solid red'
    caption.placeholder = 'Pleasr enter something'
    return
  } else {
    arr.push({
      input: input.value,
      caption: caption.value,
    })
  }
  allPost.innerHTML =""
  play()
  input.value =""
  caption.value =""
})


updateBtn.addEventListener("click",()=>{
  arr[editIndex].input=input.value
  arr[editIndex].caption=caption.value

  allPost.innerHTML=""

  play()

  updateBtn.style.display="none"
  postBtn.style.display="block"

  input.value=""
  caption.value=""
})


function play() {
  arr.map((item) => {
    allPost.innerHTML += `<div class="card">
      <h4>${item.input}</h4>
      <p>${item.caption}</p>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>`

    let deleteBtn = document.querySelectorAll('.delete')
    let convertDeleteBtn = Array.from(deleteBtn)
    convertDeleteBtn.forEach((item, index) => {
      item.addEventListener('click', () => {
        arr.splice(index, 1)
        allPost.innerHTML = ''
        play()
      })
    })

    let editBtn = document.querySelectorAll('.edit')
    let convertEditBtn = Array.from(editBtn)
    convertEditBtn.forEach((item, index) => {
      item.addEventListener('click', () => {
        postBtn.style.display = 'none'
        updateBtn.style.display = 'block'


        editIndex=index

        input.value = arr[index].input
        caption.value = arr[index].caption
      })
    })
  })
}
