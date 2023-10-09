let a = 4;
let b = 4;
let c = 3;

switch (a) {
  case (a = b):
    console.log("égal à b");
    break;
  case (a = c):
    console.log("égal à c");
    break;
  default:
    console.log("égal à rien");
    break;
}
