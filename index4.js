function total() {
    const btn = document.getElementById('btn').addEventListener('click', function () {
        let count = 0
        while (count <= 10) {
            if (count % 2 == 0) {
                document.getElementsByClassName('kq')[0].innerHTML += `<div class="text-white bg-primary">  day la div so${count}</div>`
            } else {
                document.getElementsByClassName('kq')[0].innerHTML += `<div class="text-white bg-danger">day la div so${count}</div>`
            }
            // document.getElementsByClassName('kq')[0].innerHTML += `<div class="text-success">${count}</div>`
            count++
        }
        console.log(count, 'count');
    })
}