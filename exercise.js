arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let arr2 = arr.reduce((index,Value,array)=>{
    console.log(index)
    return Value*index
})
console.log(arr2)