
for(i = 0; i < 10; i++) {
    p = "Paragraph " + i;
    document.querySelector("#para").textContent = p;
    console.log(i);
}

document.getElementById("content").innerHTML = "<h2>Live is not worth it</h2>";