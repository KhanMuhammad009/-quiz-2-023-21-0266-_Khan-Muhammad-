const persons = [
    {
        id: 1,
        personName: "Fahad",
        personAge: "23",
        personIncome: "2000000"
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: "23",
        personIncome: "3000000"
    }
];

function generateOutput(personsArray) {
    let output = '';
    personsArray.forEach(person => {
        output += `Person ${person.id} name is ${person.personName} having salary ${person.personIncome},\n`;
    });
    return output;
}

const result = generateOutput(persons);
console.log(result);