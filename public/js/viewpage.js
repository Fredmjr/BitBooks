

fetch('/admin/book/59')
  .then(response => response.json())
  .then(data => {
book = `
      <div class="adminBookCard">
        <div id="adminBookCardPlate">
          <div>img</div>
          <h4>${data.title}</h4>
          <span >${data.id}</span>
          <p>Author: unknown</p>
          <a href="/bibooks/editpage">edit</a> 
          <button class="deleteBtn" onclick="deleteFugnc(${data.id})">delete</button>
        </div>

      <div id="deletedBookPageMgs" style="display: none;">
            Book no longer avaliable!
            <p>Go bcak home</p>
            <button><a href="/bibooks/bibooks">home</a></button>
            <p>Add a new book</p>
            <button><a href="/bibooks/createpage">create</a></button>
      </div>
      </div>
    `
    document.getElementById('adminBookListAll').innerHTML = book;
  })
  .catch(error => console.log(error));

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
   /*  const adminBookCardPlate = document.getElementById('adminBookCardPlate')
const deletedBookPageMgs = document.getElementById('deletedBookPageMgs')
        adminBookCardPlate.style.display = 'none';
    deletedBookPageMgs.style.display = 'block'; */

    
}
