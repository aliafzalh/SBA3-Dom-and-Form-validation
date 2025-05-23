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

//Use at least two Browser Object Model (BOM) properties or methods also used "required" at Html file
const width =(window.innerWidth)
//alert(width)
console.log(`Window width:`,width)

const url = window.location.href;
console.log(`Current page url`,url)

//  console.log('Window Width:', window.innerWidth);  
  //console.log('Page URL:', window.location.href);

// btn.addEventListener('click', () => {
//   alert('Book has been added to the list!!');
// });

   btn.addEventListener(`click`,()=>{         //JavaScript validation
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

for (let i = 1; i<=3;i++){     //Adding list of the item in the div.ul
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
    e.target.style.color =` yellow`
})

//Added event listener
message.addEventListener(`mouseout`, e =>{
    e.target.style.backgroundColor =` crimson`
})


const change_msg =document.createElement(`button`)
change_msg.id=`change`
change_msg.innerHTML=`Change Message`
change_msg.style.marginBottom=`20px`

section.appendChild(change_msg);



    document.getElementById('change').addEventListener('click', () => {
    const msg = document.getElementById('message');
    msg.textContent = `📚 Let's add some awesome books!!`;
    msg.classList.toggle('highlight');  //Changing the class of change (Button)to highlight

    
    msg.setAttribute('id', 'updated-message');//Modifying user attribute. It will chaange the id of "message" to "update-message".
    console.log('New ID:', msg.id);
  });
  

  const fragment = document.createDocumentFragment()
  const ele = document.createElement(`div`)
  ele.textContent=`Creating fragment`
//   fragment.appendChild(ele)
 

const ul2 = document.createElement(`ul`)
     ul2.innerHTML=`<li>Hidden book 1</li>
                    <li>Hidden book 2</li>
                    <li>Hidden book 3</li>
                    <li>Hidden book 4</li>`

    ele.appendChild(ul2)
    fragment.appendChild(ele)
    document.body.appendChild(fragment)

    console.log(fragment)
    console.log(ele)
    console.log(ul2)

  ul2.addEventListener(`dblclick`,e=>{
    e.target.remove(`li`)
  })

//From html
    const template = document.getElementById(`book-template`)
    const list = document.getElementById(`list`)
    const clone = template.content.cloneNode(true)
    list.appendChild(clone)

    console.log(template)


///////////////////////////////////////////////////////////
//Use at least two Browser Object Model (BOM) properties or method

window.onload = function () {
        //const greeting = (`Welcome to my Book Tracker page!`)
        //alert(greeting)
         const url = window.location.href;
         alert(`Current page URL: ${url}`);

         const width = window.innerWidth;
          alert(`Window width: ${width}`);
       
       // alert("This page will close in 5 minutes...");
      //   setTimeout(function () {
      //   window.close(); 
      // }, 500000);
    };                                