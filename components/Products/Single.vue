<template>
    <h1>Product Singel page here.</h1>
    <div>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto" v-for="product in products" :key="product.id">
                    <div class="rounded-lg h-64 overflow-hidden">
                        <!-- Check if the product object and image property exist -->
                        <div>
                            <!-- <div v-if="pending">Image is coming ...</div> -->
                            <!-- <div>
                                <NuxtImg v-if="product?.image" :src="product.image" loading="lazy" />
                            </div> -->
                            <div
                                class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p class="leading-relaxed text-lg mb-4">
                                    {{ product?.name || 'description is populating' }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
})
defineProps(['products'])
// defineProps(['product', 'pending'])

</script>

<style scoped></style>