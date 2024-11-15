<template>
    <div class="categories-list">
        <!-- <h1>Categories</h1> -->
        <ul>
            <li v-if="categories">
                <LazyProducts :categories="categories" />
            </li>
            <li v-else>
                <h2>Categories not found</h2>
            </li>
        </ul>
        <div class="products-list">
            <h2>Products</h2>
            <li v-if="products">
                <LazyProductsSingle :products="products" />
            </li>
            <li v-else>
                <h2>Product not found</h2>
            </li>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const categories = [
    { id: 1, name: 'Til Petha', description: 'Delicious sesame sweet treats with a unique flavor and texture.', image: '/images/dis_2.jpg' },
    { id: 2, name: 'Laru', description: 'Sweet and crunchy, perfect for festivals and celebrations.', image: '/images/dis_2.jpg' },
    { id: 3, name: 'Voja Petha', description: 'Soft and syrupy, a traditional favorite with a rich taste.', image: '/images/dis_2.jpg' },
    { id: 4, name: 'Hesa Petha', description: 'Flavorful and chewy petha with a delightful sweetness.', image: '/images/dis_2.jpg' },
    { id: 5, name: 'Feni Petha', description: 'Flaky and sweet petha that melts in your mouth.', image: '/images/dis_2.jpg' },
    { id: 6, name: 'Narikol Petha', description: 'Coconut-based sweet with a soft, rich flavor.', image: '/images/dis_2.jpg' },
];

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


</script>

<style scoped>
.category-link {
    text-decoration: none;
    color: #3490dc;
    font-weight: bold;
    margin: 8px 0;
}

.products-list {
    margin-top: 20px;
}

.product-card {
    margin: 12px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 200px;
    display: inline-block;
    text-align: center;
}

.product-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
}
</style>
