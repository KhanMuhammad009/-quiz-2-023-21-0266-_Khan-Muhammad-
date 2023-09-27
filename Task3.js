const person = {
    id: 1,
    personName: "Fahad",
    personAge: "23",
    personIncome: "2000000"
};

function printProperties(obj) {
    console.log("Properties are below:");
    for (let prop in obj) {
        console.log(prop);
    }
}

printProperties(person);