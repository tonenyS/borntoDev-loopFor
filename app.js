let qrt = prompt("กรอกจำนวณสินค้าของคุณ")
let sum = 0
for(let i=1; i<=qrt; i++){
    let print = prompt("กรอกราคาสินค้าชิ้นที่ :"+i)
    sum = sum + parseInt(print)
    document.getElementById("number").innerHTML += "ราคาสินค้าชิ้นที่ "+i +":" +print +"บาท"+"<br>"
    document.getElementById("sums").innerHTML = "ราคารวมสินค้าทั้งหมด :" +sum +"บาท"
}