<template>
    <form action="" class="my-8 flex items-center justify-center">
        <div class="flex flex-col w-11/12">
            <div class="pt-16 mb-3 w-11/12">
                <label for="" class="text-xl">
                    Page Title
                </label>
                <input 
                    type="text"
                    class="border border-stone-300 rounded h-24 py-2 w-full"
                    v-model="pageTitle"
                />
            </div>
            <div class="mb-3 w-11/12">
                <label for="" class="text-xl">
                    Content
                </label>
                <textarea
                    class="border border-stone-300 rounded h-24 py-2 w-full"
                    type="text"
                    rows="5"
                ></textarea>
            </div>
            <div class="mb-3">
                <button
                    class="bg-blue-700 text-white px-4 py-2 rounded"
                    @click.prevent="pageCreated({pageTitle, content})"
                >
                    Create Page
                </button>
            </div>
        </div>
        <div class="flex flex-col w-11/12">
            <div class="mb-3 w-11/12">
                <label for="" class="text-xl">
                    Link Text
                </label>
                <input type="text"
                    class="border border-stone-300 rounded h-24 py-2 w-full"
                />
            </div>
            <div class="mb-3 w-11/12">
                <label for="" class="text-xl">
                    Link URL
                </label>
                <input type="text"
                    class="border border-stone-300 rounded h-24 py-2 w-full"
                />
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        props: ['pageCreated'],
        data() {
            return {
                pageTitle: '',
                content: ''
            }
        }
    }
</script>