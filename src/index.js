function loadInputBoxes() {
  console.log("hello world");
  let inputBox = document.getElementById("NumPeople").value; //int variable
  
  const body2 = document.createElement("div");
  const inputBoxes = [];



  for (let i = 0; i < inputBox; ++i){
     const inputSuggestion = document.createElement("input");
     inputSuggestion.setAttribute("class", "dynamic-input");
     body2.appendChild(inputSuggestion);
     inputBoxes.push(inputSuggestion);

     const listElement = document.createElement("p");
     listElement.innerHTML = inputSuggestion;
  }
 
  const submitBtn = document.createElement("button");
  submitBtn.innerHTML = "Complete!";
  submitBtn.addEventListener("click", ()=> {
    selectRandomInput(inputBoxes);
    createList(inputBoxes);
  });
  body2.appendChild(submitBtn);

  const body1 = document.getElementById("body1");
  body1.appendChild(body2);
}

function createList(inputBoxes){
  const body1 = document.getElementById("body1");
  const divSuggestions = document.createElement("div");
  for (let i = 0; i < inputBoxes.length; i++){
    let elementList = document.createElement("p");
    elementList.innerHTML = inputBoxes[i].value;
    divSuggestions.appendChild(elementList);
    console.log("in create list!");
  }

  body1.appendChild(divSuggestions);

}

function selectRandomInput(inputBoxes){
  const randomIndex = Math.floor(Math.random() * inputBoxes.length);
  const randomInputValue = inputBoxes[randomIndex].value;
  console.log("Randomnly selected input: ", randomInputValue);
  const outputResult = document.createElement("p");
  outputResult.innerHTML = "We are having: " + randomInputValue;

  const body1 = document.getElementById("body1");
  body1.appendChild(outputResult);
  openRecommendedTab(randomInputValue);
}

function openRecommendedTab(randomInputValue){
  const selectedCuisine = randomInputValue.toLowerCase();
  let url;
  if (selectedCuisine === "mexican"){
    url = "https://www.chipotle.com/";
  } else if (selectedCuisine === "chinese"){
    url = "https://grandcrystalseafoodrestaurant.com/";
  } else if(selectedCuisine === "italian"){
    url = "https://www.dibeppe.com/";
  } else if (selectedCuisine === "filipino"){
    url = "https://ca.jollibeefoods.com/";
  } else if (selectedCuisine === "indian") {
    url = "https://tastybistro.ca/";
  } else if (selectedCuisine === "viet" || selectedCuisine === "vietnamese") {
    url = "https://pho777.vancouverpos.com/menu/menu.html";
  } else if(selectedCuisine === "japanese"){
    url = "https://maruhachi.ca/";
  } else {
    url = "https://www.mcdonalds.com/ca/en-ca.html";
  }

  window.open(url, '_blank').focus();

}


