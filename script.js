const database = [{name: "John", country: "Israel", age: 19, isMarried: true}, {
    name: "Mary",
    country: "Israel",
    age: 29,
    isMarried: false
}, {name: "Bill", country: "Belgium", age: 10, isMarried: false}, {
    name: "Jane",
    country: "France",
    age: 30,
    isMarried: true
}, {name: "Hanna", country: "France", age: 9, isMarried: false}, {
    name: "George",
    country: "Israel",
    age: 80,
    isMarried: true
}];

// 1. Select and print all married person. (filter)

const isMarried = database.filter((person) => person.isMarried === true);
console.log(isMarried)

// 2. Print database sorted by age ASC. (min->max) (sort)
 database.sort((a, b)=>a.age-b.age)
console.log(database);

// 3. Calculate average age. (reduce)
let average = database.reduce((accum, person) => (accum + person.age), 0)
average /= database.length;
console.log(average)

// 4. Print statistic by country.
// {'Israel':3, ...}
// 5#. Print married person sorted ASC by name, not married DESC by age and average age of married person.
// 6. Remove user by position.
