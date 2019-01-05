function add (a,b) {
    if(typeof a != 'number' || typeof b != 'number'){
       return 'Parameters should be type number';
    }
    return a+b;
}

