const yourStore = document.getElementById('yourStore');
const editProfile = document.getElementById('editProfile');

const items = [
  {
    "productId" : "123#123%",
    "Title" : "Lehenga",
    "productPrice" : "200",
    "productUrl" : "lehenga-1.jpeg",
    "productDes" : "60% Off one first Booking Book . Size: L,XL,LL,M,XXL"
  },
  {
    "productId" : "123#124%",
    "Title" : "Lehenga",
    "productPrice" : "280",
    "productUrl" : "lehenga-2.jpeg",
    "productDes" : "60% Off one first Booking Book . Size: L,XL,LL,M,XXL"
  },
  {
    "productId" : "123#125%",
    "Title" : "Lehenga",
    "productPrice" : "260",
    "productUrl" : "lehenga-3.jpeg",
    "productDes" : "60% Off one first Booking Book . Size: L,XL,LL,M,XXL"
  },
  {
    "productId" : "123#125%",
    "Title" : "Lehenga",
    "productPrice" : "380",
    "productUrl" : "lehenga-4.jpeg",
    "productDes" : "60% Off one first Booking Book . Size: L,XL,LL,M,XXL"
  }
];

// Itrator for product
function productIterator(items) {
  let nextIndex = 0;
  // we will return an object
  return {
      next: function () {
          if (nextIndex < items.length) {
              // We will return below object
              return {
                  value: items[nextIndex++],
                  done: false
              }
          }
          else {
              // We will return below object with only done
              return {
                  done: true
              }
          }
      }
  }
}


let send = `<form>
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Profile Pic</label>
  <input type="file" class="form-control" id="inputGroupFile01">
</div>
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email" aria-describedby="email">
  <div id="emailMsg" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input type="password" class="form-control" id="password">
</div>
<div class="mb-3">
  <label for="phone" class="form-label">Phone</label>
  <input type="text" class="form-control" id="phone">
</div>
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Gendar</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Male</option>
    <option value="2">Female</option>
    <option value="3">Other</option>
  </select>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Address</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-primary">Edit</button>
</form>
</div>`;

  


const sendInto = document.getElementById('send'); 
editProfile.addEventListener('click',()=>{
    sendInto.innerHTML = send;
})

const product = productIterator(items);

nextProduct();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextProduct);


function nextProduct(){
  const currentProduct = product.next().value;
  let image = document.getElementById('image');
  let profile = document.getElementById('profile');
  if(currentProduct != undefined){
  image.innerHTML = `<img src='images/${currentProduct.productUrl}' style="height: 200px; width: 200px;">`;
  profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">Product ID: ${currentProduct.productId}</li>
  <li class="list-group-item">Title:  ${currentProduct.Title} </li>
  <li class="list-group-item">Price: ${currentProduct.productPrice} Rs</li>
  <li class="list-group-item">${currentProduct.productDes}</li>
</ul>`;
  }
  else{
      alert('End of candidate applications');
      window.location.reload();
  }

}

document.getElementById('yourStore').addEventListener('click',()=>{
  window.location.reload();
})

