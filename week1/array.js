
//Function to get emails of users who are active and younger than 30

let users=[
  { "id": 1, "name": "Alice", "age": 28, "email": "alice@example.com", "isActive": false },
  { "id": 2, "name": "Bob", "age": 34, "email": "bob@example.com", "isActive": true },
  { "id": 3, "name": "Charlie", "age": 22, "email": "charlie@example.com", "isActive": true },
  { "id": 4, "name": "Daisy", "age": 45, "email": "daisy@example.com", "isActive": false },
  { "id": 5, "name": "Ram", "age": 24, "email": "ram@example.com", "isActive": true },
]


function xyz(users) {
  let newArr = users.reduce((acc, curr) => {
    if (curr.age < 30 && curr.isActive == true) {
      acc.push(curr.email);
    }
    return acc;
  }, []);
  return newArr;
}

console.log(xyz(users))


