import Pokemon from './apis/pokemon.js';
import Viacep from './apis/viacep.js';

const app = Vue.createApp({
    components: {
        Pokemon,
        Viacep
    },
    template: `
    <div>
        <Pokemon />
        <Viacep />
    </div>`,
});

app.mount('#app');