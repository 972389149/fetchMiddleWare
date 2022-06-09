class Animal {
  name: string
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
    return this.name
  }
}


export default Animal