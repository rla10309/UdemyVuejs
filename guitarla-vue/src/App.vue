<script setup>
import { ref, reactive, onMounted, watch } from "vue"
import { db } from "./data/guitarras"
import Guitarra from "./components/Guitarra.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

// Añadir datos con reactive
// const state = reactive({
//     guitarras: []
// })
// console.log(state.guitarras);

// Añadir datos con ref
const guitarras = ref([])
const carrito = ref([])
const guitarra = ref({})

watch(carrito, () => {
    guardarLocalStorage();
}, {
    deep: true
})

onMounted(() => {
    guitarras.value = db;
    guitarra.value = db[3];

    const carritoStorage = localStorage.getItem("carrito");
    if (carritoStorage) {
        carrito.value = JSON.parse(carritoStorage);
    }
})
const guardarLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito.value));

}
const agregarCarrito = (guitarra) => {
    const existeCarrito = carrito.value.findIndex(producto => producto.id === guitarra.id)
    if (existeCarrito >= 0) {
        carrito.value[existeCarrito].cantidad++;
    } else {
        guitarra.cantidad = 1;
        carrito.value.push(guitarra);
    }
}
const decrementarCantidad = (id) => {
    let producto = carrito.value.find(item => item.id === id);
    if (producto.cantidad <= 1) return;
    producto.cantidad--;

}
const incrementarCantidad = (id) => {
    let producto = carrito.value.find(item => item.id === id);
    if (producto.cantidad >= 5) return;
    producto.cantidad++;

}
const eliminarProducto = (id) => {
    carrito.value = carrito.value.filter(producto => producto.id !== id);

}
const vaciarCarrito = () => {
    carrito.value = [];

}

</script>

<template>
    <Header :carrito="carrito" :guitarra="guitarra" @incrementar-cantidad="incrementarCantidad"
        @decrementar-cantidad="decrementarCantidad" @agregar-carrito="agregarCarrito" @eliminar-producto="eliminarProducto"
        @vaciar-carrito="vaciarCarrito" />
    <main class="container-xl mt-5">
        <h2 class="text-center">Nuestra Colección</h2>

        <div class="row mt-5">

            <Guitarra key="guitarra.id" v-for="guitarra in guitarras" :guitarra="guitarra"
                @agregar-carrito="agregarCarrito" />

        </div>
    </main>
    <Footer />
</template>

