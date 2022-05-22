function total() {
    const n = Number(document.getElementById('number').value)

    let sum = 1;
    let count = 1
    while (count <= n) {
        sum = sum * count
        count++

    }
    document.getElementById('kq').innerHTML = sum
}