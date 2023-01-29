export function sayHello(person?: string) {
  console.log(person ? `Hi, ${person}` : "Hi");
}
