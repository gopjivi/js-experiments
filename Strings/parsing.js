"use strict";

let name = "Brenda Kaye";


function parseAndDisplayName(name)
{
    console.log("Name :"+name);

let splitname=name.indexOf(" ");
    console.log("First name:"+name.substring(0,splitname));
    console.log("Last name:"+name.substring(splitname+1));
    
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
