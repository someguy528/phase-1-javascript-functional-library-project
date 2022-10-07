function setArray(input){
    return Array.isArray(input) ? input.slice() : Object.values(input)
}
function myEach(collection, cb){
    // let collectionValues = Array.isArray(collection) ? collection.slice() : Object.values(collection)
    let collectionValues = []
    if(Array.isArray(collection) !== true){
        collectionValues = Object.values(collection);
    }
    else if(Array.isArray(collection) === true){
        collectionValues = collection.slice();
    }
    for (let col of collectionValues){
        cb(col)
    }
    // collectionValues.forEach( col => cb(col));
    return collection
}
function myMap(collection, cb){
    let collectionValues = setArray(collection);
    let collectionValues2 = []
    for (let col of collectionValues){
        collectionValues2.push(cb(col)) 
    }
    // return collectionValues.map(col => cb(col));
    return collectionValues2
}
function myReduce(collection, cb, acc){
    let collectionValues = setArray(collection);
    if (typeof(acc) !== 'number'){
        acc = collectionValues[0];
        collectionValues = collectionValues.slice(1);
    }
    for (let col of collectionValues){
        acc = cb(acc,col,collectionValues)
    }
    return acc
}
function myFind(collection, predicate){
    let collectionValues = setArray(collection);
    // return collectionValues.find(col => predicate(col))
    for (let col of collectionValues){
        if(predicate(col)===true){
            return col
        }
    }
    return undefined
}
function myFilter(collection, predicate){
    let collectionValues = setArray(collection);
    let collectionValuesCollection = []
    for(let col of collectionValues){
        if (predicate(col)===true){
            collectionValuesCollection.push(col)
        }
    }
    return collectionValuesCollection
    // return collectionValues.filter(col=> predicate(col))
}
function mySize(collection){
    let collectionValues = setArray(collection);
    return collectionValues.length
}
function myFirst(array, n){
    if(typeof(n)==='number'){
        return array.slice(0, n)
    }
    return array[0]
}
function myLast(array, n){
    if(typeof(n)==='number'){
        return array.slice(array.length-n)
    }
    return array[array.length-1]
}
function myKeys(object){
    // return Object.keys(object)
    let keys = [];
    for(let k in object){
        keys.push(k);
    }
    return keys
}
function myValues(object){
    // return Object.values(object)
    let values = [];
    for(let k in object){
        values.push(object[k]);
    }
    return values
}