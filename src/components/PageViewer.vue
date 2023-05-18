<template>
    <div class="mt-8 mx-8">
        <h1 class="pb-4 text-3xl">
            {{ page.pageTitle }}
        </h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script>
export default {
    props: ['page'],
}
</script>