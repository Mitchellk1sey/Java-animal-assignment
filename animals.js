const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        pic: "images/stella.jfif"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        pic: "images/cody.jfif"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        pic: "images/mango.jfif"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        pic: "images/lucy.jfif"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        pic: "images/buhmie.jfif"
    }
];

function showInfo() {
    let num = document.getElementById("petNum").value;
    let index = parseInt(num) - 1;

    if (index >= 0 && index < petsData.length) {
        let pet = petsData[index];

        let str = pet.petName + " is " + pet.age + " years old. " +
                  "This animal weighs " + pet.weightInKilos + " kilos " +
                  "and is a " + pet.breed + " breed.";

        document.querySelector(".selectedPetInfo").innerHTML = str;

        // show the picture
        document.getElementById("petPic").src = pet.pic;

        console.log("showing info for:", pet.petName);
    } else {
        document.querySelector(".selectedPetInfo").innerHTML =
            "Please enter a valid pet number.";

        document.getElementById("petPic").src = "";
    }
}
