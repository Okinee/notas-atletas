let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   function compararNumeros(a, b) {
        return a - b;
    }

   function Placar (atletas){
        let soma = 0
        let media = 0
        
        atletas.forEach(function(atleta){
            let notas = atleta.notas.sort(compararNumeros).slice(1,4)
            soma = notas[0]+notas[1]+notas[2]
            media = soma/notas.length

            return  console.log(`Atleta: ${atleta.nome}
        Notas Obtidas: ${atleta.notas}
        Média Válida: ${media}`)
            
        })
   }

    console.log(Placar(atletas))
