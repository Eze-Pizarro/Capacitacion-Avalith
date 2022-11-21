//let faker = import('faker');
let faker = require('faker');
//import { faker } from '@faker-js/faker';

let nombre = faker.name.findName();
console.log(nombre);