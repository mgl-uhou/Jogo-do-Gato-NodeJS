class Palavra {
    constructor(palavra){
        this._palavra = palavra.split('');
        this._quantLetra = this.getPalavra().length;
        this._caracteres = this.defChar();
    }

    getPalavra(){
        return this._palavra.join('');
    }

    getCaracteres(){
        return this._caracteres;
    }

    defChar(){
        let _ = [];
        for(let i = 0; i <= this._quantLetra - 1; i++){
            _.push("_");
        };
        return _;
    }

    setTeste(teste, jogo, vidas){
        let contem = false;
        for(let i = 0; i < this._quantLetra; i++){
            if(teste === this._palavra[i]){
                this._caracteres[i] = teste;
                contem = true;
            }
        }
        if(contem === false){
            console.log('Essa letra não existe na palavra escolhida.');
            vidas.pop();
        }
        if (teste === this.getPalavra() || this._caracteres.join('') === this._palavra.join('')){
            console.log(`Você Ganhou! A palavra é ${this._palavra.join('')}`);
            jogo.setAndamento(false);
        }
        else if(vidas.length == 0){
            console.log(`Você Perdeu! A palavra é ${this._palavra.join('')}`);
            jogo.setAndamento(false);
        }
        return teste !== this.getPalavra() && jogo.getAndamento() === true ? console.log(this.getCaracteres().join(" ") + `\nSuas vidas: ${vidas.join(' ')}`) : true;
    }
};

class Jogo{
    constructor(){
        this.palavras = [];
        this._andamento = true;
    }

    getAndamento(){
        return this._andamento;
    }

    setAndamento(valor){
        this._andamento = valor;
    }
}

module.exports = {Palavra, Jogo};