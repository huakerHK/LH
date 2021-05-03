function rand(m,n) {
    return Math.ceil(Math.random() * (n-m+1) + m-1)
}
function myjs() {
    let num = 100;
    for (let i=0;i<num;i++) {
        const i = document.createElement('i');
        i.style.height = rand(30,100) + "px";
        i.style.left = rand(1,99) + "vw";
        i.style.animationDuration = rand(5,30) / 10 + 's';
        document.querySelector('.container').appendChild(i);
    }
}
function MyDate() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d= date.getDate();
    document.getElementById("date").innerHTML = y + "年" + m + "月" + d + "日";
    console.log("3")
}
export {
    myjs,MyDate
}