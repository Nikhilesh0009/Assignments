function dynamicUser(users){
        
  // for(i=0; i<users.length; i++){
  
let output=(users["role"]=="admin" && users["active"]==true)? "Admin Access Granted!"
:(users["role"]=="admin" && users["active"]==false)?"Admin Access Revoked"
:(users["role"]=="user" && users["active"]==true)?"User Access Granted!"

:(users["role"]=="user"&& users["active"]==false)?"User Access Revoked"

:"Access Denied"

return output
// }
  
}

let user1 = { name: "Alice", role: "admin", active: false }
let user2 = { name: "Bob", role: "user", active: true }


console.log(dynamicUser(user1))
console.log(dynamicUser(user2))