let num_input = document.getElementById("num_words")
let words_text = document.getElementById("words")

let word_url = "https:/random-word-api.herokuapp.com/word?number="

function generateWords(){

    let num_words = num_input.value

    if(!isNaN(num_words) && num_words != ""){
        let words = eval(requestWords(word_url,num_words))
        words.sort()

        let words_string = ""
        for (let i = 0;i < words.length;i++){
            if (i != (words.length - 1)){
                words_string += (words[i] + ", ")
            }else{
                words_string += words[i]
            }
        }

        console.log(words)

        words_text.innerHTML = words_string
    }else{
        alert("Enter a Number")
    }

    function requestWords(url,words){
        let let_url = url += words
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open( "GET", let_url, false )
        xmlHttp.send( null )
        return xmlHttp.responseText
    }
}
