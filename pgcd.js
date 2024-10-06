
function pgcd(a,b){
    a = Math.abs(a);
    b = Math.abs(b);
    if(b>a){
        var  temp = a ;
        a = b ;
        b = temp 
    }
    while(true){
        if ( a=== 0) return a;
           a %= b;
           if(a === 0) return b;
           b %= a;
     }
}

console.log( "le pgcd de 60 et 36 ",pgcd(60,36))
console.log( "le pgcd de 40 et 20 ",pgcd(40,20))


                                                                                                                                            