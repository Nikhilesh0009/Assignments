function generatePassword(length , includeNumbers=true,includeSpecialChars=false ){
    
    let specialchars="!@#$%^&*"
    let numbers="1234567890"
    let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let small="abcdefghijklmnopqrstuvwxyz"
    
    let password=""
    
    for(i=0; i<length; i++){
        
        let char =Math.floor(Math.random()*4)
        
        if(char==0){
            let one =Math.floor(Math.random()*specialchars.length)
            password +=specialchars[one]
        }
        else if(char==1){
            let two =Math.floor(Math.random()*numbers.length)
            password +=numbers[two]
        }
        else if(char==2){
            let three =Math.floor(Math.random()*capital.length)
            password +=capital[three]
        }
        else{
            let four =Math.floor(Math.random()*small.length)
            password +=small[four]
        }
    }
    return password
}


console.log(generatePassword(10,true,true))