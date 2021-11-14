var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];



//challenge1
addChocolates = (num,color,chocolates) => {
    chocolates.reverse();
    for(let i=0;i<num;i++)
    {
        chocolates.push(color);
    }
    chocolates.reverse();
    return chocolates;

}
console.log(addChocolates(2,'red',chocolates));

//challenge2
removeChocolates=(num,chocolates)=>{
    const chocolate=chocolates.slice(0,num);
    chocolates.reverse();
    for(let i=0;i<num;i++)
    {
        chocolates.pop();
    }
    chocolates.reverse();
    return chocolate;
}
console.log(removeChocolates(5,chocolates));

//challenge3
dispenseChocolates=(num,chocolates)=>{
    chocolates.reverse();
    const bottom=chocolates.slice(0,num);
    console.log(bottom);
    chocolates.reverse();
    for(i=0;i<num;i++)
    {
        chocolates.pop();
    }
    return bottom;
}
console.log(dispenseChocolates(5,chocolates));

//challenge4
dispenseChocolatesOfColor = (chocolates,color,num) => {
    chocolates.reverse();
    let prefered=[];
    let j=0;
    let count=0;
    for(i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color && count<num)
        {
            prefered[j]=chocolates[i];
            j++;
            count+=1;
            chocolates.splice(i, 1);
        }
    }
    chocolates.reverse();
    return prefered;
}
console.log(dispenseChocolatesOfColor(chocolates,'blue',5));


//challenge5
noOfChocolates=(chocolates)=>{
    let green=chocolates.filter(x => x=='green').length;
    let silver=chocolates.filter(x => x=='silver').length;
    let blue=chocolates.filter(x => x=='blue').length;
    let crimson=chocolates.filter(x => x=='crimson').length;
    let purple=chocolates.filter(x => x=='purple').length;
    let red=chocolates.filter(x => x=='red').length;
    let pink=chocolates.filter(x => x=='pink').length;
    
    return [green,silver,blue,crimson,purple,red,pink];
}
   console.log(noOfChocolates(chocolates));
   
//challenge7
changeChocolateColor=(chocolates,num,color,finalColor)=>{
    let j=0;
        for(i=0;i<chocolates.length;i++)
        {
            if(chocolates[i]==color && j<num)
            {
               chocolates[i]=finalColor;
               j++;
            }
        }
    return chocolates;
}
   console.log(changeChocolateColor(chocolates,5,'blue','green'));

//challenge8
countofFinalColorChocolates=(chocolates,color,finalColor)=>{
    let j=0;
        for(i=0;i<chocolates.length;i++)
        {
            if(chocolates[i]==color)
            {
               chocolates[i]=finalColor;
               j++;
            }
        }
    return [j,chocolates];
}
   console.log(countofFinalColorChocolates(chocolates,'silver','blue'));