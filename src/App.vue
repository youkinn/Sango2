<style scoped>

</style>

<template>
    <section class="app">
        <router-view></router-view>
    </section>
</template>

<script>
    import store from './vuex/store'
    export default {
        components: {
        },
        store
    }
</script>
