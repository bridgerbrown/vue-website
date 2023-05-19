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
                    v-model="content"
                ></textarea>
            </div>
        </div>
        <div class="flex flex-col w-11/12">
            <div class="mb-3 w-11/12">
                <label for="" class="text-xl">
                    Link Text
                </label>
                <input 
                    type="text"
                    class="border border-stone-300 rounded h-24 py-2 w-full"
                    v-model="linkText"
                />
            </div>
            <div class="mb-3 w-11/12">
                <label for="" class="text-xl">
                    Link URL
                </label>
                <input 
                    type="text"
                    class="border border-stone-300 rounded h-24 py-2 w-full"
                    v-model="linkUrl"
                />
            </div>
            <div class="mb-3">
                <div>
                    <input type="checkbox" name="" id="" v-model="published">
                    <label for="gridCheck1">
                        Published
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <button
                class="bg-blue-700 text-white px-4 py-2 rounded"
                :disabled="isFormInvalid"
                @click.prevent="submitForm"
            >
                Create Page
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        emits: {
            pageCreated({pageTitle, content, link, published}) {
                if (!pageTitle) {
                    return false;
                }
                if (!content) {
                    return false;
                }
                if (!link.text || !link.url || !link) {
                    return false;
                }

                return true;
            }
        },
        computed: {
            isFormInvalid() {
                return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
            }
        },
        data() {
            return {
                pageTitle: '',
                content: '',
                linkText: '',
                linkUrl: '',
                published: true
            }
        },
        methods: {
            submitForm() {
                if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
                    alert('Please fill out  all fields')
                    return;
                }

                this.$emit('pageCreated', {
                    pageTitle: this.pageTitle,
                    content: this.content,
                    link: {
                        text: this.linkText,
                        url: this.linkUrl
                    },
                    published: this.published
                });

                this.pageTitle = '';
                this.content = '';
                this.linkText = '';
                this.linkUrl = '';
                this.published = true;
            }
        },
        watch: {
            pageTitle(newTitle, oldTitle) {
                if (this.linkText == oldTitle) {
                    this.linkText = newTitle;
                }
            }
        }
    }
</script>