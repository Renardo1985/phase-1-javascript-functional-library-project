const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

function myEach(collection, callback)
{
    let value = Object.values(collection)   
    value.forEach((element)=> {callback(element)});    
    return collection;
}

function myMap(collection, callback)
{
    let result = [];
    let value = Object.values(collection)
    value.forEach(element => {result.push(callback(element))})     
    return result;

}

function myReduce(collection, callback, acc)
{
    let data = Object.values(collection)
    if (acc === undefined)
    {
        acc = data[0];
        data.shift();
        data.forEach(element => { acc = callback(acc,element,data)});
    }
    else{data.forEach(element => { acc = callback(acc,element,data)});}
    return acc;
}

function myFind(collection,predicate)
{
    let value = Object.values(collection)
    for (let i = 0 ; i<value.length ;i++)
    {
        if (predicate(value[i]) === true){
        return value[i];
        }
    }
   
}
function myFilter(collection,predicate)
{
    let result = [];
    let value = Object.values(collection)
    value.forEach((element) => {if (predicate(element) === true ){result.push(element)}});
    return result
}
function mySize(collection)
{
    let size = Object.keys(collection)
    return size.length;
}

function myFirst(array, n)
{
    let result = [];
    if (n === undefined){return array[0]}
    else{
    for (let i = 0 ; i<n ; i++)
    {
        result[i] = array[i] 
    }
        return result
    }
}

function myLast(array, n)
{
    if (n === undefined){return array[array.length-1]}
    else{
    return array.slice(-n);
    }
}

function myKeys(object){

    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}
