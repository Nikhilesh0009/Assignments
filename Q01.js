let scores=[95,50,35,65,20,82,90,36,75,28]


let count1 = 0
let count2=0


for(i=0; i<scores.length; i++){
    
    if(scores[i]<40){
        scores[i]+=20
    }
    if(scores[i]>90){
        scores[i]=90
    }
    if(scores[i]>=50){
     count1++
    }
    else{
     count2++

    }
    
}

 console.log(` students passed : ${count1}`)
  console.log(` students  Failed : ${count2}`)

