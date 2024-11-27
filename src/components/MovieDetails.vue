<template>
    <div class="card h-100">
        <img :src="movie.poster?.url || 'https://via.placeholder.com/300x450?text=No+Image+Available'" class="card-img-top" alt="Poster">
        <div class="card-body">
            <h5 class="card-title">{{ movie.name }}</h5>
            <p class="card-text">{{ movie.description }}</p>
            <p class="card-text" v-if="movie.rating.kp">Рейтинг: {{ movie.rating.kp }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['movie']
};
</script>