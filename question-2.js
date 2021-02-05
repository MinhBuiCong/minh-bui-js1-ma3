const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

const resultContainer = document.querySelector(".container")

async function getGames() {

    try {
        const response = await fetch(url);

        const data = await response.json();
        
        const facts = data.results;

        resultContainer.innerHTML = "";

        for(var i = 0; i < facts.length; i++) {

            if(i === 8) {
                break;
            }
            resultContainer.innerHTML += 
            `<div class="result">Name : ${facts[i].name}<br>Rating : ${facts[i].rating}<br>Tags: ${facts[i].tags.length}</div>`    
        }   
    }
    catch(error) {
        resultContainer.innerHTML = "There is an error";
    }
    finally{
        console.log("Finally");
    }
}

getGames();