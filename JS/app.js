const carta = [
    // --- ENTRADAS ---
    {
        id: 1,
        nombre: "Empanadas",
        descripcion: "Empanadas crujientes rellenas de carne desmechada y papa, acompañadas de ají casero.",
        precio: 8000,
        foto: "https://i.pinimg.com/736x/12/1f/fd/121ffd99ee2ee5eb512657feb47c6c1b.jpg",
        categoria: "Entradas"
    },
    {
        id: 2,
        nombre: "Arepa con chorizo",
        descripcion: "Chorizo santarrosano asado a la parrilla, acompañado de arepa de maíz blanco.",
        precio: 12000,
        foto: "https://i.pinimg.com/736x/90/00/ec/9000ec76b55f197b0e8ad728f84a1408.jpg",
        categoria: "Entradas"
    },
    {
        id: 3,
        nombre: "Arepa Boyacense",
        descripcion: "Arepa tradicional a base de harina de maíz y trigo, rellena de queso campesino dulce.",
        precio: 7000,
        foto: "https://i.pinimg.com/736x/c9/2f/f8/c92ff8c8b09174cf0d6514d720e30c99.jpg",
        categoria: "Entradas"
    },

    // --- PLATO FUERTE ---
    {
        id: 4,
        nombre: "Changua",
        descripcion: "Caldo tradicional a base de leche, huevos, cilantro, cebolla y calado tostado.",
        precio: 14000,
        foto: "https://i.pinimg.com/736x/47/81/c9/4781c9212d32aa63ab9468ee4ab3bcf2.jpg",
        categoria: "Plato Fuerte"
    },
    {
        id: 5,
        nombre: "Bandeja Paisa",
        descripcion: "Frijoles, arroz blanco, carne molida, chicharrón, huevo frito, tajada de plátano maduro, chorizo, arepa y aguacate.",
        precio: 32000,
        foto: "https://i.pinimg.com/1200x/2c/6d/f7/2c6df799213745ca58f425a68c8b5c64.jpg",
        categoria: "Plato Fuerte"
    },
    {
        id: 6,
        nombre: "Carne a la Llanera",
        descripcion: "Corte jugoso de carne de res asada a la chuzo, acompañada de yuca, plátano y guacamole.",
        precio: 35000,
        foto: "https://i.pinimg.com/736x/75/18/ee/7518ee7afee018778839c6d4e106a32a.jpg",
        categoria: "Plato Fuerte"
    },
    {
        id: 7,
        nombre: "Picada",
        descripcion: "Mezcla de carnes (res, cerdo, pollo), chicharrón, chorizo, papa criolla, yuca y plátano verde.",
        precio: 45000,
        foto: "https://i.pinimg.com/1200x/cd/4d/39/cd4d3935fb3d8004ad893dd6d541d1c8.jpg",
        categoria: "Plato Fuerte"
    },
    {
        id: 8,
        nombre: "Ajiaco",
        descripcion: "Sopa tradicional de tres tipos de papas, guascas, pollo desmechado, mazorca, servida con alcaparras y crema de leche.",
        precio: 28000,
        foto: "https://i.pinimg.com/736x/24/be/ba/24beba5a0b66346c01d630e24d0fa8de.jpg",
        categoria: "Plato Fuerte"
    },
    {
        id: 9,
        nombre: "Lechona",
        descripcion: "Carne de cerdo horneada con arvejas amarillas, especias y cuero tostado crujiente, servida con arepa.",
        precio: 24000,
        foto: "https://i.pinimg.com/1200x/fd/3d/04/fd3d04b5fb0e3145aecb50171f872d9c.jpg",
        categoria: "Plato Fuerte"
    },
    {
        id: 10,
        nombre: "Tamal",
        descripcion: "Masa de maíz rellena de carne de cerdo, pollo, zanahoria, arveja y huevo, envuelto en hoja de plátano.",
        precio: 16000,
        foto: "https://i.pinimg.com/1200x/cf/80/e7/cf80e77e9dc2076afa613b11c77902b1.jpg",
        categoria: "Plato Fuerte"
    },

    // --- MENÚ INFANTIL ---
    {
        id: 11,
        nombre: "Mini Bandeja Paisa",
        descripcion: "Porción infantil con arroz, frijoles, carne molida, huevo frito pequeño y tajada de plátano.",
        precio: 18000,
        foto: "https://i.pinimg.com/736x/83/32/14/833214ad2a6215b44e37ad679f7cfdc3.jpg",
        categoria: "Menu Infantil"
    },
    {
        id: 12,
        nombre: "Hamburguesa Mini",
        descripcion: "Mini hamburguesa de res con queso derretido, lechuga, tomate y porción de papas a la francesa.",
        precio: 16000,
        foto: "https://i.pinimg.com/1200x/5f/dc/3a/5fdc3ab1ff415cf436ef12b893db7207.jpg",
        categoria: "Menu Infantil"
    },
    {
        id: 13,
        nombre: "Nuggets de Pollo",
        descripcion: "Bocadillos de pechuga de pollo empanizados y crujientes, acompañados de papas a la francesa y salsa de la casa.",
        precio: 15000,
        foto: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        categoria: "Menu Infantil"
    },

    // --- POSTRES ---
    {
        id: 14,
        nombre: "Fresas con Crema",
        descripcion: "Fresas frescas laminadas bañadas en crema de leche dulce y leche condensada.",
        precio: 10000,
        foto: "https://i.pinimg.com/736x/1b/91/0d/1b910dcd6dce724d800ecde228d08fe1.jpg",
        categoria: "Postres"
    },
    {
        id: 15,
        nombre: "Arroz con Leche",
        descripcion: "Postre cremoso de arroz cocinado en leche con canela, pasas y un toque de leche condensada.",
        precio: 8000,
        foto: "https://i.pinimg.com/1200x/25/c0/67/25c067b12fad9cf9e012e1859893b6e9.jpg",
        categoria: "Postres"
    },
    {
        id: 16,
        nombre: "Crumble de Chocolate y Fresa",
        descripcion: "Crumble crocante al horno servido con cobertura de chocolate derretido y mermelada artesanal de fresas.",
        precio: 14000,
        foto: "https://i.pinimg.com/736x/21/62/02/21620269533db70c91571339cf5be6fd.jpg",
        categoria: "Postres"
    },
    {
        id: 17,
        nombre: "Cholado",
        descripcion: "Hielo raspado con jarabes de frutas, trozos de fruta fresca, leche condensada y galleta.",
        precio: 12000,
        foto: "https://i.pinimg.com/736x/b9/22/28/b922281e005a7cb3ab14dc1fac9b8424.jpg",
        categoria: "Postres"
    },

    // --- BEBIDAS ---
    {
        id: 18,
        nombre: "Gaseosas",
        descripcion: "Bebida carbonatada personal en variedad de sabores (350ml).",
        precio: 5000,
        foto: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        categoria: "Bebidas"
    },
    {
        id: 19,
        nombre: "Limonada",
        descripcion: "Limonada natural recién exprimida, disponible tradicional o de coco.",
        precio: 7000,
        foto: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        categoria: "Bebidas"
    },
    {
        id: 20,
        nombre: "Jugos Naturales",
        descripcion: "Jugo de fruta natural en agua o leche (Lulo, Maracuyá, Mango, Mora).",
        precio: 8000,
        foto: "https://i.pinimg.com/1200x/d8/dd/77/d8dd7794961b0c2d03f294567cf2a8c8.jpg",
        categoria: "Bebidas"
    },
    {
        id: 21,
        nombre: "Café",
        descripcion: "Café colombiano de origen, disponible en tinto tradicional, expreso o café con leche.",
        precio: 4000,
        foto: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
        categoria: "Bebidas"
    },
    {
        id: 22,
        nombre: "Avena",
        descripcion: "Bebida cremosa de avena fría o caliente con un toque de canela.",
        precio: 6000,
        foto: "https://i.pinimg.com/736x/42/fd/2d/42fd2d374007146c863bde9ceaa671d0.jpg",
        categoria: "Bebidas"
    }
];

//Menu

//Elementos de la pagina
const menu = document.querySelector("#menu");
const filtro =document.querySelector("#filtros-categoria");

//Formatear precio 
function formatearPrecio(valor) {
    return "$" + valor.toLocaleString("es-CO");
}


//Mostrar carta
function mostrarCarta(listaproducto = carta) {
    let html = "";

    //Verificar que la cateogira este vacia
    if (listaproducto.length === 0) {
        menu.innerHTML = `<p class="text-center text-muted fs-5 my-5">No hay productos disponibles en esta categoría.</p>`
        return;
    }
    //for para mostrar los productos en el HTML
    for (const producto of listaproducto) {
        html += `
            <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <img src="${producto.foto}" class="card-img-top object-fit-cover" style="height: 200px;" alt="${producto.nombre}">

                <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title fw-bold mb-0">${producto.nombre}</h5>
                    <span class="badge bg-secondary-subtle text-secondary border rounded-pill">${producto.categoria}</span>
                    </div>
                    <p class="card-text text-muted small">${producto.descripcion}</p>
                </div>

                <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                    <span class="fs-5 fw-bold text-success">${formatearPrecio(producto.precio)}</span>
                    <button class="btn btn-primary btn-sm rounded-pill px-3 agregar" type="button" data-accion="agregar"
                    data-id="${producto.id}">
                    <i class="bi bi-cart-plus me-1"></i> Agregar
                    </button>
                </div>
                </div>
            </div>
            </div>
        `
    }
    menu.innerHTML =html;
}

//Filtrar por categoría
function filtrarCategoria(categoriaProducto){
    if (categoriaProducto === "todos") {
        mostrarCarta(carta);
    }else{
        const productosFiltrados = carta.filter(
            producto => producto.categoria === categoriaProducto);
        mostrarCarta(productosFiltrados);
    }
}

//Evento de clicks
filtro.addEventListener("click", e =>{

    //console.log("hizo click");
    
    if(e.target.tagName === "BUTTON"){
        //Cambiar clase active a boton seleccionado
        document.querySelectorAll("#filtros-categoria .btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        //Obtener la categoria seleccionada
        const categoria = e.target.dataset.categoria;
        filtrarCategoria(categoria);
    }

})

document.addEventListener("DOMContentLoaded", ()=> mostrarCarta());

// Clave con la que se guarda el carrito en localStorage
const CLAVE_CARRITO = "carritoMigaDeCasa";

// Carrito: lista de productos
let carrito = JSON.parse(localStorage.getItem(CLAVE_CARRITO)) || [];

// Guarda el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

// Agrega un producto al carrito, lo guarda y vuelve a pintar
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    guardarCarrito();
    mostrarCarrito();
}

// Quita un producto por su posición
function eliminarDelCarrito(posicion) {
    carrito.splice(posicion, 1);
    guardarCarrito();
    mostrarCarrito();
}

// Dibuja la lista del carrito y actualiza el contador del navbar
function mostrarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const contador = document.getElementById("contadorCarrito");
    

    lista.textContent = "";

    if (carrito.length === 0) {
        const vacio = document.createElement("li");
        vacio.className = "dropdown-item text-muted";
        vacio.textContent = "Tu carrito está vacío";
        lista.appendChild(vacio);
        contador.classList.add("d-none");
        return;
    }

    for (let i = 0; i < carrito.length; i++) {
        const item = document.createElement("li");
        item.className = "dropdown-item d-flex justify-content-between align-items-center";
        item.textContent = carrito[i].nombre + " - $" + carrito[i].precio;

        const boton = document.createElement("button");
        boton.className = "btn btn-sm btn-outline-danger ms-2";
        boton.textContent = "Quitar";
        boton.addEventListener("click", function () {
            eliminarDelCarrito(i);
        });

        item.appendChild(boton);
        lista.appendChild(item);
    }

    contador.textContent = carrito.length;
    contador.classList.remove("d-none");
}


