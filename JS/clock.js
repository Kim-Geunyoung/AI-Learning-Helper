const monthNames1 = [".01.", ".02.", ".03.", ".04.", ".05.", ".06.", ".07.", ".08.", ".09.", ".10.", ".11.", ".12."];
const monthNames = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
const nowTime = document.querySelector("#clock");
const nowDate = document.querySelector("#date");

function printTime() {
    const now = new Date();
    nowDate.innerText = `${now.getFullYear()} ${monthNames1[now.getMonth()]} ${String(now.getDate()).padStart(2, "0")}`;
    nowTime.innerText = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
}

printTime();
setInterval(printTime,1000);