const petArray = [
    { name: "Fluffy", type: "dog" },
    { name: "Parsley", type: "dog" },
    { name: "Ginger", type: "cat" },
    { name: "Biscuit", type: "cat" }
];

function sayHelloToPets(pets) {
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        const petName = pet.name;
        let helloMessage = "";
        if (pet.type === "dog") {
            helloMessage = "Woof";
        }
        if (pet.type === "cat") {
            helloMessage = "Meow";
        }
        console.log(helloMessage + ", " + petName + "!");
    }
}
sayHelloToPets(petArray);