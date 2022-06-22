
//função 1
function snapCrackle(maxValue) {
    

    let list = []

    //for principal
    for(let control = 1; control<=maxValue; control++){

        //condicional 1
        if(control%2!=0 && control%5==0){
            list.push('SnapCrackle')
           
        }
        //condicional 2
        else if(control%2!=0){
            list.push('Snap')
        }
        //condicional 3
        else if(control%5==0){
            
            list.push('Crackle')
        }
        //condicional 4
        else{
            list.push(control)
        }
        

    }
    
    console.log(list.join(', '))
    
   return list
}

//teste
snapCrackle(12)






//função 2
function snapCracklePrime(maxValue) {
    
    let list = []

    //for principal
    for(let num = 1; num<=maxValue; num++){

        //condicional 1
        if(num%2!=0 && num%5==0){
            let test = 0
            for (let i = 2; i < num; i++)
            if (num % i === 0) {
                test= test+1;
            }
            if(test==0){
                list.push('SnapCracklePrime')
            }
            else{
                list.push('SnapCrackle')}
}
        //condicional 2
        else if(num%2!=0){
            let test = 0
            for (let i = 2; i < num; i++)
            if (num % i === 0) {
                test= test+1;
            }
            if(num==1){
                list.push('Snap')
            }
            else if(test==0){
                list.push('SnapPrime')
            }
            else{
                list.push('Snap')}

}
        //condicional 3
        else if(num%5==0){
            let test = 0
            for (let i = 2; i < num; i++)
            if (num % i === 0) {
                test= test+1;
            }
            if(test==0){
                list.push('CracklePrime')
            }
            else{
                list.push('Crackle')}
}
        //condicioal 4
        else{
            let test = 0
            for (let i = 2; i < num; i++)
            if (num % i === 0) {
                test= test+1;
            }
            if(test==0){
                list.push('Prime')
            }
            else{
                list.push(num)}
}


}

console.log(list.join(', '))
    
   return list
}

//teste
snapCracklePrime(15)
