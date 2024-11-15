<!-- component/products/index.vue -->
<template>
    <div>
        <div>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="category in categories" :key="category.id">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <NuxtImg v-if="category?.image" :src="category.image" loading="lazy" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    <NuxtLink :to="`/categories/${category.name}`" class="category-link">
                                        {{ category.name }}
                                    </NuxtLink>
                                </h3>
                                <h2 class="text-white title-font text-lg font-medium">{{ category.description }}</h2>
                                <!-- <p class="mt-1">$16.00</p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
defineProps(['categories'])
</script>

<style scoped></style>
