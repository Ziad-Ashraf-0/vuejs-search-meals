<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-2xl h-48 object-cover w-full">
        </router-link>
        <div class="p-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-4">{{ $filters.truncateWords(meal.strInstructions, 20) }}...
            </p>
            <div class="flex items-center justify-between">
                <YouTubeButton :href="meal.strYoutube" />

            </div>
        </div>
    </div>
</template>

<script setup>

import YouTubeButton from "../components/YouTubeButton.vue";

const { meal } = defineProps({
    meal: Object
})

</script>