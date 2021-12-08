function findMax() {
    if (arguments.length === 0) {
        return null;
    }
    let max = -Infinity;
    for (let i in arguments) {
        if (arguments[i] ==="" || !Number.isSafeInteger(Number(arguments[i]))) {
            throw "Big Error";
        }
        else{
            arguments[i] = BigInt(Number(arguments[i]));
            arguments[i] > max ? max = arguments[i]: max = max;
        }
    }
    return max
}
try {
    console.log(findMax(""));
}
catch(err) {
    console.log(err)
}