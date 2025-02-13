   
   
   function advancedUser(users){
       
      //admin

   let output=(users["role"]=="admin" && users["active"]==true &&users["experience"]>5 &&users["department"]=="IT" )? "Full IT Admin Access"
    :(users["role"]=="admin" && users["active"]==true &&users["experience"]>5 &&users["department"]!="IT" )? "Full General Admin Access"
    :(users["role"]=="admin" && users["active"]==true &&users["experience"]<=5 )? "Limited Admin Access"
    :(users["role"]=="admin" && users["active"]==false)?"Admin Access Revoked" 
   
    // Manager 
    
    :(users["role"]=="manager" && users["active"]==true &&users["experience"]>3 &&users["department"]=="Sales" )? "Full Sales Manager Access"
    :(users["role"]=="manager" && users["active"]==true &&users["experience"]>3 &&users["department"]!="Sales" )? "Full Manager Access"
    :(users["role"]=="manager" && users["active"]==true &&users["experience"]<=3 )? "Limited Manager Access"
    :(users["role"]=="manager" && users["active"]==false)?"Manager Access Revoked"
    
    //user 

    :(users["role"]=="user" &&users["department"]=="Support" )? "Priority Support Access"
    :(users["role"]=="user"  &&users["department"]!="Support" )? "User Access"
    :(users["role"]=="user" && users["active"]==false)?"User Access Revoked"
    :"Invalid Role"
    
    return output;
    
  }
  
  let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
  
  let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
  
  let person3 = { role: "user", experience: 2, active: true, department: "Support" };

  let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };


  
  console.log(advancedUser(person1))
  console.log(advancedUser(person2))
  console.log(advancedUser(person3))
  console.log(advancedUser(person4))

  


   