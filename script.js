const container = document.querySelector('.container');
// const createDiv = document.createElement('div');
const generateBtn = document.querySelector('.generate-grid-btn');
const inputValue = document.querySelector('#user-input');
const boxes = document.querySelector('.boxes');
let userGridInput, gridCount;
const rainbowColors = ['#e81416','#ffa500','#faeb36','#79c314','#487de7','#4b369d','#70369d']

  function clearGrid() {
    //e.firstElementChild can be used. 
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
        //https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
    }
    container.classList.remove("error-msg");
}

container.classList.add("error-msg");

 function erroMsg(){
    const createMessage = document.createElement('div')
    createMessage.setAttribute("class", "error-msg");
    container.classList.add("error-msg");
    createMessage.textContent = "Please enter a grid between 0-100 :)";
    container.appendChild(createMessage);
    inputValue.value = '';
 };

generateBtn.addEventListener("click", () =>{
    clearGrid();
    userGridInput = Number(inputValue.value);
    if(userGridInput > 100 || userGridInput < 1){
        erroMsg();
    }else{
        console.log(userGridInput);
        gridCount = userGridInput * userGridInput;
        console.log(gridCount);
    
        for(let sqNo = 1; sqNo <= gridCount; sqNo++) {
            const createDiv = document.createElement('div');
            createDiv.setAttribute("class", "boxes");
            createDiv.setAttribute("id", `box-${sqNo}`);
            createDiv.style.width = 100 / userGridInput + "%";
            createDiv.style.height = 100 / userGridInput + "%";
            container.appendChild(createDiv);
        };
        
        //https://www.w3schools.com/css/css3_variables_javascript.asp
    
        // Colouring event
        for(let sqNo = 1; sqNo <= gridCount; sqNo++){
            
            document.querySelector(`#box-${sqNo}`).addEventListener('mouseover',()=>{
                let blockColor = Math.floor(Math.random() * rainbowColors.length);
                document.querySelector(`#box-${sqNo}`).style.backgroundColor=rainbowColors[blockColor];
            });
        }
        createDiv = 0;
        inputValue.value = '';
    }

})

