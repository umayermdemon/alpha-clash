function keyboardPress(e){
  const playerPressed= e.key;
  const currentAlphabet=document.getElementById('current-alphabet').innerText.toLowerCase();
  console.log(playerPressed, currentAlphabet)
  if(currentAlphabet===playerPressed){
    const currentScore=getTextElementById('current-score');
    const newScore= currentScore + 1;
    setTextElementById('current-score', newScore)
// ......................................................................................
    // const currentScoreElement=document.getElementById('current-score');
    // const currentScore= parseInt(currentScoreElement.innerText);
    // let newScore=currentScore+1;
    // currentScoreElement.innerText=newScore;
    removeBackgroundById(currentAlphabet);
    continueGame();
    
  }
  else{
    const currentLife= getTextElementById('current-life');
    const newLife=currentLife-1;
    setTextElementById('current-life', newLife)
    // const currentLifeElement=document.getElementById('current-life');
    // const currentLife= parseInt(currentLifeElement.innerText);
    // let newLife=currentLife-1;
    // currentLifeElement.innerText=newLife;
    if(currentLife<=1){
      addElementById('play-ground')
      hideElementById('result')
    }
  }
}

document.addEventListener('keyup', keyboardPress)

function continueGame(){
 const alphabet=getARandomAlphabets();
 const currentAlphabet= document.getElementById('current-alphabet');
 currentAlphabet.innerText=alphabet;
 setBackgroundById(alphabet);
}

function play(){
  // const playGround= document.getElementById('play-ground');
  // playGround.classList.remove('hidden');
  // const home = document.getElementById('home');
  // home.classList.add('hidden')
  
  hideElementById('play-ground');
  addElementById('home');
  
  continueGame()
}