let merchanProducts = [
    {
        id: 01,
        name:"Bulbasaur",
        price:1500,
        img:"./img/merchandising/bulbasaur.jpg"
    },
    {
        id: 02,
        name:"Charmander",
        price:1500,
        img:"./img/merchandising/charmander.jpg"
    },
    {
        id: 03,
        name:"Eevee",
        price:1800,
        img:"./img/merchandising/eevee.jpg"
    },
    {
        id: 04,
        name:"Greninja",
        price:1800,
        img:"./img/merchandising/greninja.jpg"
    },
    {
        id: 05,
        name:"Grookey",
        price:1500,
        img:"./img/merchandising/grookey.jpg"
    },
    {
        id: 06,
        name:"Growlithe",
        price:1500,
        img:"./img/merchandising/growlithe.jpg"
    },
    {
        id: 07,
        name:"Pikachu",
        price:1800,
        img:"./img/merchandising/pikachu.jpg",
    
    },
    {
        id: 08,
        name:"Totodile",
        price:1500,
        img:"./img/merchandising/totodile.jpg"
    },
    {
        id: 09,
        name:"Vulpix",
        price:1500,
        img:"./img/merchandising/vulpix.jpg"
    },
    {
        id: 10,
        name:"Yamper",
        price:1400,
        img:"./img/merchandising/yamper.jpg"
    }
]
let users;
let cart;

if(JSON.parse(localStorage.getItem('cart')) || JSON.parse(localStorage.getItem('users')))  {
    cart = JSON.parse(localStorage.getItem('cart'));
    users = JSON.parse(localStorage.getItem('users'))
} else {
    localStorage.setItem('cart', JSON.stringify([]))
    localStorage.setItem('users', JSON.stringify([]))
    cart = JSON.parse(localStorage.getItem('cart'))
    users = JSON.parse(localStorage.getItem('users'))
}

function showProducts (){
    for (let i = 0; i < merchanProducts.length; i++) {
        const element = merchanProducts[i];
        const { id, name, price, img } = element
            const card = `
                <div class="card text-center m-2" style="width: 18rem;">
                    <img src=${img} class="d-block imgProducts img-fluid" alt="${name}">
                    <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-price">$${price}</p>
                    <button id=${id} class="btn btn-warning">Agregar al Carrito</button>
                    </div>
                </div>
                `
            const containerProduct = document.getElementById('containerProduct')
            containerProduct.innerHTML += card
    }
}
showProducts();

const addBtn = document.getElementsByClassName('btn');

for (let i = 0; i < addBtn.length; i++) {
    const element = addBtn[i];
    element.addEventListener('click', addCart)
}

function addCart(e){
    const btn = e.target;
    const idBoton = btn.getAttribute('id')
    const idFound = merchanProducts.find(prod => prod.id == idBoton)
    const inCart = cart.find(prod => prod.id == idFound.id)
    if(!inCart) {
        cart.push({...idFound, cantidad: 1})
    } else {
        let cartFilter = cart.filter(id => id.id != inCart.id)
        cart = [...cartFilter, {...inCart, cantidad: inCart.cantidad + 1}]
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    location.reload();
}

const counter = document.getElementById('cartCounter');
counter.innerHTML = cart.length;