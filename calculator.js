let inPut = document.getElementById('inp');
let outPut = document.getElementById('outp');

function myInput(y) {
  let x = inPut.innerHTML += ''.concat(y);
  // let inpSt = Srting(inPut.value);
  //  if (inpSt.length == 33) {
  //    return document.getElementById('inp').style.overflowX = 'scroll';
  //  }
  return x;
}
/*
function dispExp () {
  let outPut = document.getElementById('outp');
  let outPutStr = String(outPut.innerHTML);
  if (outPutStr.length == 13) {
      Number(outPutStr).toExponential(7);
    } else {
      myAnswer();
    }
}
*/

function myAnswer() {
  let inPutStr = String(inPut.innerHTML);
  let dispAns = outPut.innerHTML = String(eval(inPutStr));
  if (dispAns.length = 13) {
    return dispAns = eval(inPutStr).toExponential(7);
  }
}

function bSpace () {
  let inPutStr = String(inPut.innerHTML);
  return document.getElementById('inp').innerHTML = inPutStr.substring(0, inPutStr.length-1);
}

function del () {
  let empInPut = document.getElementById('inp').innerHTML = "";
  let empOutPut = document.getElementById('outp').innerHTML = "";
  return del ();
}