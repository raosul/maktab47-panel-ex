const url = 'https://c8c8ad1a-8be3-42cb-a6f4-8f2451733e59.mock.pstmn.io/recData'

const data = {}

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });


const inputModals = document.querySelectorAll('.modalInput')
const sendModal = document.querySelector('.sendModal')
const fileInput = document.querySelector('.fileInput')
// console.log(inputModals[3])

sendModal.addEventListener('click',function(){
    inputModals.forEach((item)=>{
        data[item.id] = item.value
    })
    // data[fileInput.id] = showPreviewOne()
    console.log(data)
})

function showPreviewOne(){
    
}

fileInput.addEventListener('change',function(event){
    let src = URL.createObjectURL(event.target.files[0]);
    data[fileInput.id] = src
})

// fileInputSrc = showPreviewOne()