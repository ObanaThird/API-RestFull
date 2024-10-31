export default{
    template: `
    <div>
        <h2>ViaCEP</h2>
        
            <input type="text" v-model="ccep" />
            <button v-on:click="buscaCEP">Verificar</button>
            <h3>{{ ccep.cep }}</h3>
            <p><strong>UF:</strong> {{ ccep.uf }}</p>
            <p><strong>Estado:</strong> {{ ccep.estado }}</p>
            <p><strong>Cidade:</strong> {{ ccep.localidade }}</p>
            <p><strong>Nome da rua:</strong> {{ ccep.logradouro }}</p>
            <p><strong>Região:</strong> {{ ccep.regiao }}</p>
            <p><strong>DDD:</strong> {{ ccep.ddd }}</p>
        
    </div>`,
    data() {
        return{
 
            ccep: "",
        };
    },
    methods: {

        async buscaCEP() {
            try{
                const response = await fetch(`https://viacep.com.br/ws/${this.ccep}/json/`);
                this.ccep = await response.json();
                console.log(this.ccep)
            } catch (error) {
                console.error("Erro ao buscar o CEP");
            }
        },
    },

    mounted() {
        this.buscaCEP();
    },
};