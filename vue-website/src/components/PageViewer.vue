<template>
    <div class="mt-8 mx-8">
        <h1 class="pb-4 text-3xl">
            {{ page.pageTitle }}
        </h1>
        <p>{{$route.params.index}}</p>
    </div>
</template>

<script>
export default {
    created() {
        this.page = this.$pages.getSinglePage(this.$route.params.index);
    },
    data() {
        return {
            page: null
        };
    }
}
</script>