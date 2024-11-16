<template>
    <div>
        <h1>Products in {{ categoryName }} Category</h1>
        <div v-if="filteredProducts.length">
            <div v-for="product in filteredProducts" :key="product.id" class="product-card">
                <img :src="product.image" alt="Product image" />
                <NuxtLink :to="`/categories/id/${product.id}`" class="category-link">
                    <h2>{{ product.name }}</h2>
                    <!-- {{ category.name }} -->
                    <!-- <h2>Category-Name - {{ product.name }} {{ product.id }}</h2> -->
                </NuxtLink>
            </div>
        </div>
        <div v-else>
            <p>No products found in this category.</p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
})
import { useRoute } from 'vue-router'

// Access category name from the route
const route = useRoute()
const categoryName = route.params.name

// Define static products (in a real app, you may fetch this from an API)
const products = [
    { id: 1, name: 'Til Petha - Classic', category: 'Til Petha', image: '/images/dis_2.jpg' },
    { id: 2, name: 'Til Petha - Premium', category: 'Til Petha', image: '/images/dis_2.jpg' },
    { id: 3, name: 'Laru - Coconut', category: 'Laru', image: '/images/dis_2.jpg' },
    { id: 4, name: 'Laru - Sesame', category: 'Laru', image: '/images/dis_2.jpg' },
    { id: 5, name: 'Voja Petha - Soft', category: 'Voja Petha', image: '/images/dis_2.jpg' },
    { id: 6, name: 'Voja Petha - Dry', category: 'Voja Petha', image: '/images/dis_2.jpg' },
    { id: 7, name: 'Hesa Petha - Regular', category: 'Hesa Petha', image: '/images/dis_2.jpg' },
    { id: 8, name: 'Hesa Petha - Special', category: 'Hesa Petha', image: '/images/dis_2.jpg' },
    { id: 9, name: 'Feni Petha - Flaky', category: 'Feni Petha', image: '/images/dis_2.jpg' },
    { id: 10, name: 'Feni Petha - Crunchy', category: 'Feni Petha', image: '/images/dis_2.jpg' },
    { id: 11, name: 'Narikol Petha - Soft', category: 'Narikol Petha', image: '/images/dis_2.jpg' },
    { id: 12, name: 'Narikol Petha - Premium', category: 'Narikol Petha', image: '/images/dis_2.jpg' },
];

// Filter products based on the selected category
const filteredProducts = products.filter(product => product.category === categoryName)
</script>

<style scoped>
.product-card {
    margin: 12px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
</style>