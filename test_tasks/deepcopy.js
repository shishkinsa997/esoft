function deepCopy(obj, copies = new WeakMap()) {
    // Проверка на примитив
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    // Проверка на циклические ссылки
    if (copies.has(obj)) {
        return copies.get(obj);
    }
    // Проверка и обработка на Date, Map, Set
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof Map) {
        return new Map(Array.from(obj, ([key, val]) => [deepCopy(key, copies), deepCopy(val, copies)]));
    }
    if (obj instanceof Set) {
        return new Set(Array.from(obj, val => deepCopy(val, copies)));
    }
    // Создаем новый объект или массив для глубокого копирования
    const copy = Array.isArray(obj) ? [] : {};

    // Запоминаем оригинал чтобы избежать цикл ссылок
    copies.set(obj, copy);
    
    // Рекурсивное копирование свойств
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key], copies);
        }
    }
    // Сохраняем свойства оригинала
    Object.setPrototypeOf(copy, Object.getPrototypeOf(obj));
    
    return copy;
}

