let number = prompt("กรอกสินค้าของคุณ")
resultsum = 0
for(var i = 1 ; i <= number; i++){
    let result = prompt("กรอกราคาสินค้าของคุณ")
    document.getElementById("list").innerHTML +="สินค้าชิ้นที่" +i+"มีค่า"+result+"บาท"+"<br>"
    resultsum = resultsum + parseInt(result)
}document.getElementById("sum").innerHTML = "ราคารวมทั้งหมด" + resultsum +"บาท"