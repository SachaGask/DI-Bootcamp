
// Get main element //

const form = document.getElementById("libform");
const libButton = document.getElementById("lib-button");
const storyContainer = document.getElementById("story");

//Debug//
//console.log(form,libButton,storyContainer)

// Add the shuffle button //
const shuffle = document.createElement("button");
shuffle.textContent = "Shuffle Story";
form.appendChild(shuffle);



let currentsInputs = {}
let storyTemplates = []

function getInputsValue(){
    return {
        noun: document.getElementById("noun").value,
        adjective: document.getElementById("adjective").value,
        person: document.getElementById("person").value,
        place: document.getElementById("place").value,
        verb: document.getElementById("verb").value,
    }
}

function validateNotEmptyValue(inputs){
    for(let key in inputs){
        if(inputs[key].trim() === ""){
            return false;
        }
    }
    return true;
}

function generateStory(inputs){
    return[
        "Once upon a time, time" +
        inputs.person +
        "went to" +
        inputs.place +
        "with a very" +
        inputs.adjective +
        "." +
        inputs.verb +
        "all day."
    ]
}

function getRandomStory(){
    if(storyTemplates.length === 0) return;
    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    return storyTemplates[randomIndex];
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = getInputsValue()
    
    if(!validateNotEmptyValue(inputs)){
        alert("Please fill the field.");
        return;
    }

storyTemplates = generateStory(inputs);
//console.log(storyTemplates);
storyContainer.textContent = getRandomStory();
})