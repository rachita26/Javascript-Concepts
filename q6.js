function f(b){
    var i = 2;
    a();
    // setTimeout(()=>{
    //     console.log(b,i);
    // },1000)
    function a(){
        var q=1;
        console.log(b,i,q);
    }
}
var b = 3;
f(b);
f(4);
    

