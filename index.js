 document.addEventListener(`DOMContentLoaded`,()=>{
const title = document.getElementById(`title`)
console.log(title)
const author = document.getElementById('author');
const pages = document.getElementById('pages');

const bookForm = document.getElementById(`book-form`)
console.log(bookForm)
const allinputs = document.querySelectorAll(`input`)
console.log(allinputs)

const btn = document.querySelector(`#submitbtn`)
console.log(btn)



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

