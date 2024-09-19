const container = document.querySelector('.container');
const createDiv = document.createElement('div');
let userGridInput = 61;
let gridCount = userGridInput * userGridInput;
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

function setCssBasisDevider(input){
    if(input <= 21){
        return input + 1;
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
    }else if(input <= 64){
        return input + 11;
    }else{
        return `please pick a number between 2 and 64`
    }
}
function myFunction_set() {
    // Set the value of CSS variable
    CssRoot.style.setProperty('--flexBasisDevide', 61 + 10);
  }


myFunction_set()

// let rowPercentageDivider = 100 /

for(let sqNo = 1; sqNo <= gridCount; sqNo++) {

    const createDiv = document.createElement('div');
    createDiv.setAttribute("class", "boxes");
    createDiv.setAttribute("id", `box-${sqNo}`);
    container.appendChild(createDiv);
};
