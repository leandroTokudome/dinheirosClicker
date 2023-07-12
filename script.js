dpsEsp = 1
dpsCoach = 10
dpsInv = 80
dpsBnk = 470
dpsFsp = 2600
dpsCas = 14000
dpsPol = 78000
dpsMul = 440000

espScale = 15
coachScale = 800
invScale = 4250
bnkScale = 22500
fspScale = 120000
casScale = 636000
polScale = 3370800
mulScale = 18000000

realCostEsp = 15
realCostCoach = 1000
realCostInv = 11000
realCostBnk = 120000
realCostFsp = 1300000
realCostCas = 14000000
realCostPol = 200000000
realCostMul = 3300000000

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
simplifiedBuildCost = 0
simplifiedDps = 0
simplifiedDpc = 1
dpsTotal = 0
dpcPercent = 0
upgOn = false
dpc = 1

var botaoDinheiros = document.getElementById("dinheirosButton") 

const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};

document.getElementById("dinheirosButton").addEventListener("click", function removeFocus() {
    this.blur();
})

function clickDinheiros() {
    realDinheiros += dpc
    simplifyDinheiros()
}

function second() {
    setInterval(totalDps, 1000)
}

function totalDps() {
    realDinheiros += dpsTotal
    simplifyDinheiros()
    simplifyDps()
}

function builds(realCost, idBuild, buildDps, buildQnt, buildScale) {
    if (!upgOn) {
        if (realDinheiros >= window[realCost]) {
            dpsTotal = Number(dpsTotal) + buildDps
            realDinheiros = Number(realDinheiros) - window[realCost]
            buildQnt.innerHTML = Number(buildQnt.innerHTML) + 1
            window[realCost] += buildScale
            dpcAdd()
            simplifyBuild(realCost, idBuild)
            simplifyDps()
            simplifyDinheiros()
            simplifyDpc()
        }
    }
    }

function upgrades(upgTrue, dpsUpg, qntUpg, price, idUpg) {
    if (!upgOn) {
        if (upgTrue && (realDinheiros >= price)) {
            window[dpsUpg] *= 2
            dpsTotal = dpsTotal + (qntUpg.innerHTML * window[dpsUpg]) - Number(qntUpg.innerHTML) * window[dpsUpg] / 2
            realDinheiros = Number(realDinheiros) - price
            simplifyDps()
            simplifyDpc()
            simplifyDinheiros()
            dpcAdd()
            idUpg.remove()
        }
    }
}

function upgradeShow(buildQnt, idBuild, buildScale) {
    if (buildQnt.innerHTML == 10) {
        document.getElementById(idBuild + `00`).style.display = "block"
    }
    if (buildQnt.innerHTML == 25) {
        document.getElementById(idBuild + `01`).style.display = "block"
        window[buildScale] *= 2
    }
    if (buildQnt.innerHTML == 50) {
        document.getElementById(idBuild + `02`).style.display = "block"
    }
    if (buildQnt.innerHTML == 100) {
        document.getElementById(idBuild + `03`).style.display = "block"
        window[buildScale] *= 2
    }
    if (buildQnt.innerHTML == 150) {
        document.getElementById(idBuild + `04`).style.display = "block"
    }
    if (buildQnt.innerHTML == 200) {
        document.getElementById(idBuild + `05`).style.display = "block"
        window[buildScale] *= 2
    }
    if (buildQnt.innerHTML == 300) {
        document.getElementById(idBuild + `06`).style.display = "block"
    }
    if (buildQnt.innerHTML == 400) {
        document.getElementById(idBuild + `07`).style.display = "block"
    }
}

function upgradeTemp() {
    upgOn = true
    dpc *= 30
    setTimeout(upgradeTempOff, 25000)
    buttonUpgTemp.style.display = `none`
    simplifyDpc()
}

function upgradeTempOff() {
    upgOn = false
    dpc /= 30
    simplifyDpc()
}

setInterval(upgradeTempShow, 300000)

function upgradeTempShow() {
    buttonUpgTemp.style.display = `block`
    setTimeout(upgradeTempShowOff, 30000)
}

function upgradeTempShowOff() {
    buttonUpgTemp.style.display = `none`
}

function dpcPercentAdd(upgCost) {
    if (!upgOn) {
        if (realDinheiros >= upgCost) {
            dpcPercent += 0.01
            dpcAdd()
        }
    }
}

function dpcAdd() {
    if (!upgOn) {
        if (dpcPercent != 0) {
            dpc = dpsTotal * dpcPercent
            dpc = Math.round(dpc)
            simplifyDpc()
        }
    }
}

function simplifyDps() {
    simplifiedDps = dpsTotal.toLocaleString()
    dpsDisplay.innerHTML = simplifiedDps
}

function simplifyDpc() {
    simplifiedDpc = dpc.toLocaleString()
    dpcDisplay.innerHTML = simplifiedDpc
}

function simplifyDinheiros() {
    simplifiedNumberDinheiros = realDinheiros.toLocaleString()
    dinheiros.innerHTML = simplifiedNumberDinheiros
}

function simplifyBuild(realCost, idBuild) {
    simplifiedBuildCost = (window[realCost]).toLocaleString()
    document.getElementById(idBuild).innerHTML = simplifiedBuildCost
}

second()