let randomNumber = 0;
let checkCount = 0;

const reset = () => {
    document.getElementById('num').value = "";
    randomNumber = Math.floor(Math.random() * 1000);
    checkCount = 0;
    document.getElementById('check').innerHTML = "チェック！";
    document.querySelector(".message-container").innerHTML = "";
    document.querySelector(".message-container").classList.remove('complete');
};

(() => {
    reset();

    document.getElementById('check').addEventListener('click', () => {
        if (document.getElementById('check').innerHTML == "リセット") {
            reset();
            return;
        }

        let inputNum = document.getElementById('num').value;

        checkCount += 1;
        
        if (inputNum > 999 || inputNum < 100) {
            document.querySelector(".message-container").innerHTML = "その数字はそもそも3桁じゃありません！";
        } else if (inputNum > randomNumber) {
            document.querySelector(".message-container").innerHTML = "値はそれより小さいです！ (チェック回数: " + checkCount + "回)";
        } else if (inputNum < randomNumber) {
            document.querySelector(".message-container").innerHTML = "値はそれより大きいです！ (チェック回数: " + checkCount + "回)";
        /* } else if (inputNum > 999 || inputNum < 100) {
                document.querySelector(".message-container").innerHTML = "その数字はそもそも3桁じゃありません！"; */
        } else {
            document.querySelector(".message-container").innerHTML = "正解です！おめでとう！ (チェック回数: " + checkCount + "回)";
            document.querySelector(".message-container") .classList.add('complete');
            document.getElementById('check').innerHTML = "リセット";
        }

    });
})();
