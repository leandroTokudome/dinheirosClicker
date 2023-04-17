
dpsEsp = 1
dpsCoach = 5
dpsInv = 35
dpsBnk = 100
dpsFsp = 250
dpsCas = 300
dpsPol = 400
dpsMul = 1000

buyEsp = false
buyCoach = false
buyInv = false
buyBnk = false
buyFsp = false
buyCas = false
buyPol = false
buyMul = false

espScale = 20
coachScale = 100
invScale = 250
bnkScale = 500
fspScale = 750
casScale = 800
polScale = 1000
mulScale = 3000

upgsEsp = [upgEsp00 = false, upgEsp01 = falseupgEsp02 = false, upgEsp03 = false, upgEsp04 = false, upgEsp05 = false, upgEsp06 = false, upgEsp07 = false]
upgsCoach = [upgCoach00 = false, upgCoach01 = false, upgCoach02 = false, upgCoach03 = false, upgCoach04 = false, upgCoach05 = false, upgCoach06 = false, upgCoach07 = false]
upgsInv = [upgInv00 = false, upgInv01 = false, upgInv02 = false, upgInv03 = false, upgInv04 = false, upgInv05 = false, upgInv06 = false, upgInv07 = false]
upgsBnk = [upgBnk00 = false, upgBnk01 = false, upgBnk02 = false, upgBnk03 = false, upgBnk04 = false, upgBnk05 = false, upgBnk06 = false, upgBnk07 = false]
upgsFsp = [upgFsp00 = false, upgFsp01 = false, upgFsp02 = false, upgFsp03 = false, upgFsp04 = false, upgFsp05 = false, upgFsp06 = false, upgFsp07 = false]
upgsCas = [upgCas00 = false, upgCas01 = false, upgCas02 = false, upgCas03 = false, upgCas04 = false, upgCas05 = false, upgCas06 = false, upgCas07 = false]
upgsPol = [upgPol00 = false, upgPol01 = false, upgPol02 = false, upgPol03 = false, upgPol04 = false, upgPol05 = false, upgPol06 = false, upgPol07 = false]
upgsMul = [upgMul00 = false, upgMul01 = false, upgMul02 = false, upgMul03 = false, upgMul04 = false, upgMul05 = false, upgMul06 = false, upgMul07 = false]

dpsTotal = 0
dpc = 1

document.getElementById("dinheirosButton").addEventListener("click", function removeFocus() {
this.blur();})

function clickDinheiros() {
    dinheiros.innerText = Number(dinheiros.innerText) + dpc
}

function second() {
    setInterval(totalDps, 1000)
}

function totalDps() {
    dinheiros.innerText = Number(dinheiros.innerText) + dpsTotal
}

function builds(buildCost, buildDps, buildQnt, buildScale) {
    if (dinheiros.innerText >= Number(buildCost.innerText)) {
        dpsTotal = Number(dpsTotal) + buildDps
        dinheiros.innerText = Number(dinheiros.innerText) - Number(buildCost.innerText)
        buildQnt.innerText = Number(buildQnt.innerText) + 1
        buildCost.innerText = Number(buildCost.innerText) + buildScale
        dpsDisplay.innerText = dpsTotal
    }
}

function upgrades() {
    if (dinheiros.innerText >= 400 && upgsEsp[1] == true) {
        timesTwoEsp(400)
        idUpgEsp00.remove()
    }

    if (upgsEsp[2] == true) {
        timesTwoEsp(600)
        idUpgEsp01.remove()
    }

    function timesTwoEsp(price) {
        dpsEsp = dpsEsp * 2
        dpsTotal = dpsTotal + (qntEsp.innerText * dpsEsp) - Number(qntEsp.innerText) * dpsEsp / 2
        dpsDisplay.innerText = dpsTotal
        dinheiros.innerText = Number(dinheiros.innerText) - price
    }
}

function upgradeShow(buildQnt, idBuild) {
    if (buildQnt.innerText == 25) {
        idBuild.style.display = "block"
    }
}

function dpcAdd() {
    dpcDisplay.innerText = Number(dpc)
}

second()