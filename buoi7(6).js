run = true;
while(run){
    console.log("Solving quadratic equation");
    let a = prompt("Insert your a");
    let b = prompt("Insert your b");
    let c = prompt("Insert your c");
    if (a==0 && b==0 && c==0){
        console.log("Infinite root")
    }
    else if (a==0 && b == 0){
        console.log("No root");
    }
    else if (a==0 && b!=0){
        console.log(-c/b);
    }
    else {
        let delta = b*b - 4*a*c;
        if (delta < 0){
            console.log("No root")
        }
        else if(delta == 0){
            console.log(-b/(2*a));
        }
        else{
            let x1 = (-b + Math.sqrt(delta))/(2*a);
            let x2 = (-b - Math.sqrt(delta))/(2*a);
            console.log(x1);
            console.log(x2);
        }
    }
    let number = prompt("Insert 5 to stop or any other keys to continue")
    if (number == 5){
        run = false;
    }
}