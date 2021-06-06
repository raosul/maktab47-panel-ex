const productBtn=document.querySelector('#products');
// productBtn.addEventListener('click', () => {
//     console.log('salammmmm')
// })
function getForm() {
    console.log('salammmmm')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response)

            let html = ''

            data.forEach(user => {
                let htmlSegment = `
                                <tr>
                                    <th scope="row">${user.id}</th>
                                    <td>${user.nickname}</td>
                                    <td>${user.email}</td>
                                    <td>${user.personalcode}</td>
                                    <td><img src=${user.avatar} style="width : 35px; border-radius : 50%"></td>
                                </tr>`
                html += htmlSegment
            })
            objJson  = data;
            document.querySelector('tbody').innerHTML = html
        }
    }

    xhttp.open("GET", "http://localhost:3000/products", true);
    xhttp.send();
}

export default getForm