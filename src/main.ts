import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp({    
    data() {
        return {
            links: [
                {text: 'Home', url: 'home.html'},
                {text: 'About', url: 'about.html'},
                {text: 'Contact', url: 'contact.html'},
            ]
        }
}}).mount('nav'),
createApp(App).mount('#app');