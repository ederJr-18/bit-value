class MainHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initLogic();
  }

  render() {
    this.innerHTML = `
      <nav class="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <div class="flex-shrink-0 flex items-center gap-3">
              <div class="h-16 w-16 rounded-full bg-card_bg border border-primary/30 flex items-center justify-center overflow-hidden">
                <img src="../images/bit_value.png" alt="Logo BitValue" class="w-full h-full object-cover" />
              </div>
              <span class="font-display text-xl font-bold tracking-widest text-white uppercase">
                <a href="index.html">Bit<span class="text-primary">Value</span></a>
              </span>
            </div>

            <div class="hidden md:flex items-center space-x-10">
              <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="index.html">Inicio</a>
              <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="nosotros.html">Nosotros</a>
              <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#servicios">Servicios</a>
              <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="blog.html">Blog</a>
            </div>

            <div class="flex items-center gap-4">
              <button id="desktop-contact-btn" class="btn-primary px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2">
                <span class="material-symbols-outlined text-lg">account_balance_wallet</span>
                Contáctanos
              </button>

              <!-- Menú Hamburguesa (Solo Móvil) -->
              <button id="mobile-menu-open" class="md:hidden text-white hover:text-primary transition-colors focus:outline-none">
                <span class="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Menú Móvil -->
        <div id="mobile-menu" class="fixed inset-x-0 top-0 z-[60] bg-card_bg text-gray-200 shadow-2xl -translate-y-full transition-transform duration-500 ease-in-out md:hidden flex flex-col h-auto max-h-[90vh] overflow-y-auto border-b border-primary/20">
          <nav class="flex flex-col w-full divide-y divide-white/5">
            <a class="flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors group border-t border-white/5" href="index.html">
              <span class="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">home</span>
              <span class="text-sm font-bold tracking-wider uppercase">Inicio</span>
            </a>
            <a class="flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors group" href="nosotros.html">
              <span class="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">groups</span>
              <span class="text-sm font-bold tracking-wider uppercase">Nosotros</span>
            </a>
            <a class="flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors group" href="index.html#servicios">
              <span class="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">grid_view</span>
              <span class="text-sm font-bold tracking-wider uppercase">Servicios</span>
            </a>
            <a class="flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors group" href="blog.html">
              <span class="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">news</span>
              <span class="text-sm font-bold tracking-wider uppercase">Blog</span>
            </a>
            <a id="mobile-contact-trigger" class="flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors group" href="#">
              <span class="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">mail</span>
              <span class="text-sm font-bold tracking-wider uppercase">Contáctanos</span>
            </a>
          </nav>

          <div class="p-4 flex justify-end bg-white/5">
            <button id="mobile-menu-close" class="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors font-bold text-xs uppercase">
              <span class="material-symbols-outlined text-xl">close</span>
              Cerrar
            </button>
          </div>
        </div>
      </nav>
    `;
  }

  initLogic() {
    const mobileMenuOpen = this.querySelector("#mobile-menu-open");
    const mobileMenuClose = this.querySelector("#mobile-menu-close");
    const mobileMenu = this.querySelector("#mobile-menu");
    const mobileContactTrigger = this.querySelector("#mobile-contact-trigger");
    const desktopContactBtn = this.querySelector("#desktop-contact-btn");
    const mobileLinks = this.querySelectorAll(
      "nav a:not(#mobile-contact-trigger)",
    );

    const toggleMenu = (show) => {
      if (show) {
        mobileMenu.classList.remove("-translate-y-full");
      } else {
        mobileMenu.classList.add("-translate-y-full");
      }
    };

    const openContactModal = () => {
      // Intenta buscar por ID estándar (HTML actual) o el mencionado por el usuario
      const dialog =
        document.getElementById("contact-dialog") ||
        document.getElementById("modal_container");

      if (dialog) {
        // Soporte para <dialog> nativo o div con clase
        if (
          dialog.tagName === "DIALOG" &&
          typeof dialog.showModal === "function"
        ) {
          dialog.showModal();
        } else {
          // Fallback para implementación con clases (como en modelo.js original)
          dialog.classList.add("show");
          // Si es un dialog pero no está abierto
          if (dialog.tagName === "DIALOG" && !dialog.open) {
            dialog.setAttribute("open", "");
          }
        }
      } else {
        console.warn("Contact modal not found");
      }
    };

    if (mobileMenuOpen) {
      mobileMenuOpen.addEventListener("click", () => toggleMenu(true));
    }

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", () => toggleMenu(false));
    }

    if (mobileContactTrigger) {
      mobileContactTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu(false);
        openContactModal();
      });
    }

    if (desktopContactBtn) {
      desktopContactBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openContactModal();
      });
    }

    // Cerrar menú al hacer click en enlaces
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });
  }
}

customElements.define("main-header", MainHeader);
