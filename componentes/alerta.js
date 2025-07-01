export default class Alerta{
    constructor(mensagem, tipo = 'info') {
        this.mensagem = mensagem;
        this.tipo = tipo; // info, success, warning, danger
        this.elemento = null;
    }

    criarAlerta() {
        this.elemento = document.createElement('div');
        this.elemento.className = `w-50 text-center alert alert-${this.tipo}`;
        this.elemento.textContent = this.mensagem;
        this.elemento.style.position = 'absolute';
        this.elemento.style.top = '-100%';
        this.elemento.style.left = '50%';
        this.elemento.style.transform = 'translateX(-50%)';
        document.body.appendChild(this.elemento);
    }

    mostrar() {
        if (!this.elemento) {
            this.criarAlerta();
        }
        this.elemento.style.top = '20px'; // Exibe o alerta

        setTimeout(() => {
            this.elemento.style.top = '-100%';
        }, 3000); // Esconde após 3 segundos
    }
    esconder() {
        if (this.elemento) {
            this.elemento.style.display = 'none';
        }
    }
}