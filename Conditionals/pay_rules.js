let payRatePerHour=200;
let hoursWorked=50;
let reason="Under 40 Hours";

if(hoursWorked>40)
{
    payRatePerHour= payRatePerHour*1.5;
    reason="More than 40 Hours";
}
else if(hoursWorked==40)
{
    reason="Exactly 40 hours";
}

let grosspay= payRatePerHour * hoursWorked;

console.log("The persons grosspay is "+grosspay);
console.log("Reason is " +reason);