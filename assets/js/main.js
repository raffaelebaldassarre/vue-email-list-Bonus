// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato



let app = new Vue ({
    el: "#app",
    data : {
      colonna : 0,
      griglia : 0,
      numberRandom : "",
      column : [
        {
          section : [
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            }
          ]
        },
        {
          section : [
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            }
          ]
        },
        {
          section : [
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            }
          ]
        },
        {
          section : [
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            }
          ]
        },
        {
          section : [
            {
              number : [
                
              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            }
          ]
        },
        {
          section : [
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            },
            {
              number : [

              ]
            }
          ]
        },
      ],
    },
    methods : {
      selectGriglia(counter,index){
        this.griglia = counter;
        this.colonna = index;
        this.randomNumber();
        //console.log(this.numberRandom);
        this.column[this.colonna].section[this.griglia].number.pop();
        this.column[this.colonna].section[this.griglia].number.push(this.numberRandom);
        //console.log(this.column[this.colonna].section[this.griglia].number);
      },
      randomNumber(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then(response => {
          let randomNumber = response.data.response;
          this.numberRandom = randomNumber;  
        })
      }
    },
    mounted (){
      this.randomNumber();
    }
});