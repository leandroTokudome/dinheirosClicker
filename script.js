dpsEsp = 1
dpsCoach = 5
dpsInv = 35
dpsBnk = 100
dpsFsp = 250
dpsCas = 300
dpsPol = 400
dpsMul = 1000

espScale = 20
coachScale = 100
invScale = 250
bnkScale = 500
fspScale = 750
casScale = 800
polScale = 1000
mulScale = 3000

upgsEsp = [upgEsp00 = false, upgEsp01 = false, upgEsp02 = false, upgEsp03 = false, upgEsp04 = false, upgEsp05 = false, upgEsp06 = false, upgEsp07 = false]
upgsCoach = [upgCoach00 = false, upgCoach01 = false, upgCoach02 = false, upgCoach03 = false, upgCoach04 = false, upgCoach05 = false, upgCoach06 = false, upgCoach07 = false]
upgsInv = [upgInv00 = false, upgInv01 = false, upgInv02 = false, upgInv03 = false, upgInv04 = false, upgInv05 = false, upgInv06 = false, upgInv07 = false]
upgsBnk = [upgBnk00 = false, upgBnk01 = false, upgBnk02 = false, upgBnk03 = false, upgBnk04 = false, upgBnk05 = false, upgBnk06 = false, upgBnk07 = false]
upgsFsp = [upgFsp00 = false, upgFsp01 = false, upgFsp02 = false, upgFsp03 = false, upgFsp04 = false, upgFsp05 = false, upgFsp06 = false, upgFsp07 = false]
upgsCas = [upgCas00 = false, upgCas01 = false, upgCas02 = false, upgCas03 = false, upgCas04 = false, upgCas05 = false, upgCas06 = false, upgCas07 = false]
upgsPol = [upgPol00 = false, upgPol01 = false, upgPol02 = false, upgPol03 = false, upgPol04 = false, upgPol05 = false, upgPol06 = false, upgPol07 = false]
upgsMul = [upgMul00 = false, upgMul01 = false, upgMul02 = false, upgMul03 = false, upgMul04 = false, upgMul05 = false, upgMul06 = false, upgMul07 = false]

realDinheiros = 0
simplifiedNumberDinheiros = 0
simplifiedDps = 0
simplifiedDpc = 1
dpsTotal = 0
dpcPercent = 0
dpc = 1

document.getElementById("dinheirosButton").addEventListener("click", function removeFocus() {
    this.blur();
})

function clickDinheiros() {
    realDinheiros += dpc
    simplify()
}

function second() {
    setInterval(totalDps, 1000)
}

function totalDps() {
    realDinheiros += dpsTotal
    simplify()
}

function builds(buildCost, buildDps, buildQnt, buildScale) {
    if (realDinheiros >= Number(buildCost.innerHTML)) {
        dpsTotal = Number(dpsTotal) + buildDps
        realDinheiros = Number(realDinheiros) - Number(buildCost.innerHTML)
        buildQnt.innerHTML = Number(buildQnt.innerHTML) + 1
        buildCost.innerHTML = Number(buildCost.innerHTML) + buildScale
        dpcAdd()
        simplify()
    }
}

function upgrades(upgTrue, dpsUpg, qntUpg, price, idUpg) {
    if (upgTrue && (realDinheiros >= price)) {
        window[dpsUpg] *= 2
        dpsTotal = dpsTotal + (qntUpg.innerHTML * window[dpsUpg]) - Number(qntUpg.innerHTML) * window[dpsUpg] / 2
        realDinheiros = Number(realDinheiros) - price
        simplify()
        dpcAdd()
        idUpg.remove()
    }
}

function upgradeShow(buildQnt, idBuild) {
    if (buildQnt.innerHTML == 25) {
        document.getElementById(idBuild + `00`).style.display = "block"
    }
    if (buildQnt.innerHTML == 50) {
        document.getElementById(idBuild + `01`).style.display = "block"
    }
    if (buildQnt.innerHTML == 75) {
        document.getElementById(idBuild + `02`).style.display = "block"
    }
    if (buildQnt.innerHTML == 100) {
        document.getElementById(idBuild + `03`).style.display = "block"
    }
    if (buildQnt.innerHTML == 125) {
        document.getElementById(idBuild + `04`).style.display = "block"
    }
    if (buildQnt.innerHTML == 150) {
        document.getElementById(idBuild + `05`).style.display = "block"
    }
    if (buildQnt.innerHTML == 175) {
        document.getElementById(idBuild + `06`).style.display = "block"
    }
    if (buildQnt.innerHTML == 200) {
        document.getElementById(idBuild + `07`).style.display = "block"
    }
}

function dpcPercentAdd() {
    dpcPercent += 0.01
    dpcAdd()
}

function dpcAdd() {
    if (dpcPercent != 0) {
        dpc = dpsTotal * dpcPercent
        dpc = Math.round(dpc)
        simplify()
    }
    } 

function simplify() {
    simplifiedNumberDinheiros = realDinheiros.toLocaleString()
    dinheiros.innerHTML = simplifiedNumberDinheiros
    simplifiedDpc = dpc.toLocaleString()
    dpcDisplay.innerHTML = simplifiedDpc
    simplifiedDps = dpsTotal.toLocaleString()
    dpsDisplay.innerHTML = simplifiedDps
}

second()