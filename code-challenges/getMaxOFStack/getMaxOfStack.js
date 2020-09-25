'use strict';

// eslint-disable-next-line no-unused-vars
function getMaxOfStack(stack){
  var max = stack.top.value;
  if(stack.isEmpty()){
    console.log('Empty Stack: No max value');
  } else if(!stack.top.next) {
    console.log('max value =', max);
  } else{
    let pointer = stack.top;
    while(pointer.next){
      if(pointer.next.value > max ){
        max = pointer.next.value;
      } 
      pointer = pointer.next;
    }
  }
  return max;
}
