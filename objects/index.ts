const obj = {};

const foo = {};

// @ts-ignore
foo[obj] = "👈 Error here if remove @ts-ignore"

// index signature
/**
 * В обычном js все ключи полей объекта - строки
 * В ts мы можем определить что у объекта будет тип
 * и ключи какого типа будут у этого объекта.
 */

interface Person {
  [key: string]: string; // у объектов типа Person будут стринговые ключи
}

interface PersonWithNumberKeys {
  [key: number]: string;
}

const p: Person = {
  someKey: "someValue",
  1: "one",
  2: "two",
};

const pN: PersonWithNumberKeys = {
    // @ts-ignore
    "one": 1 // 👈 error here
}


// Для чего это нужно?

/**
 * Чтобы у объекта были не только стринговые ключи.
 * 
 * Это относится к массивам, ведь массив - объект. 
 */