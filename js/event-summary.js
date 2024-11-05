


// <h3 id="handler-status">Default Text</h3>
//<button onclick="handleOnClick()">Handle event by on click function </button>

function handleOnClick (){
    const change = document.getElementById('handler-status')  ;
    change.innerText = 'Text changed by on click';
    
    }



    // option 2 :addlistener
   // <h3 id="event-listener">Add event listener</h3>
    //<button id="listener-btn">click here for event listener</button>

    document.getElementById('listener-btn').addEventListener('click', function(){
        const eventListener =   document.getElementById('event-listener');
        eventListener.innerText= 'changed by addeventlistener';
       })



       // update text :option 2 recap 
    //    <p id="given-text" >Given Text By Users</p>
    //    <input id="input-text" type="text">
    //    <button id="update">update</button><br>



       document.getElementById('update').addEventListener('click', function(){
        const inputField = document.getElementById('input-text');
        const inputText = inputField.value;
        const givenText = document.getElementById('given-text');
        givenText.innerText = inputText;
        inputField.value ='';
    })