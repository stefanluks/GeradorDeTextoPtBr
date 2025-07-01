import PALAVRAS from './componentes/palavras.js';
import Alerta from './componentes/alerta.js';

window.onload = () => {
    let texto = PALAVRAS.getText(3);
    const btnGerar = document.getElementById('btnGerar');
    const btnCopiar = document.getElementById('btnCopiar');
    btnCopiar.hidden = true;
    const btnClear = document.getElementById('btnClear');
    btnClear.hidden = true;
    const inputNumParagrafos = document.getElementById('inputNumParagrafos');
    const inputNumPalavras = document.getElementById('inputNumPalavras');
    const resultado = document.getElementById('resultado');

    btnGerar.addEventListener('click', () => {
        let numPragrafos = parseInt(inputNumParagrafos.value);
        let numPalavras = parseInt(inputNumPalavras.value);
        texto = PALAVRAS.getText(numPragrafos, numPalavras);
        resultado.value = texto;
        btnCopiar.hidden = false;
        let alerta = new Alerta('Texto gerado com sucesso!', 'success');
        alerta.mostrar();
    });

    btnCopiar.addEventListener('click', () => {
        resultado.select();
        document.execCommand('copy');
        let alerta = new Alerta('Texto copiado para a área de transferência!', 'info');
        alerta.mostrar();
        
    });
    
    btnClear.addEventListener('click', () => {
        resultado.value = '';
        btnCopiar.hidden = true;
        let alerta = new Alerta('Texto limpo!', 'warning');
        alerta.mostrar();
    });

}