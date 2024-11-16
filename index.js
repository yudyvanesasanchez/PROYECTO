const productos = Array.from({ length:6}, (_, i) =>({
 nombre: `producto ${i+1}`,
 precio: ( i + 1 ) * 10,
 imagen: "https://www.puntoblanco.co/cdn/shop/files/ceya-negro-799-729513_000799-1_0b56d9d5-3bf8-4fbf-a44b-22988151a7d4.jpg?v=1721696241"  
}));

let carrito = [];
const productosContainer = document.getElementById("productos-container")

function renderProductos() {
const fragmen = document.createDocumentFragment();
productos.forEach(producto =>{
    const colDiv= document.createElement("div");
    colDiv.className="col-12 col-md-6 col-lg-4 col-x1-2 mb-4";
    colDiv.innerHTML=` 
    <div class="card h-100">
    <img src="${producto.imagen}"class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
    <h5 class="card-title">${producto.precio}</p>
    <p class="card-text>precio:$${producto.precio}</p>
    <a href="#" class="btn btn-primary">comprar</a>
    </div>
    </div>
    `;

    productoscontainer.appendChild(colDiv);

});
}