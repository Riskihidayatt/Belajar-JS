function angkaTerbesar(arr){
    let max =arr[0]
    for(let i = 1; i < max.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log("Max number dari array adalah " + angkaTerbesar([12, 4, 25, 7, 19]));