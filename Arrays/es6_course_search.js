let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];

//  When does the PROG200 course start?

function IscourseExists(arrayValue) {
    if (arrayValue.CourseId=="PROG200") {
       return true;
    }
    else {
       return false;
    }
 }

let findcourse = courses.find(IscourseExists);
console.log(findcourse.StartDate);

//  What is the title of the PROJ500 course?

let findcourse1 = courses.find(c=>c.CourseId=="PROJ500");
console.log(findcourse1.Title);

//  What are the titles of the courses that cost $50 or less?
let coursesunder50 = courses.filter(c=>c.Fee<=50); 

for(let i=0;i<coursesunder50.length;i++)
{
console.log(coursesunder50[i].Title);
}

//  What  classes meet in "Classroom 1"?
let classroom1 = courses.filter(c=>c.Location=="Classroom 1"); 

for(let i=0;i<classroom1.length;i++)
{
console.log(classroom1[i].CourseId);
console.log(classroom1[i].Title);
}

