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
            <li v-for="(page, index) in publishedPages" :key="index">
                <navbar-link
                    :page="page"
                    :isActive="activePage == index"
                    @click.prevent="navLinkClick(index)"
                >

                </navbar-link>
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

<script>
    import NavbarLink from './NavbarLink.vue';
    
    export default {
        components: {
            NavbarLink
        },
        created() {
            this.getThemeSetting();
        },
        computed: {
          publishedPages() {
            return this.pages.filter(p => p.published);
          }
        },
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
            this.storeThemeSetting();
          },
          storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
          },
          getThemeSetting() {
            let theme = localStorage.getItem('theme');

            if (theme) {
                this.theme = theme;
            }
          },
          }
        }
</script>