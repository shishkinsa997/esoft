function deepCopy(obj, copies = new WeakMap()) {
    if (copies.has(obj)) return copies.get(obj); // если объект уже скопирован возвращаем его копию
    if (obj instanceof Date) {  // обрабатываем особые типы данных
        return new Date(obj);
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    let copy = Object.create(Object.getPrototypeOf(obj)); // создаем новый объект
    copies.set(obj, copy); // запоминаем скопированный объект, чтобы избежать циклических ссылок
    for (let key of Reflect.ownKeys(obj)) { // копируем свойства
        let desc = Object.getOwnPropertyDescriptor(obj, key);
        Object.defineProperty(copy, key, desc);
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            copy[key] = deepCopy(obj[key], copies);
        }
    }
    return copy;
}

let original = {
    a: 1,
    b: {
        c: 2
    },
    d: [3, 4],
    e: new Date(),
    f: /pattern/,
    g: function() { return 'function copied'; }
};

let copied = deepCopy(original);
console.log(copied)
