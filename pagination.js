// const objJsons = require('./database.json');
// console.log(objJsons);

var current_page = 1;
var records_per_page = 5;



var objJson = [
    {
        "id": "1",
        "name": "Claude Gutkowski",
        "avatar": "https://cdn.fakercloud.com/avatars/peter576_128.jpg",
        "email": "email 1",
        "personalCode": "personalCode 1"
    },
    {
        "id": "2",
        "name": "Roman Lang",
        "avatar": "https://cdn.fakercloud.com/avatars/webtanya_128.jpg",
        "email": "email 2",
        "personalCode": "personalCode 2"
    },
    {
        "id": "3",
        "name": "Micheal Hackett",
        "avatar": "https://cdn.fakercloud.com/avatars/nfedoroff_128.jpg",
        "email": "email 3",
        "personalCode": "personalCode 3"
    },
    {
        "id": "4",
        "name": "Carroll Leannon",
        "avatar": "https://cdn.fakercloud.com/avatars/craigelimeliah_128.jpg",
        "email": "email 4",
        "personalCode": "personalCode 4"
    },
    {
        "id": "5",
        "name": "Stephanie Rutherford",
        "avatar": "https://cdn.fakercloud.com/avatars/anoff_128.jpg",
        "email": "email 5",
        "personalCode": "personalCode 5"
    },
    {
        "id": "6",
        "name": "Mr. Wendy Runte",
        "avatar": "https://cdn.fakercloud.com/avatars/blakesimkins_128.jpg",
        "email": "email 6",
        "personalCode": "personalCode 6"
    },
    {
        "id": "7",
        "name": "Robert Fahey",
        "avatar": "https://cdn.fakercloud.com/avatars/her_ruu_128.jpg",
        "email": "email 7",
        "personalCode": "personalCode 7"
    },
    {
        "id": "8",
        "name": "Cathy Corkery PhD",
        "avatar": "https://cdn.fakercloud.com/avatars/dnirmal_128.jpg",
        "email": "email 8",
        "personalCode": "personalCode 8"
    },
    {
        "id": "9",
        "name": "Dr. Rebecca Shields",
        "avatar": "https://cdn.fakercloud.com/avatars/nicollerich_128.jpg",
        "email": "email 9",
        "personalCode": "personalCode 9"
    },
    {
        "id": "10",
        "name": "Robyn Keeling IV",
        "avatar": "https://cdn.fakercloud.com/avatars/idiot_128.jpg",
        "email": "email 10",
        "personalCode": "personalCode 10"
    },
    {
        "id": "11",
        "name": "Johanna Heathcote V",
        "avatar": "https://cdn.fakercloud.com/avatars/BrianPurkiss_128.jpg",
        "email": "email 11",
        "personalCode": "personalCode 11"
    },
    {
        "id": "12",
        "name": "Patricia Hartmann",
        "avatar": "https://cdn.fakercloud.com/avatars/yassiryahya_128.jpg",
        "email": "email 12",
        "personalCode": "personalCode 12"
    },
    {
        "id": "13",
        "name": "Miss Angelica Jenkins",
        "avatar": "https://cdn.fakercloud.com/avatars/sandywoodruff_128.jpg",
        "email": "email 13",
        "personalCode": "personalCode 13"
    },
    {
        "id": "14",
        "name": "Joey Lang PhD",
        "avatar": "https://cdn.fakercloud.com/avatars/deviljho__128.jpg",
        "email": "email 14",
        "personalCode": "personalCode 14"
    },
    {
        "id": "15",
        "name": "Randall Pagac",
        "avatar": "https://cdn.fakercloud.com/avatars/ssbb_me_128.jpg",
        "email": "email 15",
        "personalCode": "personalCode 15"
    },
    {
        "id": "16",
        "name": "Carrie Hahn",
        "avatar": "https://cdn.fakercloud.com/avatars/carlosblanco_eu_128.jpg",
        "email": "email 16",
        "personalCode": "personalCode 16"
    },
    {
        "id": "17",
        "name": "Troy Collins",
        "avatar": "https://cdn.fakercloud.com/avatars/marcoramires_128.jpg",
        "email": "email 17",
        "personalCode": "personalCode 17"
    },
    {
        "id": "18",
        "name": "Kyle Rosenbaum",
        "avatar": "https://cdn.fakercloud.com/avatars/mgonto_128.jpg",
        "email": "email 18",
        "personalCode": "personalCode 18"
    },
    {
        "id": "19",
        "name": "Steve Bernhard",
        "avatar": "https://cdn.fakercloud.com/avatars/haligaliharun_128.jpg",
        "email": "email 19",
        "personalCode": "personalCode 19"
    },
    {
        "id": "20",
        "name": "Ms. Jaime Larson",
        "avatar": "https://cdn.fakercloud.com/avatars/mutu_krish_128.jpg",
        "email": "email 20",
        "personalCode": "personalCode 20"
    }
]

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
    
    // var page_span = document.getElementById("page");
    
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5
    if (page < 1) page = 1;
    if (page > numPages()) {
        page = numPages();
    }

    for (let index = 1; index < 5; index++) {
        document.getElementsByClassName("page-item")[index].classList.remove("active")
    }
    listing_table.innerHTML = "";

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
        <tr>
            <th scope="row">${objJson[i].id}</th>
            <td>${objJson[i].name}</td>
            <td>${objJson[i].email}</td>
            <td>${objJson[i].personalCode}</td>
            <td><img src=${objJson[i].avatar} style="width : 35px; border-radius : 50%"></td>
        </tr>`;
        if (objJson.id)
<<<<<<< HEAD
            html += htmlSegment
    }
    // page_span.innerHTML = page;
=======
        html += htmlSegment
    }
    page_span.innerHTML = page;
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5

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
    return Math.ceil(objJson.length / records_per_page);
}

function createPaginationItem(){
>>>>>>> ea212232bc92ac9afbd385c8912148121fc38ba5
    document.getElementsByClassName("page-item")[1]
}