function sumDifference(endnumber) {
    var kareToplam = 0;
    var toplamKare = 0;
    for (var i = 1; , <= endnumber; i++)
    {
        kareToplam += Math.pow(i, 2);
        toplamKare += i;
    }
    toplamKare = Math.pow(toplamKare, 2);
    return toplamKare - kareToplam;
}