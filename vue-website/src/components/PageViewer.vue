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
    props: ['index'],
    created() {
        this.page = this.$pages.getSinglePage(this.index);

        // this.$watch(() => this.$route.params, (newParams, prevParams) => {
        //     this.page = this.$pages.getSinglePage(newParams.index);
        // });
    },
    data() {
        return {
            page: null
        };
    },
    watch: {
        index(newIndex, oldIndex) {
            this.page = this.$pages.getSinglePage(newIndex);
        }
    }
}
</script>