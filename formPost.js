// import formGET from "./formGET";
const url = 'http://localhost:3000/products';

const data = {}

// console.log(formGET)


const inputModals = document.querySelectorAll('.modalInput')
const sendModal = document.querySelector('.sendModal')
const fileInput = document.querySelector('.fileInput')
// console.log(inputModals[3])

sendModal.addEventListener('click', function () {
  console.log('salam')
  inputModals.forEach((item) => {
    data[item.id] = item.value
  })
  // data[fileInput.id] = showPreviewOne()
  console.log(data)
  fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
})

// function showPreviewOne(){

// }

fileInput.addEventListener('change', function (event) {
  let src = URL.createObjectURL(event.target.files[0]);
  data[fileInput.id] = src
})

// fileInputSrc = showPreviewOne()