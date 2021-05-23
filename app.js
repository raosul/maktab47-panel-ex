
Array.from(document.getElementsByClassName("loadbtn")).forEach(function(item) {
    item.addEventListener('click',()=>{
        if(!!item.id){
        fetch(`http://localhost:3000/page${item.id}`)
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
        html += htmlSegment
    })
    document.querySelector('tbody').innerHTML = html
        }
    }  
})
 });

