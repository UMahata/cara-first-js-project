const barIcon = document.getElementById('bar')
const navBar = document.getElementById('navbar')
const closeBtn = document.getElementById('close')


if(barIcon){
    barIcon.addEventListener('click',()=>{
        navBar.classList.add('active')
        console.log("cat");
    })
}
closeBtn.addEventListener('click',()=>{
    navBar.classList.remove('active')
    console.log("cat");
})



// i wrote here shop page script


// const allProducts = document.querySelectorAll('.pro')


// allProducts.forEach((product)=>{
//   product.addEventListener('click',()=>{
//     window.location.href='sproduct.html'

//   })
// })

// // onclick="window.location.href='sproduct.html';"
// // onclick="window.location.href='sproduct.html';"
