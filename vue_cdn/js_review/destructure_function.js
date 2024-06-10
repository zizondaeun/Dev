function total(num, ...arr){
    let sum = 0;
    let avg = 0;
    sum = arr.reduce((c, d) => c + d, num);
    avg = sum / arr.length;
    return {sum, avg};
}

let result = total(1,2,3,4,5)
console.log('sum=' , result.sum, 'avg=', result.avg)

let {sum, avg} = total(10,20,30,40,50)
console.log(sum, avg);