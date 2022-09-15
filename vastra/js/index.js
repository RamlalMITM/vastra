// Class of Product
class Product {
    constructor(title, price, imgUrl, productDes) {
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
        this.productDes = productDes;
    }
}

// Array of Product
let arrayOfProduct = [];

// function to create obj of class Product and store data of product in arrayOfProduct.
let i = 0;
function createProduct(title, price, imgUrl, des) {
    arrayOfProduct[i] = new Product(title, price, imgUrl, des);
    i++;
}

// Creating Product One By one From Admin Panel
//Values of title,price,imgUrl,des this will come from admin panel when admin click on add Product Button.
createProduct("Product 1", 200, "lehenga-1.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 2", 300, "lehenga-2.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 3", 250, "lehenga-3.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 4", 290, "lehenga-4.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 5", 210, "lehenga-5.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 6", 310, "lehenga-6.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 7", 213, "sherwani-1.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 8", 260, "sherwani-2.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 9", 270, "sherwani-3.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 10", 200, "sherwani-4.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 11", 190, "sherwani-5.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 12", 199, "sherwani-6.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 13", 299, "sherwani-7.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 14", 390, "sherwani-8.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 15", 490, "sherwani-9.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");
createProduct("Product 16", 180, "sherwani-10.jpeg", "60% Off one first Booking Book . Size: L,XL,LL,M,XXL");



// Show All the Product on to the Website

const container = document.getElementById('container');
function createRow() {
    const row = document.createElement('div');
    row.setAttribute('id', 'row');
    return row;
}

let x = 0;
for (let j = 0; j < arrayOfProduct.length; j++) {

    if (j === x) {
        const row = createRow();
        container.append(row);
        x = x + 4;
        for (let i = j; i < x; i++) {
            const card = `<div id="product-card" class="card" style="width: 18rem;">
            <img src="images/${arrayOfProduct[i].imgUrl}" class="card-img-top img-size" alt="lehenga">
            <div class="card-body">
                <h5 class="card-title">${arrayOfProduct[i].title}</h5>
                <h6>&#8377;${arrayOfProduct[i].price}</h6>
                <p class="card-text">${arrayOfProduct[i].productDes}</p>
                <a href="#" class="btn btn-primary" onclick="booknow(${i})">Book Now</a>
            </div>
            </div>`;
            const product = document.createElement('div');
            product.innerHTML = card;
            row.append(product);
        }
    }
}

// Navigation Bar For Vastra

const navBar = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Vastra</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="signup.html">Signup</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.html">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="admin.html">Admin</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`;
document.getElementById('navBar').innerHTML = navBar;


// Book Now button 

function booknow(x){
    const bookNow = `<div id="bookNow">
    <div id="productImg"><img style="height: 500px;width : 300px" src="images/${arrayOfProduct[x].imgUrl}" alt="Product"></div>
    <div id="productCard">
    <h2>${arrayOfProduct[x].title}</h2>
    <h4>&#8377;${arrayOfProduct[x].price}</h4>
    <p>${arrayOfProduct[x].productDes}</p>
    <p>Price of Product is rent price par day</p>
    <label for="Day">Enter Days: </label>
    <input type="Number" placeholder="How many days you want"><br><br>
    <label for="Address">Enter address: </label>
        <form action="details">
            <label for="name">Name: </label>
            <input type="text" placeholder="Enter full name"><br><br>
            <label for="strite">Strite: </label>
            <input type="text" placeholder="like Near Bus stop"><br><br>
            <label for="city">city: </label>
            <input type="text" placeholder="Enter your City"><br><br>
            <label for="pin">Pin: </label>
            <input type="number" placeholder="Enter Pin 458883"><br><br>
            <label for="payment">Select Payment Mode: </label><br>
            <input type="radio" name="pay">COD<br>
            <input type="radio" name="pay">PayNow <br><br><br>
            <button>Book</button>
        </form>
    </div>
    </div>`;
    // container.style.display = "none";
    container.innerHTML = bookNow;
}


