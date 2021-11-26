const pedido = document.querySelectorAll('.card');
pedido.forEach((pedidos) => {
    pedidos.addEventListener('click', clicked);
});

const cardContainer = document.querySelector('.carrito');

function clicked(e) {
    const button = e.target;
    const cards = button.closest('.card');
    
    const cardTitle = cards.querySelector('.card-title').textContent;
    const cardPrecio = cards.querySelector('.precio').textContent;
    const cardImg = cards.querySelector('.imagen-card').src;
   
    compra(cardTitle, cardPrecio, cardImg);
}

function compra(cardTitle, cardPrecio, cardImg) {
    const compraRow = document.createElement('div');
    const compraContent = `
    <div class="row cardContainer">
       <div class="col-6">
           <img src=${cardImg} class="imagen-card" alt="vacito de 140cc con sabor a frutilla y dulce de leche">
           <h3 class="card-title">${cardTitle}</h3>
           <p class="card-text">frutilla con dulce de leche, decorada con salsa de chocolate y lluvia de mani</p>
        </div>
        <div class="col-2">
            <p class="precio">${cardPrecio}</p>
        <div class="col-4">
           <a href="#" class="borrar">X</a>
         </div>
    </div>`;

    compraRow.innerHTML = compraContent;
    cardContainer.append(compraRow);

    compraTotal()
}

function compraTotal(){
    let total = 0;
    const compraTotal = document.querySelector('.precio-total');
    
    const totalItem = document.querySelectorAll('.carrito');
  
    totalItem.forEach((carrito) => {
        const priceElement = carrito.querySelector('.precio');
    


    })
}




/* onst carrito = document.getElementById("carrito");
const pedido = document.getElementById("lista-pedidos");
const listaCarrito = document.querySelector("#lista-carrioto tbody");
const vaciarCarritoBtn = document.getElementById ("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
    pedido.addEventListener('click', hacerPedido);
    carrito.addEventListener('click', eliminarPedido);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener("DOMContentLoaded", leerLocalStorage);
}


function insertarCarrito(pedido) {
    const row = document.createElement ('tr');
    row.innerHTML = `
       <td>
          <img scr="${pedido.imagen}" width=100>
       </td>
       <td>${pedido.titulo}</td>
       <td>${pedido.texto}</td>
       <td>${pedido.precio}</td>
       <td>
          <a href="#" class="btn btn-primary agregar-carrito" data-id"${pedido.id}">x</a>
       </td>
    `;
    listaPedidos.appendChild(row); 
    guardarPedidoLocalStorage(pedido);
}

function leerDatosPedido(pedido) {
    const infoPedido = {
        imagen: card.querySelector('img').scr,
        titulo: card.querySelector('h3').textContent,
        texto: card.querySelector('card-text').textContent,
        precio: card.querySelector('.precio').textContent,
        id: card.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoPedido);
} 

function hacerPedido(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const pedido = e.target.parentElement.parentElement;
    }
    
    leerDatosPedido(pedido);
}




function eliminarPedido(e) {
    e.preventDefault();

    let pedido,
        pedidoId;

    if(e.target.classList.contains('agregar-carrito')) {
        e.target.parentElement.parentElement.remove();
        pedido = e.target.parentElement.parentElement;
        pedidoId = pedido.querySelector('a').getAttribute('data-id');
    }
    eliminarPedidoLocalStorage(pedidoId)
}

function vaciarCarrito() {
    while(listaPedidos.firstChild){
        listaPedidos.removeChild(listaPedidos.firstChild);
    }
    vaciarLocalStorage();

    return false;
}

function guardarPedidosLocalStorage(pedido) {
    let pedidos;

    pedidos = obtenerPedidosLocalStorage();
    pedidos.push(pedido);

    localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function obtenerPedidosLocalStorage() {
    let pedidosLS;

    if(localStorage.getItem('pedidos') === null) {
        pedidosLS = [];
    }else {
        pedidosLS = JSON.parse(localStorage.getItem('pedidos'));
    }
    return pedidosLS;
}

function leerLocalStorage() {
    let pedidosLS;

    pedidosLS = obtenerPedidosLocalStorage();

    pedidosLS.forEach(function(pedido){
        const row = document.vreateElement('tr');
        row.innerHTML = `
           <td>
               <img scr="${pedido.imagen}" width=100>
            </td>
            <td>${pedido.titulo}</td>
            <td>${pedido.precio}</td>
            <td>
               <a href="#" class="btn btn-primary agregar-carrito" data-id="${pedido.id}">x</a>
            </td>
        `;
        listaPedidos.appendChild(row);
    });
}

function eliminarPedidoLocalStorage(pedido) {
    let pedidosLS;
    pedidosLS = obtenerPedidosLocalStorage();
    
    pedidosLS.forEach(function(pedidoLS, index){
        if(pedidoLS.id === pedido) {
            pedidosLS.splice(index, 1);
        }
    });

    localStorage.setItem('pedidos', JSON.stringify(pedidosLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}
    
 */