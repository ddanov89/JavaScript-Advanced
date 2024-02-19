function GCD(a, b) {
    let GCD = a % b;
    while (GCD !== 0) {
        a = b;
        b = GCD;
        GCD = a % b;
    }
    console.log(GCD);
}
GCD(15, 5);
GCD(2154, 458);