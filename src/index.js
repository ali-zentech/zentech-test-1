
// Bonus
// Array + Objects + Sets:
// Write a function that:
// Takes an array of objects and a Set of keys.
// Returns a new array where each object contains only the properties whose keys are in the Set.

// fake data generated using AI for testing
const objectsArray = [
    { id: 1, name: "Alice", age: 30, city: "New York", profession: "Engineer" },
    {
      id: 2,
      name: "Bob",
      age: 25,
      city: "San Francisco",
      profession: "Designer",
    },
    {
      id: 3,
      name: "Charlie",
      age: 35,
      city: "Los Angeles",
      profession: "Manager",
    },
    { id: 4, name: "David", age: 28, city: "Chicago", profession: "Developer" },
  ];
  
  const keysSet = new Set(["id", "name", "profession"]);

  function bonus(arr, set_key) {
    arr.forEach(obj => {
        Object.keys(obj).forEach( key => {
            if(!set_key.has(key)) delete(obj[key])
        })
    })
    return arr; 
  }
  console.log(  bonus(objectsArray, keysSet))
