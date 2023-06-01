console.log("ESERCITAZIONE D4")
console.log("")

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.. */

const area = function(width, height)
{
    return width * height
}

console.log("Un rettangolo con base", 5, "ed altezza", 3, "ha come area", area(5,3))


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre. */

const crazySum = function(n1, n2){
    if(n1 === n2)
        return (n1 + n2) * 3
    return n1 + n2
}

console.log("Somma di due numeri diversi:", crazySum(3, 7))
console.log("Somma di due numeri uguali", crazySum(5, 5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.*/

const crazyDiff = function(n){
    if(n > 19)
        return (n -19) * 3
    return 19 - 1
}

console.log("Somma assoluta > 19", crazyDiff(22))
console.log("Somma assoluta < 19", crazyDiff(5))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.*/

const boundary = function(n){
    if( (10 <= n && n >= 100) || n === 400 )
        return true
    return false
}

console.log("Il risultato della funzione è", boundary(400))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.*/

const epify = function(initialString){
    if(initialString.substring(0, 7).toLowerCase() === "epicode")
        return initialString
    return "EPICODE" + initialString
}

console.log("Questa stringa è epica:", epify("EPICODEepico"))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo) */

 const check3and7 = function(n){
    if (n < 0)
        return false
    else if(n % 3 === 0 || n % 7 === 0)
        return true
    return false
 }

 console.log("chek3and7", check3and7(-6))


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")*/

const reverseString = function(initialString){
    let reversed = ""
    for (let i = initialString.length - 1; i > -1; i--)
        reversed += initialString[i]
    return reversed
} 

console.log("EPICODE -", reverseString("EPICODE"))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function(initialString){
    let newString = initialString[0]
    for(let i = 1; i < initialString.length; i++)
        if (initialString[i] === " ")
        {
            newString += " " + initialString[i +1].toUpperCase()
            i++
        }
        else
            newString += initialString[i]
    return newString
}

console.log(upperFirst("ciao sono alessio"))


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.*/

const cutString = function(initialString)
{
    return initialString.slice(1, -1)
}

console.log("Casa -", cutString("Casa"))


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function(n){
    const numbers = []
    for(let i = 0; i < n; i++)
        numbers.push(Math.round(Math.random() * (10 - 1) +1) )
    return numbers
}

console.log(giveMeRandom(15))


console.log("")
console.log("EXTRA")
console.log("")

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5. */

const checkArray = function(initialArray){
    const consoleArray = []
    let sum = 0
    for(let i = 0; i < initialArray.length; i++)
        if (initialArray[i] > 5)
        {
            consoleArray.push(initialArray[i])
            sum += initialArray[i]
        }
    console.log(consoleArray)
    return sum
}

console.log("Somma dei valori qui sopra",checkArray(giveMeRandom(10)))


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).*/

 const shoppingCartTotal = function(cart){
    let total = 0
    for(let i = 0; i < cart.length; i++)
        total += cart[i].price * cart[i].quantity
    return total
 }

 const shoppingCart = 
 [
    {
        price: 100,
        name: "Nes",
        id: "n3s",
        quantity: 5,
    },
    {
        price: 200,
        name: "Super Nintendo",
        id: "sup3r n1nt3nd0",
        quantity: 1,
    },
    {
        price: 300,
        name: "Nintendo 64",
        id: "n1nt3nd0",
        quantity: 10,
    },
    {
        price: 400,
        name: "Gamecube",
        id: "G4m3cub3",
        quantity: 1,
    },
]

console.log("Il totale è di", shoppingCartTotal(shoppingCart))


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.*/

const checkProductId = function(product){
    for(let i = 0; i < shoppingCart.length; i++)
        if(shoppingCart[i].id === product.id)
            return i
    return -1
}

 const addToShoppingCart = function(product){
    let exist = checkProductId(product)
    console.log(exist)
    if(exist > -1)                          //Se esiste, aggiorno la quantità
        shoppingCart[exist].quantity += product.quantity   
    else                                    //Altrimenti ne aggiungo uno nuovo
        shoppingCart.push({
            price: product.price,
            name: product.name,
            id: product.id,
            quantity: product.quantity > 1? product.quantity : 1 
        })
    return shoppingCart
 }

 console.log(addToShoppingCart({price: 100, name:"Nes", id:"n3s", quantity:2}))
 console.log(addToShoppingCart({price: 500, name:"Wii", id:"w11", quantity:2}))


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto. */

 const maxShoppingCart = function(shoppingCart){
    let maxValue = 0
    let maxIndex = null
    for(let i = 0; i < shoppingCart.length; i++){
        if(shoppingCart[i].price > maxValue){
            maxValue = shoppingCart[i].price
            maxIndex = i
        }
    }
    return shoppingCart[maxIndex]
 }

 console.log("Il prodotto più costoso è", maxShoppingCart(shoppingCart))


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento. */

 const latestShoppingCart = function(shoppingCart){
    return shoppingCart[shoppingCart.length-1]
 }

  console.log("L'ultimo elemento è", latestShoppingCart(shoppingCart))


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.*/

console.log("INIZIO NUMERI CASUALI - Esercizio EXTRA 6")

const loopUntil = function(x){
    let count = 0
    let randomNumber = null
    if( 0 > x || x > 9)
        return "Numero non valido"
    while(count < 3)
    {
        randomNumber = (Math.round(Math.random() * (9) + 1))
        console.log(randomNumber)
        if(randomNumber > x)
        {
            console.log("+1")
            count ++
        }
    }
}

loopUntil(5)
console.log("FINE NUMERI CASUALI - Esercizio EXTRA 6")


/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.*/

const average = function(array){
    let numberOfElements = null
    let sum = null
    for(let i = 0; i < array.length; i++)
    {
        if(typeof(array[i]) === "number")
        {
            numberOfElements ++
            sum += array[i]
        }
    }
    return (sum / numberOfElements)
}

console.log("La media è", average(["ciao", 2, 5, 2, "Mario"]))


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.*/

 const longest = function(array){
    let maxValue = 0
    let maxIndex = null
    for(let i = 0; i < array.length; i++){
        if(array[i].length > maxValue)
        {
            maxValue = array[i].length
            maxIndex = i
        } 
    }
    return array[maxIndex]
 }

 console.log("La stringa più lunga è", longest(["ciao", "casa", "caciocavallo", "ugo"]))


 /* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".*/

 const spamFilter = function(emailContent){
    if(emailContent.includes("SPAM") || emailContent.includes("SCAM"))
        return false
    return true
 } 

 console.log("Spam??", spamFilter("NON SONO UNA MAIL DI SPAM PLS"))
 console.log("Spam??", spamFilter("NON SONO UNA MAIL DI SCAM PLS"))
 console.log("Spam??", spamFilter("Io non lo sono per davvero"))

 
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.*/

const checkDate = function(date){
    const diffTime = Math.abs(new Date() - date)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

console.log("Giorni passati dal 01/06/23", checkDate(new Date(2023, 06, 01)))


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"] */

 const matrixGenerator = function(x, y)
 {
    let matrix = []
    for(let yAxis = 0; yAxis < y; yAxis++)
    {
        for(let xAxis = 0; xAxis < x; xAxis++)
            matrix.push("".concat(yAxis, xAxis))
    }
    return matrix
 }

 console.log(matrixGenerator(3, 2))