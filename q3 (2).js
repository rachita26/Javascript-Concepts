var n = 3;

function f(n){
    let v = '';
    let div = n;
    while(n != 0){
        v = v + (n%2)
        n = n/2; 
        console.log(n,v);
    }
    console.log(v);
}
f(3)