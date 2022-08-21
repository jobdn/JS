let obj = {
    
    /**
     * 
     * Мы можем переопределять метод, чтобы он вызывался, 
     * когда это свойство будет использовано как ключ.
     * 👇
     */

    toString() {
        console.log("toString is called!!");
        return "hello"
    }
}

let foo = {};

/**
 * Все свойства объекта преобразуются в строки.
 * 
 * 👇 Свойства типа object будут преобразованы к строке.
 */
foo[obj] = "world!";

console.log(foo[obj]);
console.log(foo["hello"]);