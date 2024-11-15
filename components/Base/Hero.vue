<template>
    <!-- <div class="flex flex-col md:flex-row items-center p-6 md:p-12 bg-gray-100 rounded-lg shadow-md mx-auto">
        <div class="flex-1 text-center md:text-left md:pr-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Delicious Dish</h2>
            <p class="text-gray-600">
                This amazing dish is crafted with the finest ingredients and cooked to perfection. Enjoy the rich
                flavors and
                delightful textures, perfect for any occasion.
            </p>
            <button class="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
        </div>
        <div class="flex-1 mt-6 md:mt-0">
            <NuxtImg src="/images/dis_1.jpg" class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                loading="lazy" />
        </div>
    </div> -->
    <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <!-- <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"
                src="https://dummyimage.com/720x600"> -->
            <NuxtImg src="/images/dis_2.jpg" class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt='nothing' loading="lazy" />
            <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Microdosing synth tattooed
                    vexillologist</h1>
                <p class="leading-relaxed mb-8">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
                    tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami
                    snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
                    booth af fingerstache pitchfork.</p>
                <div class="flex justify-center">
                    <button
                        class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <NuxtLink to="/about" class="category-link">
                            About Store
                        </NuxtLink>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Script setup if you want to pass props or other logic in the future
</script>

<style scoped>
/* Additional custom styling (optional) */
</style>