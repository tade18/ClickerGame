


const planet = document.getElementById("planet");
const moneycounter = document.getElementById("moneycounter");
const doubleupgrade = document.getElementById("doubleupgrade");
const autoupgrade = document.getElementById("autoupgrade");

let money = 0;
let moneyincrease = 1;
let autoclickincrease = 0;
let autoclicker;
let autoclickerPrice = 100;




planet.onclick = () => {
    console.log("click");
    money += moneyincrease;
    console.log(money);
    moneycounter.innerText = "Vesmírné kredity: " + money;
}

doubleupgrade.onclick = () => {
    if (money >= 60) {
        //odectu 60 kreditů
        money -= 60;
        moneycounter.innerText = "Vesmírné kredity: " + money;
        moneyincrease++;
    }
}
autoupgrade.onclick = () => {
    if (money >= autoclickerPrice) {
        //odectu 100 kreditů
        money -= autoclickerPrice;
        //aktualizujji odstavec
        moneycounter.innerText = "Vesmírné kredity: " + money;
        //zvedne cenu upgradu
        autoclickerPrice +=100;
        //zobrazí novou cenu
        autoupgrade.innerText = "Najmout pracovníky(autoclick): "+ autoclickerPrice;
        //zvedne se hodnota
        autoclickincrease++;
        //zastavení intervalu
        clearInterval(autoclicker);
        //opakovani po case pro pridani kreditu
        autoclicker = setInterval(() => {
            money += autoclickincrease;
            moneycounter.innerText = "Vesmírné kredity: " + money;
        }, 1000)
    }
}
const turnOnCheats = () => {
    money += 10000;
    moneycounter.innerText = "Vesmírné kredity: " + money;
}
