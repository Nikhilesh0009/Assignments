
function dynamicUser(users){
        
  for(i=0; i<users.length; i++){
  
let output=(users[i]["role"]=="admin" && users[i]["active"]==true)? "Admin Access Granted!"
:(users[i]["role"]=="admin" && users[i]["active"]==false)?"Admin Access Revoked"
:(users[i]["role"]=="user" && users[i]["active"]==true)?"User Access Granted!"

:(users[i]["role"]=="user"&& users[i]["active"]==false)?"User Access Revoked"

:"Access Denied"

return output
}
  
}

let user1 = [{ name: "Alice", role: "admin", active: false }]
let user2 = [{ name: "Bob", role: "user", active: true }]


console.log(dynamicUser(user1))
console.log(dynamicUser(user2))











