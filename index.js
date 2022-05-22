function total() {
    let sum = 0;
    let count = 0
    while (sum < 10000) {
        count++;
        sum = sum + count
    }

    document.getElementById('kq').innerHTML = count

}
// total()