//JOGO DA FORCA

var dc = ["batman", "superman", "wonder woman", "arlequina", "joker"];
var sorteio = Math.floor(Math.random() * 5);
var dcEscolhido = dc[sorteio];

var palavraSecreta = "";
var tentativa;
var letraCerta = true;
var indiceLetra;
var letraRodada = []
var nome1;
var nome2;
var erro = 0;
var terminou = false;

alert("Welcome to the Hangman Game \nIn this game you'll try to guess which DC Comics character was drawn! \nCan you do it?");
alert("Prepare your brain, the game starts now!");

//escolhido com ?
for (let i = 0; i < dcEscolhido.length; i++) {
    palavraSecreta += "?";
}

//jogo rolando
while (terminou===false) {

    while (letraCerta == true) {
        //confere se o jogo terminou nos erros
        if(terminou) {
            break;
        }

        tentativaCerta()

        //confere se o jogo terminou nas vitórias
        if (palavraSecreta == dcEscolhido) {
            terminou = true;
            alert("YOU ARE A WINNER\n\nYou got the character right and won the game!")
            break;
        }
        
    }

    while (letraCerta == false) {
        tentativaErrada()
    }
    
}

//sempre que acerta
function tentativaCerta() {
    tentativa = prompt(`The secret character has ${dcEscolhido.length} letters: \n\n${palavraSecreta} \n\n Enter a letter: `);
    letraCerta = false

    //conferir se o palpite foi repetido
    if (letraRodada.includes(tentativa)) {
        erro++
        tentativaErrada()
    }

    //ver se a tentativa tem na palavra
    for (let i = 0; i < dcEscolhido.length; i++) {

        if (tentativa == dcEscolhido.charAt(i)) {
            indiceLetra = i;
            letraRodada.push(tentativa)

            nome1 = palavraSecreta.substring(0, indiceLetra)
            nome2 = palavraSecreta.substring(indiceLetra + 1, palavraSecreta.length)
            palavraSecreta = nome1 + tentativa + nome2

            letraCerta = true
        }

    }

    if (letraCerta === false) {
        erro++
    }
}

//sempre que erra
function tentativaErrada() {

    //vê quantos erros tem pra formar o boneco
    switch (erro) {
        case 1:
            alert("Wrong attempt! A part of the dummy appeared.\n\no")
            break;
        case 2:
            alert("Wrong attempt! A part of the dummy appeared.\n\no\n/")
            break;
        case 3:
            alert("Wrong attempt! A part of the dummy appeared.\n\no\n/|")
            break;
        case 4:
            alert("Wrong attempt! A part of the dummy appeared.\n\no\n/|\\\n")
            break;
        case 5:
            alert("Wrong attempt! A part of the dummy appeared.\n\no\n/|\\\n/")
            break;
        case 6:
            alert("Wrong attempt! A part of the dummy appeared.\n\no\n/|\\\n/ \\")
            alert("GAME OVER\n\nYou couldn't get the character right :(")
            terminou = true
            break;
        default:
            break;
    }

    letraCerta = true
}