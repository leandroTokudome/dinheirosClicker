dpsEsp = 1
dpsCoach = 5
dpsInv = 35
dpsBnk = 100
dpsFsp = 250
dpsPol = 400

buyEsp = false
buyCoach = false
buyInv = false
buyBnk = false
buyFsp = false
buyPol = false

dpsPrincipal = 0
dpc = 1

function clickDinheiros() {
    dinheiros.innerText = Number(dinheiros.innerText) + dpc
}

function second() {
    setInterval(totalDps, 1000)
}

function totalDps() {
    dinheiros.innerText = Number(dinheiros.innerText) + dpsPrincipal
}

function builds() {

    if (buyEsp) {

        if (dinheiros.innerText >= Number(espCost.innerText)) {
            dpsPrincipal = Number(dpsPrincipal) + dpsEsp
            dinheiros.innerText = Number(dinheiros.innerText) - Number(espCost.innerText)
            qntEsp.innerText = Number(qntEsp.innerText) + 1
            espCost.innerText = Number(espCost.innerText) + 20
            dpsDisplay.innerText = dpsPrincipal
            upgradeShow()

        }
        
        buyEsp = false

    }

    else if (buyCoach) {

        if (dinheiros.innerText >= Number(coachCost.innerText)) {
            dpsPrincipal = Number(dpsPrincipal) + dpsCoach
            dinheiros.innerText = Number(dinheiros.innerText) - Number(coachCost.innerText)
            qntCoach.innerText = Number(qntCoach.innerText) + 1
            coachCost.innerText = Number(coachCost.innerText) + 100
            dpsDisplay.innerText = dpsPrincipal
            upgradeShow()
        }

        buyCoach = false

    }

    else if (buyInv) {

        if (dinheiros.innerText >= Number(invCost.innerText)) {
            dpsPrincipal = Number(dpsPrincipal) + dpsInv
            dinheiros.innerText = Number(dinheiros.innerText) - Number(invCost.innerText)
            qntInv.innerText = Number(qntInv.innerText) + 1
            invCost.innerText = Number(invCost.innerText) + 250
            dpsDisplay.innerText = dpsPrincipal
            upgradeShow()
        }

        buyInv = false

    }

    else if (buyBnk) {

        if (dinheiros.innerText >= Number(bnkCost.innerText)) {
            dpsPrincipal = Number(dpsPrincipal) + dpsBnk
            dinheiros.innerText = Number(dinheiros.innerText) - Number(bnkCost.innerText)
            qntBnk.innerText = Number(qntBnk.innerText) + 1
            bnkCost.innerText = Number(bnkCost.innerText) + 500
            dpsDisplay.innerText = dpsPrincipal
            upgradeShow()
        }

        buyBnk = false

    }

    else if (buyFsp) {

        if (dinheiros.innerText >= Number(fspCost.innerText)) {
            dpsPrincipal = Number(dpsPrincipal) + dpsFsp
            dinheiros.innerText = Number(dinheiros.innerText) - Number(fspCost.innerText)
            qntFsp.innerText = Number(qntFsp.innerText) + 1
            fspCost.innerText = Number(fspCost.innerText) + 750
            dpsDisplay.innerText = dpsPrincipal
            upgradeShow()
        }

        buyFsp = false

    }

    else if (buyPol) {
        if (dinheiros.innerText >= Number(polCost.innerText)) {
            dpsPrincipal = Number(dpsPrincipal) + dpsPol
            dinheiros.innerText = Number(dinheiros.innerText) - Number(polCost.innerText)
            qntPol.innerText = Number(qntPol.innerText) + 1
            polCost.innerText = Number(polCost.innerText) + 1000
            dpsDisplay.innerText = dpsPrincipal
            upgradeShow()
        }

        buyPol = false

    }
}

function brandaoUpgrade() {
    if (dinheiros.innerText >= 400) {
        dpsEsp = dpsEsp * 2
        dpsPrincipal = dpsPrincipal + (qntEsp.innerText * dpsEsp) - Number(qntEsp.innerText) * dpsEsp / 2
        dpsDisplay.innerText = dpsPrincipal
        dinheiros.innerText = Number(dinheiros.innerText) - 400
        brandao.remove()
    }
}

function upgradeShow() {
    if (qntEsp.innerText == 25) {
        brandao.style.display = "block"
    }
}

function dpcAdd() {
    dpcDisplay.innerText = Number(dpc)
}

second()