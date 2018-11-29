document.addEventListener('DOMContentLoaded', function () {
  // Add code here
  const board = document.getElementById('board');

  function creatDiv() {
    //First create an element you want to use
    let div = document.createElement("div");
    // Second create text if you want(optional stage)
    let node = document.createTextNode("This text should go inside my div?maybe I should change this to a number in a for loop??");
    //Attach your text created to the element
    div.appendChild(node);
    // Third add the element(tag) you created with it's text!(optional!) to the element(tag) you're targeting 
    let element = board;
    // This was just added to try and fix my 'Uncaught ReferenceError: createDiv is not defined at <anonymous>:1:1' 
    // This didn't fix it
    let a = element.appendChild(div);
    return a;
  }

  //Ideally those inputs go into this function
  //Can't test this because of the same error above.
  function createMultiDiv(int1, int2) {
    for (let q = 0; q < int1; q++) {
      let initialDiv = [];
      intialDiv[i] = document.createElement("div");
      for (let w = 0; w < int2; w++) {
        let nestedDiv = [];
        nestedDiv[j] = document.createElement("div");
      }
    } return board.appendChild(initialDiv);
  }

  //2d Array done
  function arr2d(int1, int2) {
    for (let i = 0; i < input1; i++) {
      for (let j = 0; i < input2; j++) {
        return i; // i = 3 j = 10, i will be 3 lots of 10 opposed to 10 lots of 3
      }
    }
  }

  //Another way to do 2D Array
  // Found a video
  var cols = 10;
  var rows = 10;
  function make2darray(cols, rows) {
    var arr = new Array(cols);
    for (var k = 0; k < arr.length; k++) {
      arr[k] = new Array(rows);
    }
  }
});