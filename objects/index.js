"use strict";
const obj = {};
const foo = {};
// @ts-ignore
foo[obj] = "👈 Error here if remove @ts-ignore";
const p = {
    someKey: "someValue",
    1: "one",
    2: "two",
};
const pN = {
    // @ts-ignore
    "one": 1 // 👈 error here
};
// Для чего это нужно?
/**
 * Чтобы у объекта были не только стринговые ключи.
 *
 * Это относится к массивам, ведь массив - объект.
 */ 
