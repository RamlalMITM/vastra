
// Admin JavaScript Code for Add, Update and Delete

// getting buttons id for performing click opration
const add = document.getElementById('addProduct');
const del = document.getElementById('deleteProduct');
const modPrice = document.getElementById('modifyPrice');
const modTitle = document.getElementById('titleMod');
//Performing task to 
//like add product, delete product, modify product.
add.addEventListener("click", function (e) {
    console.log(document.getElementById('title').value);
    console.log(document.getElementById('price').value);
    console.log(document.getElementById('img').value);
    console.log(document.getElementById('description').value);
    e.defaultPrevented();
})
del.addEventListener('click', function (e) {
    console.log(document.getElementById('productToDelete').value);
    e.defaultPrevented();
})
modPrice.addEventListener('click', function () {
    console.log(document.getElementById('productToModify').value);
    console.log(document.getElementById('modPrice').value);
})

modTitle.addEventListener('click', function () {
    console.log(document.getElementById('productToModify').value);
    console.log(document.getElementById('modifyTitle').value);
})


document.getElementById('home').addEventListener('click',function(){
    location.href = "./index.html";
})
