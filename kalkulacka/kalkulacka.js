function spocitat() {
    let polomer_maly = document.getElementById("polomer_maly").value;
    let polomer_velky = document.getElementById("polomer_velky").value;
    let delka_strany = document.getElementById("delka_strany").value;
    let vyska = document.getElementById("vyska").value;
    if (polomer_maly != "" && polomer_velky != "") {
        if (delka_strany != "") {
            let polomer_maly = Number(document.getElementById("polomer_maly").value);
            let polomer_velky = Number(document.getElementById("polomer_velky").value);
            let delka_strany = Number(document.getElementById("delka_strany").value);
            let vyska = (Math.sqrt(delka_strany**2 - (polomer_velky - polomer_maly)**2))
            let povrch_output = String(polomer_maly**2 + polomer_velky**2 + delka_strany*(polomer_maly+polomer_velky));
            let povrch_plaste_output = String(delka_strany*(polomer_maly+polomer_velky));
            let objem_output = String((1/3)*(polomer_velky**2 + polomer_maly*polomer_velky + polomer_maly**2)*vyska)
            document.getElementById("povrch_output").innerText = "Povrch: " + povrch_output + "π";
            document.getElementById("povrch_plaste_output").innerText = "Obsah pláště: " + povrch_plaste_output + "π";
            document.getElementById("objem_output").innerText = "Objem: " + objem_output + "π";
        } 
        else if (vyska != "") {
            let polomer_maly = Number(document.getElementById("polomer_maly").value);
            let polomer_velky = Number(document.getElementById("polomer_velky").value);
            let vyska = Number(document.getElementById("vyska").value);
            let delka_strany = Math.sqrt(vyska**2 + (polomer_velky - polomer_maly)**2)
            let povrch_output = String(polomer_maly**2 + polomer_velky**2 + delka_strany*(polomer_maly+polomer_velky));
            let povrch_plaste_output = String(delka_strany*(polomer_maly+polomer_velky));
            let objem_output = String((1/3)*(polomer_velky**2 + polomer_maly*polomer_velky + polomer_maly**2)*vyska)
            document.getElementById("povrch_output").innerText = "Povrch: " + povrch_output + "π";
            document.getElementById("povrch_plaste_output").innerText = "Obsah pláště: " + povrch_plaste_output + "π";
            document.getElementById("objem_output").innerText = "Objem: " + objem_output + "π";
        }
        else {
            document.getElementById("povrch_output").innerText = "INVALID INPUT";
            document.getElementById("povrch_plaste_output").innerText = "";
            document.getElementById("objem_output").innerText = "";
        }
    } 
    else {
        document.getElementById("povrch_output").innerText = "INVALID INPUT";
        document.getElementById("povrch_plaste_output").innerText = "";
        document.getElementById("objem_output").innerText = "";
    }
}