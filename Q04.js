// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


let users=[
   {
       role :"admin",
  experience: 7,
     active :true,
  department: "IT"
   },
   {
       role :"admin",
  experience: 3,
     active :true,
  department: "Finance"

   },
   {
       role :"admin",
  experience: 6,
     active :true,
  department: "Marketing"

   },
   {
       role :"admin",
  experience: 5,
     active :false,
  department: "Finance"

   }
   
//     {
//         role :"Manager",
//   experience: 4,
//       active :true,
//   department: "Marketing"
//     },
//      {
//         role :"Manager",
//   experience: 4,
//       active :true,
//   department: "Marketing"
//     },
//     {
//         role :"Manager",
//   experience: 4,
//       active :true,
//   department: "Marketing"
//     },
//     {
//         role :"Manager",
//   experience: 4,
//       active :true,
//   department: "Marketing"
//     },
   
//     {
//         role :"user",
//   experience: 2,
//       active :true,
//   department: "Support"
//     },
   ]
   
   for(i=0; i<users.length; i++){
       
    let output=(users[i]["role"]=="admin" && users[i]["active"]==true &&users[i]["experience"]>5 &&users[i]["department"]=="IT" )? "Full IT Admin Access"
     :(users[i]["role"]=="admin" && users[i]["active"]==true &&users[i]["experience"]>5 &&users[i]["department"]!="IT" )? "Full General Admin Access"
     :(users[i]["role"]=="admin" && users[i]["active"]==true &&users[i]["experience"]<=5 )? "Limited Admin Access"
     :"Admin Access Revoked"
     
     console.log(output)
   }
   
   
   
   
   
   