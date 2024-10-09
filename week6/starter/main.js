// Variables
// 1. Create a Categories Array
const categories = ['All', "T-shirt", 'Hoodies']

/**
 * Displays the list of categories as HTML list items on the page.
 * 
 */


//2. Display Categories Dynamically

function displayCategories() {
    //retrieve the HTML element where the categories will be displayed 
    const $categories = document.getElementById('categories')
    //create an empty list (array) to store the category elements
    const htmlTemplate = []
    //loop each item in the categories array
    categories.forEach(category => {
        htmlTemplate.push(`<li class="nav-item">
              <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
            </li>`)
    })
    //for each is a loop for each item in categories push the new code into the temp array htmlTemplate, the function is anonymous, each value of categories will be granted to item category then using that to push to the temp array
    //combine the list of category elements into a single string and insert into the cate element
    $categories.innerHTML = htmlTemplate.join()
}

//3. Refactor with map()

function displayCategoriesUsingMap() {
    const $categories = document.getElementById('categories')
    $categories.innerHTML = categories.map(category => `<li class="nav-item">
              <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
            </li>`).join()
}

/** 
 * Adds a product to the cart and updates the cart display.
 * @param {string} product - The name of the product to be added.
 */

// 4. Add Products to the Cart

//initiate an empty cart array
let cart = []

function addToCart(product) {
    //add the product to the cart array
    cart.push(product)
    displayCart() //after adding, need to display again
}

// 5. Create the function to display the cart
function displayCartUsingMap() {
    //map each item in the cart, create an HTML list item for each
    //insert combined HTML into the element with the ID cart
    document.getElementById('cart').innerHTML = cart.map(item => `<li>${item}</li>`).join()
}


// 6. Refactor Using JavaScript Methods to Create HTML Elements
/**
 * Updates the cart display on the webpage by generating a list of
 * the products currently in the cart.
 */
// Display the product
function displayCart() {
    // Retrieve the cart element from the DOM | getElementById
    const $cart = document.getElementById('cart')
    // Clear the existing cart items | innerHTML = ''
    $cart.innerHTML = ''
    // Loop through each item in the cart array | forEach
    $cart.forEach(item => {
        // Create a new list item element | createElement('li')
        const liEl = document.createElement('li')
        // Set the text content of the <li> with the item | textContent
        liEl.textContent = item
        // liEl.className = 'blue' //grant the classname
        // Append the list item to the cart element | appendChild
        $cart.appendChild(liEl)
    })
}

// 7. Create the function to display the cart

/**
 * Removes a product from the cart by filtering out the selected product,
 * and updates the cart display.
 * @param {string} product - The name of the product to be removed.
 */
// 8. Remove a Product from the Cart
function removeFromCart (index) {
    cart.splice(index-1,1)
    displayCart() //have to display again
}

// 9. Refactor Using filter()