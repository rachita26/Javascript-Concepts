// input = {1,2,5,7,9,10}
// t = 14
// Output - [5,9]

// O(n^2)

// 14 - 1 13

// map.set(1, index)
// 2
// 5
// 7

// max = input[l-1]


function sum(input, t){
    let map = new Map();
    for(let i=0; i<input.length; i++){
        let diff = t - input[i];
        if(map.has(diff))
        {
            return [input[i], diff]
        }
        else{
            map.set(input[i], i)
        }
    }
    return [-1, -1];
}

const input = [1,2,5,7,9,10];
const res = sum(input, 12);
console.log(res);



