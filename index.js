 document.addEventListener(`DOMContentLoaded`,()=>{
const title = document.getElementById(`title`)
// console.log(title)
const author = document.getElementById('author');
const pages = document.getElementById('pages');

const bookForm = document.getElementById(`book-form`)
// console.log(bookForm)
const allinputs = document.querySelectorAll(`input`)
// console.log(allinputs)

const btn = document.querySelector(`#submitbtn`)
// console.log(btn)



// btn.addEventListener('click', () => {
//   alert('Book has been added to the list!!');
// });

btn.addEventListener(`click`,()=>{
    // event.preventDefault();
    if(!title.value || !author.value || !pages.value){
        alert(`Plese fill in all the fields correctly.`)
    }
    else{
       alert(`Book has been added to the list!!`)
    }
})

 })
const div = document.createElement(`div`)
div.id = `list`
div.textContent= `This is the list of book that I want to read in future. `
document.body.appendChild(div)

const ol = document.createElement(`ol`)
ol.classList.add(`list`)
div.appendChild(ol)
// const li = document.createElement(`li`)
// ul.appendChild(li)

for (let i = 1; i<=3;i++){     //Adding list of the intem in the div.ul
    const li = document.createElement(`li`)
    li.textContent = `Book:`
    ol.appendChild(li)
}
const firstbook = ol.firstElementChild;
console.log(`First book:`, firstbook.textContent)

const lastbook = ol.lastElementChild;
console.log(`Last Book:`, lastbook.textContent)

const parentOl = lastbook.parentNode;
console.log(`Parent of last book:`, parentOl.tagName);


const item = document.querySelectorAll(`#list li`)
item.forEach((list)=>{
    console.table(list.textContent)
})

const section = document.createElement(`section`)
section.id = `sec`
const main = document.querySelector(`main`)
main.appendChild(section)

const message = document.createElement(`h2`)
message.id = `message`
message.textContent = `📖Welcome to my book list!!`;
section.appendChild(message)

//Added event listener
message.addEventListener(`mouseover`, e =>{
    e.target.style.backgroundColor =` yellow`
})

//Added event listener
message.addEventListener(`mouseout`, e =>{
    e.target.style.backgroundColor =` crimson`
})


const change_msg =document.createElement(`button`)
change_msg.id=`change`
change_msg.innerHTML=`Change Message`

section.appendChild(change_msg);



    document.getElementById('change').addEventListener('click', () => {
    const msg = document.getElementById('message');
    msg.textContent = `📚 Let's add some awesome books!!`;
    msg.classList.toggle('highlight');  //Changing the class of change (Button)to highlight

    
    msg.setAttribute('id', 'updated-message');//Modifying user attribute. It will chaange the id of "message" to "update-message".
    console.log('New ID:', msg.id);
  });
  


//Use at least two Browser Object Model (BOM) properties or methods.