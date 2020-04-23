function stringEval(numArray){

    console.log(numArray);

    numArray.forEach(element =>{
        if(element<0){
            throw Error("Negative Error");
        }
        if(element == 0){
            zeroError();
        }
        else console.log("YES");
    });

    
}

function zeroError(){
    try{
        throw "Zero Error"
    } catch(e) {
        console.log(e)
    }
}

function negativeError(){
    try{
        throw "Negative Error"
    }catch(e){
        console.log(e);
    }
}

stringEval([2,3,0,-1,5,-2,0])
