function snapCrackle(maxValue) {
    

    let list = []
    for(let control = 1; control<=maxValue; control++){
        if(control%2!=0 && control%5==0){
            list.push('SnapCrackle')
           
        }
        else if(control%2!=0){
            list.push('Snap')
        }
        else if(control%5==0){
            
            list.push('Crackle')
        }
        else{
            list.push(control)
        }
        

    }
    
    console.log(list.join(', '))
    
   return list
}

snapCrackle(12)