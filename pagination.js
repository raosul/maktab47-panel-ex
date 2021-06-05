
var current_page = 1;
var records_per_page = 5;





function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.querySelector('tbody');
    current_page = page;
    // var page_span = document.getElementById("page");

    if (page < 1) page = 1;
    if (page > numPages()) {
        page = numPages();
    }

    for (let index = 1; index < 5; index++) {
        document.getElementsByClassName("page-item")[index].classList.remove("active")
    }
    listing_table.innerHTML = "";

    for (var i = ((page-1) * records_per_page) ; i < (page * records_per_page) ; i++) {

        document.getElementsByClassName("page-item")[page].classList.add("active")
        listing_table.innerHTML +=
            `
        <tr>
            <th scope="row">${objJson[i+1].id}</th>
            <td>${objJson[i+1].name}</td>
            <td>${objJson[i+1].email}</td>
            <td>${objJson[i+1].personalCode}</td>
            <td><img src=${objJson[i+1].avatar} style="width : 35px; border-radius : 50%"></td>
        </tr>`;
        if (objJson.id)
            html += htmlSegment
    }


    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}
function numPages()
{
    return Math.ceil((objJson.length-1) / records_per_page);
}

function createPaginationItem(){
    document.getElementsByClassName("page-item")[1]
}