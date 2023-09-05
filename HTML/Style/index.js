/* Javascript for tilbakemeldingsboksen */
function sendMelding(){
            var meldingsboks = document.getElementById("melding"); 
            meldingsboks.value = "Tilbakemelding sendt!"; /*Når knapp er trykket kommer tekst ut*/
        }


/*Javascript for navbar for mindre skjerm*/
/*Toggle-funksjon for mobilmeny*/
function toggleMobilMeny () {
    var mobilmeny = document.getElementById("mobilmeny");
    if (mobilmeny.style.display === "none" || mobilmeny.style.display === "") {
        mobilmeny.style.display = "flex";
    } else{
        mobilmeny.style.display = "none";
    }
}

/*Hendelse for å åpne mobilmeny*/
document.getElementById("menyToggle").addEventListener("click", toggleMobilMeny);
/*hendelse for å lukke mobilmeny*/
document.getElementById("lukkMeny").addEventListener("click", toggleMobilMeny);