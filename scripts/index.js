
(function () {

    let buttonElement1;
    let buttonElement2;
    const voice = new Audio("./audios/Vaup.wav");

    let count = -1;

    const texts = [
        "バージョンアップの準備ができました。<br>再起動を行うと開始されます。",
        "メンテナンスを行ってる為、通常運営を停止しています。",
    ]

    document.addEventListener("DOMContentLoaded", () => onLoaded());


    function onLoaded() {
        buttonElement1 = document.getElementById("button1");
        buttonElement2 = document.getElementById("button2");
        fadeButton();
        playAnnounce();
        setInterval(() => fadeButton(), 1000 * 5);
        setInterval(() => playAnnounce(), 1000 * 60 * 2);
    }


    function fadeButton() {
        buttonElement1.classList.add("hide");

        setTimeout(() => {
            count++;

            if (count >= texts.length) {
                count = 0;
            }

            // buttonElement1.innerText = texts[count] || "error";
            // buttonElement2.innerText = texts[count] || "error";
            buttonElement1.classList.remove("hide");
        }, 1000);
    }


    function playAnnounce() {
        voice.play();
    }   
})();