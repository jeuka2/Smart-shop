// Ejemplo de datos de productos (deberás reemplazarlo con tu lógica de servidor y base de datos)
let products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 150 },
    { id: 3, name: "Producto 3", price: 75 }
];

const productList = document.getElementById("product-list");
const createForm = document.getElementById("create-form");
const editForm = document.getElementById("edit-form");
const deleteButton = document.getElementById("delete-button");

//mostrar la lista de productos
function displayProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `${product.name} - $${product.price}`;
        li.addEventListener("click", () => editProduct(product));
        productList.appendChild(li);
    });
}

//editar un producto
function editProduct(product) {
    editForm.style.display = "block";
    deleteButton.style.display = "block";

    document.getElementById("edit-product-id").value = product.id;
    document.getElementById("edit-product-name").value = product.name;
    document.getElementById("edit-product-price").value = product.price;
}

//guardar cambios en la edición
editForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const productId = parseInt(document.getElementById("edit-product-id").value);
    const newName = document.getElementById("edit-product-name").value;
    const newPrice = parseFloat(document.getElementById("edit-product-price").value);

    // Actualizar los datos del producto 
    const updatedProduct = products.find(product => product.id === productId);
    updatedProduct.name = newName;
    updatedProduct.price = newPrice;

    // Limpiar el formulario y ocultar los elementos de edición
    editForm.style.display = "none";
    deleteButton.style.display = "none";

    // Volver a mostrar la lista actualizada
    displayProducts();
});

//eliminar un producto
deleteButton.addEventListener("click", function () {
    const productId = parseInt(document.getElementById("edit-product-id").value);

    // Eliminar el producto de la lista 
    products = products.filter(product => product.id !== productId);

    // Limpiar el formulario y ocultar los elementos de edición
    editForm.style.display = "none";
    deleteButton.style.display = "none";

    // Volver a mostrar la lista actualizada
    displayProducts();
});

//crear un nuevo producto
createForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newName = document.getElementById("product-name").value;
    const newPrice = parseFloat(document.getElementById("product-price").value);

    // Agregar el nuevo producto a la lista 
    const newProduct = { id: products.length + 1, name: newName, price: newPrice };
    products.push(newProduct);

    // Limpiar el formulario y mostrar la lista actualizada
    createForm.reset();
    displayProducts();
});

// Inicializar la lista de productos al cargar la página
displayProducts();
