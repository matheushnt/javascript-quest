// debugger;
let item1 = 1;

function func1() {
  let item2 = 2;

  function func2() {
    let item3 = 3;

    console.log(item1);
    console.log(item2);
    console.log(item3);
  }

  func2();
}

// func1();

debugger;
function contar() {
  let c = 0;

  return function incremento() {
    c++;
    console.log(c);
  };
}

const chamarIncremento = contar();

chamarIncremento();
chamarIncremento();
chamarIncremento();
chamarIncremento();
chamarIncremento();
