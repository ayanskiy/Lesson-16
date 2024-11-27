<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="query">Введите название фильма</label>
            <input v-model="query" type="text" class="form-control mb-3" id="query" placeholder="Название фильма">
        </div>
        <button type="submit" class="btn btn-primary">Найти фильм</button>
    </form>
</template>
  
<script>
export default {
    data() {
        return {
            query: ''
        };
    },
    methods: {
        onSubmit() {
            this.$emit('search', this.query);
            //this.$router.push('/movies/search/', this.query);
        }
    }
};
</script>