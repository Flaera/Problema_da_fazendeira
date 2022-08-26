//Autômato do problema do fazendeiro utilizando
//padrão de Estado (State Pattern)


//fazendeiro é a interface que orquestra as mudanças de estado.
var fazendeiro = function(){
    var contador = 0;
    var estadoAtual = new LCaCo(this);

    this.embarcar = function(state) {
        //if(contador++ >=2) return;
        estadoAtual = state;
        estadoAtual.atravessar();
    };

    this.iniciar = function() {
        estadoAtual.atravessar();
    }
};

//Daqui em diante são apenas as mudanças de estado!

var LCaCo = function(animal) {
    this.animal = animal;

    this.atravessar = function(){
        console.log("A cabra irá para margem 2");
        console.log("O fazendeiro volta para a margem 1");
        this.animal.embarcar(new LCo(animal));
    }
};

var LCo = function(animal) {
    this.animal = animal;

    this.atravessar = function(){
        console.log("A couve irá para a margem 2");
        console.log("O fazendeiro volta para a margem 1");
        animal.embarcar(new LCa(animal));
    }
};

var LCa = function(animal) {
    this.animal = animal;

    this.atravessar = function(){
        console.log("O fazendeiro leva a cabra da margem 2 para 1");
        console.log("A cabra e o lobo estão na margem 1");
        console.log("O fazendeiro leva o lobo para a margem 2");
        console.log("O fazendeiro volta para a margem 1");
        animal.embarcar(new Ca(animal));
    }
};

var Ca = function(animal) {
    this.animal = animal;

    this.atravessar = function(){
        console.log("O fazendeiro leva a cabra para a margem 2");
        //animal.embarcar(new Vazio());
        return
    }
};

var Vazio = function() {
    console.log("Todos os bichos estão na margem 2");
    return;
};


//Esta é somente a função que inicia o automato.
function run(){
    var travessia = new fazendeiro();
    travessia.iniciar();
    var vazio = new Vazio();
};