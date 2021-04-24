run = true;
while(run){
    console.log('Insert x coordinate and y coordinate to detect the point location');
    let x = prompt("Insert your x coordinate");
    let y = prompt("Insert your y coordinate");
    if (x==0 && y==0){
        console.log("This point is the origin of the coordinate");
    }
    else if (x==0 && y>0){
        console.log("This point is on the upper y axis");
    }
    else if (x==0 && y<0){
        console.log("This point is on the lower y axis");
    }
    else if (x>0 && y==0){
        console.log("This point is on the right of the x axis");
    }
    else if (x<0 && y==0){
        console.log("This point is on the left of the x axis");
    }
    else if (x>0 && y>0){
        console.log("This point is on the upper right quadrant");
    }
    else if (x>0 && y<0){
        console.log("This point is on the lower right quadrant");
    }
    else if (x<0 && y>0){
        console.log("This point is on the upper left quadrant");
    }
    else if (x<0 && y<0){
        console.log("This point is on the lower left quadrant");
    }
    let number = prompt("Press 5 to stop or any other keys to continue")
    if (number == 5){
        run = false;
    }
}