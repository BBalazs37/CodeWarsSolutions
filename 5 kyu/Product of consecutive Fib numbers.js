//https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(prod){
  let f1 = 0
  let f2 = 1
  while(f2 < prod){
    if(f1 * f2 > prod){
      return [f1, f2, false];
    } else if (f1 * f2 === prod) {
      return [f1, f2, true]
    }
    let nextf = f1 + f2;
    f1 = f2
    f2 = nextf
  }
  return "error!"
}