console.log("It's a separate js file");

// option 1 : directly apply on html file
//  <button onclick="document.body.style.backgroundColor= 'yellow' ">Make yellow</button>



// option 2 : add onclick function

// ********** IMPORTANT : WE WILL USE THIS*******************

// <button onclick="makeRed()"> Make red </button>

function makeRed (){
    document.body.style.backgroundColor = 'red';
}

// option 3 : 

const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue;

function makeBlue (){
    document.body.style.backgroundColor = 'blue';
}

// option 3 another 

const makePurpleBtn = document.getElementById('make-purple');
makePurpleBtn.onclick = function makePurple (){
  document.body.style.backgroundColor = 'purple';
}

// option 4

const makePink = document.getElementById('make-pink');
makePink.addEventListener('click' , pink)
function pink (){
    document.body.style.backgroundColor = 'pink';
}

// option 4 another
const makeGreen = document.getElementById('make-green');
      makeGreen.addEventListener('click', function makeGreenBtn (){
        document.body.style.backgroundColor = 'green';
      })

// option 4 final 
// ********** IMPORTANT : WE WILL USE THIS*******************

//    document.getElementById('make-skyblue').addEventListener('click', function(){})
document.getElementById('make-skyblue').addEventListener('click', function(){
  document.body.style.backgroundColor = 'skyblue';
})