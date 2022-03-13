const prompt = require("prompt-sync")();

function addPerson() {
    let ppl = {
        firstName: prompt(`What is the first name of the person you want to add? `),
        lastName: prompt(`What is the last name of the person you want to add? `),
        age: prompt(`What is the age of the person you want to add? `),
        employed: prompt(`Are they employed?(Yes/No) `),
    }
    people.push(ppl)
    for (person in people) {
        console.log(`\nName: ${people[person].firstName} ${people[person].lastName}\nAge: ${people[person].age}\nEmployed: ${people[person].employed}\n`);
    }
}

function removePerson() {
    let evictee = prompt("Enter the first name of the person you want to remove: ");
    for (i = 0; i < people.length; i++) {
        if (evictee.toLowerCase() === people[i].firstName.toLowerCase()) {
            people.splice(i, 1);
        }
    }
    for (person in people) {
        console.log(`\nName: ${people[person].firstName} ${people[person].lastName}\nAge: ${people[person].age}\nEmployed: ${people[person].employed}\n`);
    }
}
function popUp() {
    let ans = prompt(`Would you like to add or remove a user from the directory? Please enter "add" or "remove": `);
    if (ans.toLowerCase() === "add") {
        addPerson();
        popUp();
    } else if (ans.toLowerCase() === "remove") {
        if (ans.toLowerCase() === "remove" && people.length === 0) {
            console.log("There are no users left to remove!");
            popUp();
        }
        removePerson();
        popUp();
    } else {
        console.log('Incorrect input, please try again');
        popUp();
    }

}
const people = [
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 42,
        employed: "Yes"
    },
    {
        firstName: "Tom",
        lastName: "Smith",
        age: 18,
        employed: "Yes"
    },
    {
        firstName: "Mariam",
        lastName: "Coulter",
        age: 66,
        employed: "No"
    },
    {
        firstName: "Gregory",
        lastName: "Tims",
        age: 8,
        employed: "No"
    },
];

for (person in people) {
    console.log(`\nName: ${people[person].firstName} ${people[person].lastName}\nAge: ${people[person].age}\nEmployed: ${people[person].employed}\n`);
}

popUp();
