
var current_page = 1;
var records_per_page = 5;





<<<<<<< HEAD
function prevPage() {
=======
function prevPage()
{
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

<<<<<<< HEAD
function nextPage() {
=======
function nextPage()
{
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

<<<<<<< HEAD
function changePage(page) {
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.querySelector('tbody');

    // var page_span = document.getElementById("page");

=======
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.querySelector('tbody');
    current_page = page;
    // var page_span = document.getElementById("page");
<<<<<<< HEAD
    
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5
=======

>>>>>>> 02b0d50f1e257506db5a2539609d955a62df843e
    if (page < 1) page = 1;
    if (page > numPages()) {
        page = numPages();
    }

    for (let index = 1; index < 5; index++) {
        document.getElementsByClassName("page-item")[index].classList.remove("active")
    }
    listing_table.innerHTML = "";

<<<<<<< HEAD
<<<<<<< HEAD
    for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {

        document.getElementsByClassName("page-item")[page].classList.add("active")
        listing_table.innerHTML +=
            `
=======
    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        
        document.getElementsByClassName("page-item")[page].classList.add("active")
        listing_table.innerHTML +=
        `
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5
=======
    for (var i = ((page-1) * records_per_page) ; i < (page * records_per_page) ; i++) {

        document.getElementsByClassName("page-item")[page].classList.add("active")
        listing_table.innerHTML +=
            `
>>>>>>> 02b0d50f1e257506db5a2539609d955a62df843e
        <tr>
            <th scope="row">${objJson[i+1].id}</th>
            <td>${objJson[i+1].name}</td>
            <td>${objJson[i+1].email}</td>
            <td>${objJson[i+1].personalCode}</td>
            <td><img src=${objJson[i+1].avatar} style="width : 35px; border-radius : 50%"></td>
        </tr>`;
        if (objJson.id)
<<<<<<< HEAD
<<<<<<< HEAD
            html += htmlSegment
    }
    // page_span.innerHTML = page;
=======
        html += htmlSegment
    }
    page_span.innerHTML = page;
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5
=======
            html += htmlSegment
    }

>>>>>>> 02b0d50f1e257506db5a2539609d955a62df843e

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
<<<<<<< HEAD
function numPages() {
    return Math.ceil(objJson.length / records_per_page);
}

function createPaginationItem() {
=======
function numPages()
{
    return Math.ceil((objJson.length-1) / records_per_page);
}

function createPaginationItem(){
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5
    document.getElementsByClassName("page-item")[1]
}