// What do we expect this program to print?
let a = 1;

{
  let b = 2;
  let c = 3;

  console.log(a);

  {
    let c = 4;
    let d = a + b;

    c += d;

    console.log(c);
    console.log(d);
  }

  a += c;

  console.log(a);
  console.log(d);
}
