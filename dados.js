var menus = [
  {
    nome: "Home",
    link: "/",
  },
  {
    nome: "Serviços",
    link: "servicos.html",
  },
  {
    nome: "Sobre Nós",
    link: "sobre.html",
  },
  {
    nome: "Contato",
    link: "contato.html",
  },
];

var enderecosAtendidos = [
  "Barra Mansa / RJ",
  "Volta Redonda / RJ",
  "Resende / RJ",
  "Itaguaí / RJ",
  "Mangaratiba / RJ",
  "Angra dos Reis / RJ",
  "Paraty / RJ",
  "Resende / RJ",
  "Barra do Piraí / RJ",
  "Rio Claro / RJ",
  "Cunha / SP",
  "Piraí / RJ",
  "Porto Real / RJ",
  "Quatis / RJ",
  "Valença / RJ",
  "Vassouras / RJ",
  "Três Rios / RJ",
  "Bananal / SP",
];
var enderecosAtendidosRota = [
  { nome: "Barra Mansa / RJ", lat: -22.545, lng: -44.172 },
  { nome: "Volta Redonda / RJ", lat: -22.523, lng: -44.104 },
  { nome: "Resende / RJ", lat: -22.472, lng: -44.452 },
  { nome: "Itaguaí / RJ", lat: -22.895, lng: -43.743 },
  { nome: "Mangaratiba / RJ", lat: -23.002, lng: -44.352 },
  { nome: "Angra dos Reis / RJ", lat: -23.005, lng: -44.318 },
  { nome: "Paraty / RJ", lat: -23.221, lng: -44.716 },
  { nome: "Barra do Piraí / RJ", lat: -22.468, lng: -43.842 },
  { nome: "Rio Claro / RJ", lat: -23.0, lng: -44.32 },
  { nome: "Cunha / SP", lat: -23.056, lng: -44.973 },
  { nome: "Piraí / RJ", lat: -22.653, lng: -43.854 },
  { nome: "Porto Real / RJ", lat: -22.5, lng: -44.382 },
  { nome: "Quatis / RJ", lat: -22.44, lng: -44.2 },
  { nome: "Valença / RJ", lat: -22.249, lng: -44.625 },
  { nome: "Vassouras / RJ", lat: -22.414, lng: -43.71 },
  { nome: "Três Rios / RJ", lat: -22.175, lng: -43.231 },
  { nome: "Bananal / SP", lat: -22.7, lng: -44.45 },
];
var servicos = [
  {
    nome: "Onde estamos?",
    descricao: "Estamos situados no município de Barra Mansa/RJ",
    icone: "bxs-location-alt",
    link: "contato.html",
    linkTexto: "Saiba mais",
  },
  {
    nome: "Área de Atuação",
    descricao: "Está com dúvidas? Confira as cidades que atuamos.",
    icone: "bxs-truck",
    link: "area-de-atuacao.html",
    linkTexto: "Ver cidades",
  },
  {
    nome: "Faça uma Cotação",
    descricao: "Deixe conosco! Confira as melhores condições de entrega",
    icone: "bxs-package",
    link: "fazer-cotacao.html",
    linkTexto: "Solicitar cotação",
  },
];

var sobrenos = [
  {
    titulo: "Um pouco sobre nós",
    descricao:
      "Somos do interior do estado do Rio de Janeiro, com base estratégica situada nas margens da Rodovia Presidente Dutra.",
    imagem: "assets/img/atuacao.png",
    subItens: [
      {
        icone: "bxs-directions",
        titulo: "Nosso objetivo",
        descricao:
          "É ajudar as empresas da nossa região (Sul Fluminense e Costa Verde/RJ) nas suas entregas.",
      },
      {
        icone: "bxs-flag-alt-3",
        titulo: "Missão",
        descricao:
          "Ser exemplo de atendimento e compromisso com a sua carga da coleta ao destino.",
      },
      {
        icone: "bxs-heart",
        titulo: "Valores",
        descricao: "Qualidade, eficiência, praticidade e compromisso.",
      },
    ],
  },
];

const NavbarComponent = {
  props: {
    menus: {
      type: Array,
      required: true,
    },
    titulo: {
      type: String,
      default: "",
    },
    subtitulo: {
      type: String,
      default: "",
    },
    menuativo: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      toggleMenuMobile: false,
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
  },
  template: `
            <!-- Section para hero -->
            <div class="bg-[url('./assets/img/1.png')] bg-cover bg-center h-[402px]">
                <div class="absolute z-10  h-[402px] min-w-full bg-blue-900 opacity-50">
                </div>
                <!-- navbar horizontal com o menu do site -->
                <nav>
                    <div class="max-w-[1320px] mx-auto px-4 py-4 flex justify-between items-center z-40 relative">
                        <div class="flex items center">
                            <img src="assets/img/wanlog.png" alt="Wanlog Logo" class="h-10 mr-3">
                        </div>                        

                        <!-- menu superior em navbar -->
                        <div class="hidden md:flex space-x-6 items-center">
                            <a v-for="menu in menus" :href="menu.link"
                                class="text-gray-200 transition-opacity opacity-75 hover:opacity-100"
                                :class=" { 'active' : menu.nome == menuativo }">{{ menu.nome }}</a>
                            <a href="tel:2435120529"
                                class="inline-flex items-center gap-2 rounded-xl px-5 py-2 bg-blue-600 text-white font-semibold shadow hover:shadow-md hover:bg-blue-700 transition-transform hover:scale-105">
                                Atendimento <i class='bx bxs-phone text-lg'></i>
                            </a>
                        </div>

                        <!-- menu mobile -->
                        <div class="md:hidden">

                            <!-- botão toggle para menu sidebar -->
                            <button class="text-gray-100 hover:text-blue-500 focus:outline-none" type="button"
                                v-on:click="abrirMenu">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>

                            <!-- menu sidebar para utilizar via toggle -->
                            <aside id="default-sidebar"
                                class="fixed top-0 left-0 z-40 w-64 h-screen transform transition shadow-lg"
                                aria-label="Sidebar"
                                v-bind:class="{'translate-x-0': toggleMenuMobile, '-translate-x-full': !toggleMenuMobile}">

                                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800 text-gray-200">
                                    <img src="assets/img/wanlog.png" alt="Wanlog Logo" class="h-10 mr-3 mb-5">
                                    <ul class="space-y-2 font-medium">
                                        <li v-for="menu in menus" v-bind:key="menu.nome">
                                            <a v-bind:href="menu.link"
                                                class="flex items-center p-2 text-gray-200 hover:bg-blue-500 hover:text-white rounded-lg">
                                                {{ menu.nome }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>                            
                        </div>
                    </div>

                    <!-- painel para fechamento de menu ao clicar fora da tela -->
                    <div class="absolute left-0 top-0 z-20 w-full min-h-full bg-black opacity-50" v-on:click="fecharMenu"
                        v-bind:class="{'hidden': !toggleMenuMobile}" style="height: 100%;">
                    </div>
                </nav>

                <!-- Área oara consulta de frete e destino -->
                <div class="max-w-[1320px] mx-auto py-8 z-10 relative">
                    <div class="rounded-lg p-6 md:w-[650px] text-center m-auto">
                        <h2 class="text-6xl font-bold mb-4 text-white">
                            {{ titulo }}
                        </h2>
                        <p class="text-lg text-gray-200 mb-6">
                            {{ subtitulo }}
                        </p>
                    </div>
                </div>
            </div>
    `,
};

const FooterComponent = {
  template: `
        <footer id="footer" class="bg-gray-900 text-gray-300 py-10">
            <div class="max-w-[1320px] mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-y-8">

                    <!-- Sobre Nós -->
                    <div class="col-span-12 md:col-span-5 space-y-4">
                        <a href="index.html" class="flex items-center text-2xl font-bold">
                            <span>Sobre-nós</span>
                        </a>
                        <p>
                            A WANLOG nasceu com o objetivo de atender as necessidades das empresas da região Sul
                            Fluminense e Costa Verde/RJ.
                            Dedicação, trabalho duro e experiência foram os ingredientes para o seu surgimento, que vem
                            com bagagem superior de
                            10 anos de experiência e vivência no transporte de seu fundador Wander da Silva Rodrigues.
                        </p>
                        <div class="flex space-x-4 mt-4 text-2xl">
                            <a href="http://www.twitter.com/wanlog" class="hover:text-blue-500">
                                <i class='bxl bx-twitter'></i>
                            </a>
                            <a href="http://www.facebook.com/wanlog" class="hover:text-blue-700">
                                <i class='bxl bx-facebook'></i>
                            </a>
                            <a href="http://www.instagram.com/wanlog" class="hover:text-pink-500">
                                <i class='bxl bx-instagram'></i>
                            </a>
                            <a href="http://www.linkedin.com/wanlog" class="hover:text-blue-600">
                                <i class='bxl bx-linkedin'></i>
                            </a>
                        </div>
                    </div>

                    <!-- Mais usados -->
                    <div class="md:col-span-2 col-span-12">
                        <h4 class="text-lg font-semibold mb-2">Mais usados</h4>
                        <ul class="space-y-1">
                            <li><a href="/" class="hover:text-blue-500">Início</a></li>
                            <li><a href="sobre.html" class="hover:text-blue-500">Sobre</a></li>
                            <li><a href="servicos.html" class="hover:text-blue-500">Serviços</a></li>
                            <li><a href="contato.html" class="hover:text-blue-500">Contato</a></li>
                            <li><a href="politica-de-privacidade.html" class="hover:text-blue-500">Política de
                                    privacidade</a></li>
                        </ul>
                    </div>

                    <!-- Outros -->
                    <div class="md:col-span-2 col-span-12">
                        <h4 class="text-lg font-semibold mb-2">Outros</h4>
                        <ul class="space-y-1">
                            <li><a href="area-de-atuacao.html" class="hover:text-blue-500">Área de atuação</a></li>
                            <li><a href="agendar-coleta.html" class="hover:text-blue-500">Agendar coleta</a></li>
                            <li><a href="fazer-cotacao.html" class="hover:text-blue-500">Fazer cotação</a></li>
                        </ul>
                    </div>

                    <!-- Contato -->
                    <div class="md:col-span-3 col-span-12 text-center md:text-left space-y-2">
                        <h4 class="text-lg font-semibold mb-2">Contate-nos</h4>
                        <p class="text-sm">
                            Rodovia Presidente Dutra, 200 <br>
                            Boa Sorte, Barra Mansa - 27355-640<br>
                            Rio de Janeiro - Brasil <br><br>
                            <strong>Telefone:</strong> +55 24 3512 0529<br>
                            <strong>E-mail:</strong> atendimento@wanlog.com.br<br>
                        </p>
                    </div>

                </div>
            </div>

            <!-- Copyright -->
            <div
                class="max-w-[1320px] mx-auto px-4 mt-8 text-center space-y-2 text-sm text-gray-400">
                <!-- copyright wanlog -->
                <div>&copy; 2023 <strong>Wanlog</strong>. Todos os direitos reservados.</div>

                <!-- agência criadora do site wanlog -->
                <div class="mx-auto">
                    <div class="flex items-center justify-center space-x-4">

                        <!-- Logo -->
                        <div class="flex-shrink-0">
                            <a href="https://hydradigital.com.br" target="_blank" class="no-underline">
                                <img src="/assets/img/logo-hydra.20ca10f7.png" alt="Hydra Digital" class="h-16">
                            </a>
                        </div>

                        <!-- Texto -->
                        <div>
                            <a href="https://hydradigital.com.br" target="_blank"
                                class="no-underline text-gray-500 text-sm">
                                Desenvolvido por<br>
                                <strong>Hydra Digital</strong><br>
                                Daniel Ramos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `,
};

const CTAComponent = {
    template: `
        <!-- CTA -->
        <section class="max-w-[1320px] mx-auto my-16 px-4 md:px-0">
            <div
                class="rounded-3xl bg-white/70 backdrop-blur-md border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                
                <!-- Texto -->
                <div>
                    <h3 class="text-xl md:text-2xl font-bold">Precisa de uma cotação de frete rápida?</h3>
                    <p class="mt-1 text-gray-600">
                        Solicite agora mesmo e receba as melhores opções de transporte e logística para sua carga.
                    </p>
                </div>

                <!-- Botões -->
                <div class="flex flex-wrap gap-3">
                    <a href="tel:+552435120529"
                        class="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-blue-600 text-white font-semibold shadow hover:shadow-md hover:bg-blue-700 transition-transform hover:scale-105">
                        <i class="bx bxs-phone-call text-lg"></i> Ligar agora
                    </a>
                    <a href="fazer-cotacao.html"
                        class="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white dark:bg-white border border-gray-200 font-semibold shadow hover:shadow-md transition-transform hover:scale-105">
                        <i class="bx bx-file-find text-lg"></i> Solicitar cotação
                    </a>
                </div>
            </div>
        </section>
    `,
};
