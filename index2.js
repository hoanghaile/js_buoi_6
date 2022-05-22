function total() {
    const n = Number(document.getElementById('n').value)
    const x = Number(document.getElementById('x').value)
    let sum = 0
    let count = 1
    let xx = 0
    while (sum <= Math.pow(x, n)) {//0->n
        //
        sum = sum + Math.pow(x, count++)

    }
    document.getElementById('kq').innerHTML = sum
}

