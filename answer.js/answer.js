// Question No. 1

function describeValue(val) {
    const type = typeof val;
    const truthiness = val? "truthy" : "falsy";
    return `${type} | ${truthiness}`
}


// Question No. 2

function getDayType(day){
    const formateDay = day.toLowerCase();

    switch(formateDay){
        case "friday":
            case "saturday":
                return "Weekend";

                case "sunday":
                case "monday":
                case "tuesday":
                case "wednessday":
                case "thursday":
                    return "Working Day";

                dafault:
                    return "Invalid Day";
    }
}


// Question No. 3

function validateUsername(username){
    if (username.length < 4){
        return "Too Short";
    }

    if (username.includes(" ")){
        return "No Space Allowed";
    }

    if (username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }

    return "Available";
}


// Question No. 4

function getCngFare(distance, inNight = false, waitingMinutes = 0){
        let fare = 0;

        if (distance <= 2){
            fare = 50;
        }
        else{
            fare = 50 + (distance - 2 ) * 15;
        }
        if (inNight){
            fare = fare * 1.2;
        }
        return fare;
}


// Question No. 5

const getChaseVerdict = (target, scored, ballsLeft)=>{
    const runsNeeded = target - scored;

    if (runsNeeded <=8){
        return "Won";
    }

    if (ballsLeft <= 0){
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict = " ";
    if (requiredRate <= 6){
        verdict = "Comfortable";
    }
    else if (requiredRate <= 12){
        verdict = "Tough";
    }
    else{
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
}




