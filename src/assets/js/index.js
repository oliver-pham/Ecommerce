/** Add any JavaScript you need to this file. */
window.onload = function () {
    var dropdown = document.getElementsByClassName("dropdown-btn");

    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    products.forEach(product => {
        displayProduct(product);
    });
}

function openSidebar() {
    document.getElementById("show-sidebar").style.display = "none";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("show-sidebar").style.display = "block";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function clearChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

function displayProduct(product) {
    var productContainer = document.getElementById('products');
    var card = document.createElement('div');
    card.className = "product-card";
    var content = document.createElement('div');
    content.className = "product-content";
    // Product Image
    var img = document.createElement('img');
    img.className = "product-img";
    img.src = product.img.src;
    // Product Name
    var name = document.createElement('h3');
    name.className = "product-name";
    name.innerText = product.name;
    // Product Description
    var desc = document.createElement('div');
    desc.className = "product-desc";
    desc.textContent = product.description;
    // Product Category
    var ctg = document.createElement('div');
    ctg.className = "product-category";
    ctg.appendChild(document.createTextNode("Category: "));
    var ctgName = document.createElement('span');
    ctgName.className = "category-name";
    ctgName.textContent = product.category;
    ctg.appendChild(ctgName);
    // Product Price
    var price = document.createElement('div');
    price.className = "product-price";
    price.appendChild(document.createTextNode("Price: "));
    var priceTag = document.createElement('span');
    priceTag.className = "price-tag";
    priceTag.textContent = product.price;
    price.appendChild(priceTag);
    // Attach all details of the product to Product Content
    content.appendChild(name);
    content.appendChild(desc);
    content.appendChild(ctg);
    content.appendChild(price);
    // Hire Button
    var userOptions = document.createElement('div');
    userOptions.className = "user-options";
    var hireBtn = document.createElement('button');
    hireBtn.className = "buy-btn";
    hireBtn.innerText = "Buy";
    userOptions.appendChild(hireBtn);
    // Attach all properties to Product Card
    card.appendChild(img);
    card.appendChild(content);
    card.appendChild(userOptions);
    productContainer.appendChild(card);
}

function filterCategory(category) {
    var categories = document.getElementsByClassName("category-name");
    for (var i = 0; i < categories.length; i++) {
        if (category && categories[i].innerText !== category) {
            var card = categories[i].parentNode.parentNode.parentNode;
            card.style.display = "none";
        }
        else {
            var card = categories[i].parentNode.parentNode.parentNode;
            card.style.display = "block";
        }
    }
}
