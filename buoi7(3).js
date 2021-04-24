run = true;
while (run){
    console.log("Insert 4 sides to detect which shape is it")
    let side1 = prompt("Insert your left side: ")
    let side2 = prompt("Insert your right side: ")
    let side3 = prompt("Insert your upper side ")
    let side4 = prompt("Insert your lower side: ")
    if (side1 == side2 == side3 == side4){
        console.log("This is a square")
    }
    else if (side1 == side2 && side3 == side4 && side1 != side3){
        console.log("This is a rectangle")
    }
    else{
        console.log("Just a normal quadrilateral")
    }
}