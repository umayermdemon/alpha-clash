function hideElementById(elementId){
  const hideElement= document.getElementById(elementId);
  hideElement.classList.remove('hidden')
}
function addElementById(elementId){
  const addElement= document.getElementById(elementId);
  addElement.classList.add('hidden');
}


function setBackgroundById(elementId){
  const setBackground= document.getElementById(elementId);
  setBackground.classList.add('bg-red-400', 'text-white')
}
function removeBackgroundById(elementId){
  const removeBackground= document.getElementById(elementId);
  removeBackground.classList.remove('bg-red-400', 'text-white')
}

function getTextElementById(elementId){
  const textElementById=document.getElementById(elementId);
  const textElement= parseInt(textElementById.innerText);
  return textElement;
}

function setTextElementById(elementId, value){
  const setElement=document.getElementById(elementId);
  setElement.innerText=value;
}
function getARandomAlphabets(){
  const alphabetString= "abcdefghijklmnopqrstuvwxyz";
  const alphabets= alphabetString.split('');
  const randomNumber=Math.random()*25;
  const index=Math.round(randomNumber);
  const alphabet=alphabets[index];
  return alphabet;
}