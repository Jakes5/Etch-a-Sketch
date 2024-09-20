const container = document.querySelector('.container');
// const createDiv = document.createElement('div');
const generateBtn = document.querySelector('.generate-grid-btn');
const inputValue = document.querySelector('#user-input');
const boxes = document.querySelector('.boxes');
let userGridInput, gridCount, cssVar;

// Get the root element for CSS variables
const CssRoot = document.querySelector(':root');

// const cssBasisVsGridInput ={
//     21: 1,
//     31: 3,
//     37: 4,
//     42: 5,
//     46: 6,
//     50: 7,
//     55: 8,
//     59: 9,
//     61: 10,
//     64: 11
// };

function setCssVariable(userinput) {
    cssVar = setCssBasisDevider(userinput)
    // Set the value of CSS variable
    CssRoot.style.setProperty('--flexBasisDevide', cssVar);
  };

function setCssBasisDevider(input){
    if(input <= 19 && input > 1){
        return input + 1;
    }else if(input <= 27){
        return input + 2;
    }else if(input <= 31){
        return input + 3;
    }else if(input <= 37){
        return input + 4;
    }else if(input <= 42){
        return input + 5;
    }else if(input <= 45){
        return input + 6;
    }else if(input <= 47){
        return input + 7;
    }else if(input <= 49){
        return input + 8;
    }else if(input <= 52){
        return input + 9;
    }else if(input <= 55){
        return input + 10;
    }else if(input <= 57){
        return input + 11;
    }else if(input <= 60){
        return input + 12;
    }else if(input <= 62){
        return input + 13;
    }else if(input <= 64){
        return input + 14;
    }else{
        clearGrid();
        inputValue.value = '';
    }
}

  function clearGrid() {
    //e.firstElementChild can be used. 
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
        //https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
    }
}
//   setCssVariable(userinput)

// let rowPercentageDivider = 100 /

generateBtn.addEventListener("click", () =>{
    clearGrid();
    userGridInput = Number(inputValue.value);
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
    
    setCssVariable(userGridInput);
    //https://www.w3schools.com/css/css3_variables_javascript.asp

    // Colouring event
    for(let sqNo = 1; sqNo <= gridCount; sqNo++){
        document.querySelector(`#box-${sqNo}`).addEventListener('mouseover',()=>{
            document.querySelector(`#box-${sqNo}`).style.backgroundColor="#04AA6D";
        })
    }

    
    createDiv = 0;
    inputValue.value = '';
})


// document.querySelector('.boxes').addEventListener('mouseover',()=>{
//     document.querySelector('.boxes').style.backgroundColor="#04AA6D";
// })
