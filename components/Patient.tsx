export class Patient {
  id: number;
  name: string;
  age: number;
  nationality: string;

  constructor(id: number, name: string, age: number, nationality: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
}
