/* array_map.js
    map함수
*/
//map
let arr = [1,2,3]
let result = arr.map((a) => (a * a))
console.log(result);

let userArr = [
    {userid:1, score:60},
    {userid:2, score:50},
    {userid:3, score:70},
    {userid:4, score:40}
];
let newArr = userArr.map(a => {if(a.score >= 60) return {...a, grade : true};
                                else return {...a, grade : false};
        });
console.log(userArr);
console.log(newArr);