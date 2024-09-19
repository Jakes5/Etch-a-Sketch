const container = document.querySelector('.container');
// const createDiv = document.createElement('div');
const generateBtn = document.querySelector('.generate-grid-btn');
const inputValue = document.querySelector('#user-input');

let userGridInput, gridCount, cssVar;

// Get the root element for CSS variables
const CssRoot = document.querySelector(':root');

const cssBasisVsGridInput ={
    21: 1,
    31: 3,
    37: 4,
    42: 5,
    46: 6,
    50: 7,
    55: 8,
    59: 9,
    61: 10,
    64: 11
}


function setCssVariable(userinput) {
    cssVar = setCssBasisDevider(userinput)
    // Set the value of CSS variable
    CssRoot.style.setProperty('--flexBasisDevide', cssVar);
  }
function setCssBasisDevider(input){
    if(input <= 21 && input > 1){
        return input + 1;
    }else if(input <= 27){
        return input + 2;
    }else if(input <= 31){
        return input + 3;
    }else if(input <= 37){
        return input + 4;
    }else if(input <= 42){
        return input + 5;
    }else if(input <= 46){
        return input + 6;
    }else if(input <= 50){
        return input + 7;
    }else if(input <= 55){
        return input + 8;
    }else if(input <= 59){
        return input + 9;
    }else if(input <= 61){
        return input + 10;
    }else if(input <= 63){
        return input + 11;
    }else if(input === 64){
        return input + 12;
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
        container.appendChild(createDiv);
    };
    // console.log(setCssBasisDevider(userGridInput));
    // console.log(setCssVariable(userGridInput));
    setCssVariable(userGridInput);

    createDiv = 0;
    inputValue.value = '';
})


