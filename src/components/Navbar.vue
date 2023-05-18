<template>
    <nav 
        class="w-full py-6 px-4"
        :class="[`navbar-${theme}`, `bg-${theme}`]"
    >
        <div class="flex justify-between items-center">
        <a href="#"
            class="text-2xl font-semibold"
        >
            Vue.js Website
        </a>
        <div class="flex space-x-6">
            <ul class="flex space-x-6">
            <li v-for="(page, index) in pages" :key="index">
                <a 
                class="cursor-pointer" 
                :class="{active: activePage == index}"
                aria-current="page"
                :href="page.link.url"
                :title="`This link goes to the ${page.link.text} page`"
                @click.prevent="navLinkClick(index)"
                >
                    {{ page.link.text }}
                </a>
            </li>
            </ul>
            <form action=""
            class="flex"
            >
            <button
                class="w-8 h-8 rounded-full bg-stone-300"
                @click.prevent="changeTheme()"
            >
                Mode
            </button>
            </form>
        </div>
        </div>
    </nav>
</template>

<script lang="js">
    export default {
        props: ['pages', 'activePage', 'theme', 'navLinkClick'],
        data() {
          return {
            theme: 'light',
          }
        },
        methods: {
          changeTheme() {
            let theme = 'light';

            if (this.theme == 'light') {
              theme = 'dark';
            }

            this.theme = theme;
          }
        }
    }
</script>