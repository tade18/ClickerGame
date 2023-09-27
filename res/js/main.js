


    const planet = document.getElementById("planet");
    const moneycounter = document.getElementById("moneycounter");
    const doubleupgrade = document.getElementById("doubleupgrade")

    let money = 0;
    let moneyincrease = 1;


    planet.onclick = () => {
        console.log("click");
        money +=moneyincrease;
        console.log(money);
        moneycounter.innerText = "Vesmírné kredity: " + money;
    }

    doubleupgrade.onclick = () => {
        if (money >=60){
        money -= 60;
        moneycounter.innerText = "Vesmírné kredity: " + money;
        moneyincrease ++;
        }
    }

    