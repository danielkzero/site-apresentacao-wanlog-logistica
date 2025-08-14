const servicoDados = {
  components: {
    "footer-component": FooterComponent,
    "navbar-component": NavbarComponent,
    "cta-component": CTAComponent,
  },
  data() {
    return {
      menus: window.menus,
      servicos: window.servicos,
      toggleMenuMobile: false,
      inputEndereco: "",
      suggestions: [],
      resultado: "",
      enderecosAtendidos: window.enderecosAtendidos,
      enderecosAtendidosRota: window.enderecosAtendidosRota,
      sobrenos: window.sobrenos,
    };
  },

  methods: {
    abrirMenu() {
      this.toggleMenuMobile = true;
      document.body.classList.add("overflow-hidden"); // trava rolagem
    },

    fecharMenu() {
      this.toggleMenuMobile = false;
      document.body.classList.remove("overflow-hidden"); // libera rolagem
    },

    handleInput() {
      const valor = this.inputEndereco.trim().replace("-", "");

      // Se for CEP (apenas números e 8 dígitos)
      if (/^\d{8}$/.test(valor)) {
        console.log("Buscando CEP:", valor);
        this.buscarCep(valor);
      } else if (valor.length >= 3) {
        this.autocompleteEndereco(valor);
      } else {
        this.suggestions = [];
        this.resultado = "";
      }
    },

    buscarCep(cep) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
          const { localidade, uf } = res.data;
          const enderecoCompleto = `${localidade} / ${uf}`;
          this.compararEndereco(enderecoCompleto);
        })
        .catch((err) => {
          this.resultado = "CEP inválido ou não encontrado.";
        });
    },

    autocompleteEndereco(valor) {
      // Simulando autocomplete simples
      this.suggestions = this.enderecosAtendidos.filter((e) =>
        e.toLowerCase().includes(valor.toLowerCase())
      );
    },

    selectSuggestion(sugestao) {
      this.inputEndereco = sugestao;
      this.suggestions = [];
      this.compararEndereco(sugestao);
    },

    compararEndereco(endereco) {
      if (this.enderecosAtendidos.includes(endereco)) {
        this.resultado = "sim";
      } else {
        this.resultado = "não";
      }
    },
  },
  mounted() {
    nextTick(() => {
      const map = L.map("map").setView([-22.5, -44.2], 9);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      this.enderecosAtendidosRota.forEach((cidade) => {
        L.marker([cidade.lat, cidade.lng])
          .addTo(map)
          .bindPopup(`<b>${cidade.nome}</b>`);
      });
    });
  },
};
const { createApp, nextTick } = Vue;
Vue.createApp(servicoDados).mount("#app");
