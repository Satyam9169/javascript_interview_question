function deepClone(value, cache = new WeakMap()){
  // primitive value
  if(value === null || typeof value !== "object"){
    return value;
  }
  
  // copping function
  if(typeof value === "function"){
    return value;
  }

  // Date
  if(value instanceof Date){
    return new Date(value.getTime())
  }
  
  // RegExp
  if(value instanceof RegExp){
    return new RegExp(value.source, value.flags)
  }

  // circular reference
  if(cache.has(value)){
    return cache.get(value);
  }

  if(value instanceof Map){
    const clonedMap = new Map()
    cache.set(value, clonedMap)
    
    value.forEach((mapValue, key)=> {
      clonedMap.set(deepClone(key, cache), deepClone(mapValue, cache))
    })
    return clonedMap;
  }

  if(value instanceof Set){
    const clonedSet = new Set()
    cache.set(value, clonedSet)

    value.forEach((setValue)=> {
      clonedSet.add(deepClone(setValue, cache))
    })
    return clonedSet;
  }

  // Array
  if(Array.isArray(value)){
    const clonedArray = [];
    cache.set(value, clonedArray)
    value.forEach((currentValue, index)=> {
      clonedArray[index] = deepClone(currentValue, cache)
    })
    return clonedArray;
  }

  // Object
  const objCloned = Object.create(Object.getPrototypeOf(value))
  cache.set(value, objCloned)
  
  // own prototype
  Reflect.ownKeys(value).forEach((key)=> {
    objCloned[key] = deepClone(value[key], cache)
  })

  return objCloned;
}

const obj = {
  name: "satyam",
  age: 25,
  date: new Date(),
  skills: ["JS", "REACT"],
  address: {
    city: "Bangalore",
    pin: 560066
  },
  greet(){
    return "Hello"
  },
  map: new Map([
    ["role", "Engineer"]
  ]),
  set: new Set([1, 2, 3]),
};

// curcular reference
obj.self = obj;
const cloned = deepClone(obj);

console.log(cloned);
console.log(cloned !== obj);
console.log(cloned.address !== obj.address)
console.log(cloned.skills !== obj.skills)
console.log(cloned.date !== obj.date)
console.log(cloned.self === cloned)
console.log(cloned.greet === obj.greet)
console.log(cloned.map !== obj.map)
console.log(cloned.set !== obj.set)