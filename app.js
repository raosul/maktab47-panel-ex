
Array.from(document.getElementsByClassName("loadbtn")).forEach(function(item) {
    item.addEventListener('click',()=>{
        if(!!item.id){
        fetch(`http://localhost:3000/${item.id}`)
  .then(response => response.json())
  .then(
      data => load(data)
  );
function load(data){
    let html = ''
    
    data.forEach(user => {
        let htmlSegment = `
                        <tr>
                            <th scope="row">${user.id}</th>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.personalCode}</td>
                            <td><img src=${user.avatar} style="width : 35px; border-radius : 50%"></td>
                        </tr>`
       if(user.id)  html += htmlSegment
    })
    document.querySelector('tbody').innerHTML = html
        }
    }  
})
 });

   var exampleModal = document.getElementById('exampleModal')
   exampleModal.addEventListener('show.bs.modal', function (event) {
   var button = event.relatedTarget
   var recipient = button.getAttribute('data-bs-whatever')
   var modalTitle = exampleModal.querySelector('.modal-title')
   var modalBodyInput = exampleModal.querySelector('.modal-body input')
   modalTitle.textContent = 'New message to ' + recipient
   modalBodyInput.value = recipient
 })