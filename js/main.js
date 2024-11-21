
//Simulador Carrito de Compras

function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  
  
  const productosTienda = [
    new Producto('Camiseta', 20, 100),
    new Producto('Pantalones', 30, 50),
    new Producto('Zapatos', 40, 30),
    new Producto('Gorra', 15, 200),
  ];
  

  let carrito = [];
  

  function mostrarProductos() {
    console.log('Productos disponibles:');
    productosTienda.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombre} - $${producto.precio} (Stock: ${producto.cantidad})`);
    });
  }
  

  function agregarAlCarrito(indice, cantidad) {
    const productoSeleccionado = productosTienda[indice];
    if (productoSeleccionado && productoSeleccionado.cantidad >= cantidad) {
  
      const productoEnCarrito = carrito.find(item => item.nombre === productoSeleccionado.nombre);
      if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad; 
      } else {
        carrito.push({
          nombre: productoSeleccionado.nombre,
          precio: productoSeleccionado.precio,
          cantidad: cantidad
        });
      }

      productoSeleccionado.cantidad -= cantidad;
      console.log(`${cantidad} ${productoSeleccionado.nombre} añadido(s) al carrito.`);
    } else {
      console.log('No hay suficiente stock de este producto.');
    }
  }
  

  function calcularTotal() {
    let total = 0;
    carrito.forEach(item => {
      total += item.precio * item.cantidad;
    });
    return total;
  }
  

  function mostrarCarrito() {
    if (carrito.length === 0) {
      console.log('Tu carrito está vacío.');
    } else {
      console.log('Carrito de compras:');
      carrito.forEach(item => {
        console.log(`${item.nombre} - $${item.precio} x ${item.cantidad}`);
      });
      const total = calcularTotal();
      console.log(`Total a pagar: $${total}`);
    }
  }
  
  // Función para eliminar un producto del carrito
  function eliminarDelCarrito(nombreProducto) {
    const index = carrito.findIndex(item => item.nombre === nombreProducto);
    if (index !== -1) {
     
      const producto = carrito[index];
      const productoEnTienda = productosTienda.find(p => p.nombre === nombreProducto);
      productoEnTienda.cantidad += producto.cantidad;
  
      carrito.splice(index, 1);
      console.log(`${producto.nombre} ha sido eliminado del carrito.`);
    } else {
      console.log('Este producto no está en el carrito.');
    }
  }
  
  
  mostrarProductos();
  agregarAlCarrito(0, 2);  
  agregarAlCarrito(1, 1);  
  mostrarCarrito();
  eliminarDelCarrito('Camiseta');
  mostrarCarrito();
  