new Vue({
    el: '#desafio',
    data: {
      nome: 'Thauanny',
      idade: 21,
      imagem: 'https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg'
    },
    methods:{
        numerosAleatorios(){
            return Math.random();
        }
    }

})