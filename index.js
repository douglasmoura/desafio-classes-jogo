class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'não tem um ataque definido';
                break;
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso da classe
const heroi1 = new Heroi('Gandalf', 100, 'Mago');
heroi1.atacar(); // O mago atacou usando magia.

const heroi2 = new Heroi('Aragorn', 50, 'Guerreiro');
heroi2.atacar(); // O guerreiro atacou usando espada.

const heroi3 = new Heroi('Liu Kang', 35, 'Monge');
heroi3.atacar(); // O monge atacou usando artes marciais.

const heroi4 = new Heroi('Naruto', 18, 'Ninja');
heroi4.atacar(); // O ninja atacou usando shuriken.
