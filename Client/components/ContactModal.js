class ContactModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <dialog
        id="contact-dialog"
        aria-labelledby="contact-dialog-title"
        class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
      >
        <!-- Backdrop -->
        <el-dialog-backdrop
          class="fixed inset-0 bg-bg_deep/70 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200"
        ></el-dialog-backdrop>

        <!-- Wrapper -->
        <div
          tabindex="0"
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 focus:outline-none"
        >
          <!-- Panel -->
          <el-dialog-panel
            class="relative w-full transform overflow-hidden rounded-2xl bg-card_bg text-left shadow-xl outline outline-1 outline-white/10 transition-all data-closed:translate-y-6 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:max-w-md data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <!-- Header -->
            <div class="px-6 pt-6 pb-4 text-center">
              <div class="flex justify-end">
                <button
                  type="button"
                  command="close"
                  commandfor="contact-dialog"
                  class="text-gray-500 hover:text-white transition-colors flex justify-end"
                >
                  <i class="material-symbols-outlined">close</i>
                </button>
              </div>

              <div
                class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <span class="material-symbols-outlined text-3xl">mail</span>
              </div>

              <h2
                id="contact-dialog-title"
                class="font-display text-2xl font-bold text-white"
              >
                ¡Escríbenos!
              </h2>

              <p class="mt-2 text-sm text-gray-400">
                Cuéntanos cómo podemos ayudarte.
              </p>
            </div>

            <!-- Form -->
            <form class="px-6 pb-6 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-300">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Juan Pérez"
                  class="mt-1 w-full rounded-lg bg-bg_deep border border-white/10 px-4 py-2 focus:border-primary focus:ring-0 outline-none transition"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  class="mt-1 w-full rounded-lg bg-bg_deep border border-white/10 px-4 py-2 focus:border-primary focus:ring-0 outline-none transition"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  class="mt-1 w-full resize-none rounded-lg bg-bg_deep border border-white/10 px-4 py-2 focus:border-primary focus:ring-0 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn-primary w-full py-3 rounded-full font-bold mt-2"
              >
                Enviar mensaje
              </button>
            </form>
          </el-dialog-panel>
        </div>
      </dialog>
    `;
  }
}
customElements.define("contact-modal", ContactModal);
