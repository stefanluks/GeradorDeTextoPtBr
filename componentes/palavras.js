const TEXTO = `
O PEQUENO PRÍNCIPE
O livro começa com o narrador, um piloto de avião, relembrando sua infância. 
Aos seis anos, ele desenhou uma jiboia engolindo um elefante. 
Quando mostrou o desenho aos adultos, todos disseram que era um chapéu. 
Desiludido, ele abandonou a arte e tornou-se aviador. Durante um voo, seu avião sofreu uma pane e caiu no deserto do Saara. 
No deserto, encontrou um menino loiro, vestido como príncipe. O menino pediu que o piloto desenhasse um carneiro. 
O piloto desenhou várias versões, até que o príncipe aprovou uma caixa com furos, dizendo que o carneiro estava lá dentro. 
O príncipe revelou que vinha do asteroide B-612, onde havia uma rosa que ele amava. Ele partiu de seu planeta porque sentia que não compreendia sua rosa. Em sua jornada, visitou vários planetas habitados por adultos com comportamentos peculiares. No planeta do rei, encontrou um monarca que acreditava governar tudo. No planeta do vaidoso, encontrou alguém que só queria ser admirado. No planeta do bêbado, encontrou um homem que bebia para esquecer a vergonha de beber. No planeta do homem de negócios, encontrou alguém que contava estrelas. No planeta do acendedor de lampiões, encontrou um homem que seguia ordens sem questionar. No planeta do geógrafo, encontrou um homem que registrava o mundo sem realmente vivê-lo. Cada adulto representava um vício ou comportamento humano. O príncipe aprendeu que os adultos muitas vezes se perdem em coisas sem importância. Na Terra, conheceu uma raposa que lhe ensinou sobre amizade e amor. A raposa disse que "tu te tornas eternamente responsável por aquilo que cativas". O príncipe entendeu que sua rosa era única porque ele a havia cativado. Ele aprendeu que o essencial é invisível aos olhos. O príncipe também encontrou um vendedor de pílulas que aplacavam a sede. O vendedor representava a busca incessante por soluções rápidas. O príncipe percebeu que as coisas simples e naturais são mais valiosas. Ele decidiu que queria voltar ao seu planeta e cuidar de sua rosa. O príncipe encontrou uma serpente que prometeu levá-lo de volta. Ele foi picado pela serpente e seu corpo caiu no deserto. O narrador encontrou o corpo do príncipe, mas não sabia onde ele estava. O príncipe pediu ao narrador que, se o encontrasse, avisasse que ele estava bem. O livro termina com o narrador pedindo ajuda aos leitores para encontrar o príncipe
1. O escritor Saint-Exupéry tinha muito em comum com o aviador do livro
Apesar de hoje ser conhecido como o escritor de O Pequeno Príncipe, antes da Segunda Guerra Mundial Antoine de Saint-Exupéry era um famoso aviador, vindo de uma família da aristocracia francesa. Ele foi piloto de testes e ajudou a implantar rotas de correio na África e na América do Sul. 
Saint Exupéry se inspirou em uma experiência própria para descrever no livro a queda do aviador no deserto do Saara. Em 1935, durante uma tentativa de quebrar o recorde da viagem mais rápida entre Paris e Saigon, ele caiu com seu avião no deserto a 200km de distância de Cairo, no Egito. O aviador e seu copiloto sobreviveram e passaram 4 dias perdidos no deserto, até serem encontrados por um integrante de um povo local que salvou suas vidas.
2. Saint-Exupéry também fez as ilustrações de O Pequeno Príncipe
Foi o próprio Saint-Exupéry quem pintou as ilustrações da história, feitas em aquarela. Ele não se considerava um “artista”, e inclusive desistiu dos estudos em arquitetura na juventude, mas sempre desenhava pessoas em pedaços de papel.
3. O Pequeno Príncipe foi escrito nos Estados Unidos
Saint-Exupéry foi piloto da Força Aérea Francesa durante a Segunda Guerra Mundial até o armistício entre a França e a Alemanha em 1940, que resultou na desmobilização das forças francesas. Com as mudanças políticas, recusou-se a juntar-se à Royal Air Force e se exilou nos Estados Unidos, onde tentou fazer com que o governo entrasse na guerra contra a Alemanha. 
Publicado pela primeira vez em 1943, O Pequeno Príncipe foi lançado em francês e inglês, mas apenas nos Estados Unidos. Devido às visões políticas o autor, sua obra só foi disponibilizada em sua terra natal após a libertação da França ao final da Guerra.
4.O autor de O Pequeno Príncipe já visitou o Brasil
Apesar da vida curta, o escritor de “O Pequeno Príncipe” já visitou o Brasil. No ano de 1927, ele passou diversas vezes por Florianópolis (SC), mais precisamente pelo bairro do Campeche, onde funcionava um campo de pouso administrado por franceses. Os aviões de carga que iam da Europa a Buenos Aires costumavam parar em Campeche para abastecer. Antoine era um dos pilotos que faziam a rota. Quando estava em solo tupiniquim, gostava de pescar e costumava frequentar os bailes do Lira Tênis Clube. Ganhou até um apelido: “Zé Perri”.
5. O nome da primeira lua de asteroide descoberta
A primeira lua de asteroide descoberta com a ajuda de um telescópio terrestre foi batizada de Petit-Prince. Avistada pela primeira vez em 1993, a lua tem 13 quilômetros de diâmetro, e gravita em torno do asteróide 45-Eugênia, de 214 quilômetros de diâmetro.

`;

class Palavras {
    constructor() {
        this.splited = [];
    }

    addWord(word) {
        if (word && !this.splited.includes(word)) {
            this.splited.push(word);
        }
    }

    getText(numPragrafos = 1, numPalavras = 100) {
        let texto = "";
        for (let i = 0; i < numPragrafos; i++) {
            let paragrafo = [];
            for (let j = 0; j < numPalavras; j++) {
                let palavraAleatoria = this.splited[Math.floor(Math.random() * this.splited.length)];
                paragrafo.push(palavraAleatoria);
            }
            texto += paragrafo.join(" ") + "\n\n";
        }
        return texto.trim();
    }
}

const PALAVRAS = new Palavras();

let splited = TEXTO.split("\n").forEach(linha => {
    linha.split(" ").forEach(palavra => {
        palavra = palavra.trim().toLowerCase();
        if (palavra) {
            PALAVRAS.addWord(palavra);
        }
    });
});



export default PALAVRAS;
