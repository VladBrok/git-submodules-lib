export function sayHello(person?: string) {
  console.log(person ? `Hi, ${person}` : "Hi");
}

export function sayBye(person?: string) {
  console.log(person ? `Bye, ${person}` : "Bye");
}
