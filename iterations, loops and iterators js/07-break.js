'use strict';

label1: {
  console.log(2);
  label2: {
    console.log(2);
    break label1;
    console.log(3);
  }
  console.log(4);
}
console.log(5);

