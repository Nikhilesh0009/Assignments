
let users=[
    {
        
        name :"Alice",
        role :"admin",
      active :true
    },
    
    {
        
        name :"Bob" ,
        role :"user",
      active :false
    },
    
    {
        
        name :"Alice1" ,
        role :"user",
      active :true
    },
    
    {
        name :"Bob1" ,
        role :"admin",
      active :false
    }
    ]
    
    for(i=0; i<users.length; i++){
        
     let output=(users[i]["role"]=="admin" && users[i]["active"]==true)? "Admin Access Granted!"
      :(users[i]["role"]=="admin" && users[i]["active"]==false)?"Admin Access Revoked"
      :(users[i]["role"]=="user" && users[i]["active"]==true)?"User Access Granted!"
      
      :(users[i]["role"]=="user"&& users[i]["active"]==false)?"User Access Revoked"
      
      :"Access Denied"
      
      console.log(output)
    }
    
    
    
    
    
    