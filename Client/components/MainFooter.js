class MainFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div class="flex items-center gap-3">
          <div
            class="h-8 w-8 rounded bg-primary flex items-center justify-center text-bg_deep font-bold"
          >
            BV
          </div>
          <span class="font-display font-bold text-lg text-white"
            >BitValue Coin</span
          >
        </div>
        <div class="flex gap-6">
          <a class="text-gray-500 hover:text-primary transition-colors" href="#"
            ><i class="material-symbols-outlined">photo_camera</i></a
          >
          <a
            class="text-gray-500 hover:text-accent_purple transition-colors"
            href="#"
            ><i class="material-symbols-outlined">public</i></a
          >
          <a class="text-gray-500 hover:text-white transition-colors" href="#"
            ><i class="material-symbols-outlined">close</i></a
          >
        </div>
      </div>
      <div
        class="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-600"
      >
        © 2026 BitValue Coin. Todos los derechos reservados.
      </div>
    `;
  }
}
customElements.define("main-footer", MainFooter);
