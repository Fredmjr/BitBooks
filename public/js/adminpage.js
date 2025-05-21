//fetching all books from server & mapping it to div on client-side
fetch('/admin/books')
  .then(response => response.json())
  .then(data => {
    const bookHTML = data.map(book => `
      <div class="adminBookCard">
        <div>img</div>
        <h4>${book.title}</h4>
        <span >${book.id}</span>
        <p>Author: unknown</p>
        <a href="/bibooks/editpage">edit</a>         
        <a href="/bibooks/viewpage">view</a> 
        <button class="deleteBtn" onclick="deleteFugnc(${book.id})">delete</button>
      </div>
    `).join('');
    document.getElementById('adminBookListAll').innerHTML = bookHTML;
  })
  .catch(error => console.log(error));
  
//1
//deleteing book by id
//1 step onclick function
/* function deleteFunc(){
  //getting id from fetch request's 
fetch('/admin/books')
.then(response => response.json())
.then(books =>{
  books.forEach(book => {
    console.log(book.id)
 
  });
})
  console.log('deleted')
}
 */


//2
/* function deleteFunc(){
  fetch('/admin/books')
  .then(response => response.json())
  .then(books => console.log(books))
   
  const ids = books.id;

  fetch('http://localhost:3000/admin/deletebook/ids', {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json',
    },
  })
  console.log('deleted')
}
 */


//3
/* let deleteBtn = document.querySelectorAll('deleteBtn');

deleteBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=> {
  fetch('/admin/books')
  .then(response => response.json())
  .then(books => console.log(books))

  fetch('http://localhost:3000/admin/deletebook/12', {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json',
    },
  })
  console.log('deleted')

}
  )
})  */


//4 looping for deleteing by id
/* const deleteBtns = document.querySelectorAll('deleteBtn');
deleteBtns.forEach((btn) => {
  btn.addEventListener('click', ()=>{
   (event) => { console.log('exit')}
  })
}) 
 */





//5 mines concept
function deleteFugnc(id) {
  console.log(id)
  
  fetch('/admin/deletebook/'+id, {
          method: 'DELETE',
        })
        .catch(error => {
          console.log(error);
    })
    .catch(error => {
      console.log(error);
    });
}




//6 AI
/* function deleteFugnc(id) {
  fetch(`http://localhost:3000/admin/deletebook/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (response.ok) {
      console.log(`Book with ID ${id} deleted`);
    } else {
      console.log(`Error deleting book with ID ${id}`);
    }
  })
  .catch(error => {
    console.log(error);
  });
} */


// for reusing title from databse, use this code balow
/*   function deleteFugnc(id) {
  console.log(`${id}`)
}


        <button class="deleteBtn" onclick="deleteFugnc('${book.title}')">delete</button> */