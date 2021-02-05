// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.

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

            resultContainer.innerHTML += `<div class="result">${facts[i].name} : ${facts[i].rating} : Tags: ${facts[i].tags.length}</div>` 
            
        }
        
    }
    catch(error) {
        resultContainer.innerHTML = "Something is wrong";
    }
    finally{
        console.log("Finally");
    }
}

getGames();