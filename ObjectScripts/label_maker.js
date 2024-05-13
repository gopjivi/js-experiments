let myInfo = {
    name: "karpagam", 
    address: "121 Cardinal Street",
   city:"Coimbatore",
   state:"TamilNadu",
   zip:"642002"
 };


 printContact(myInfo);

 function printContact(data)
 {
    console.log(data.name);
    console.log(data.address);
    console.log(data.city,data.state+" " +data.zip);
   
 }
 