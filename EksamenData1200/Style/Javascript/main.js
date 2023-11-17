/* ----- JAVASCRIPT FOR HJEM-SIDEN ---- */
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


/* ----- JAVASCRIPT FOR DARKMODE ---- */
// Hent knappen og body elementet 
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeDot = document.getElementById("dark-mode-dot")
const body = document.body;

// Lytt etter klikk på knapp
darkModeToggle.addEventListener("click", function(){
    // Sjekker om body allerede har klassen 'dark-mode'
    if(body.classList.contains("dark-mode")){
        // Hvis den har det, fjern 'dark-mode' klassen for å deaktivere Dark Mode
        body.classList.remove("dark-mode");
        darkModeDot.classList.remove("green-dot"); //Fjerner den grønne prikken
    }else{
        // Hvis den ikke har det, legg til 'dark-mode' klassen for å aktivere Dark Mode
        body.classList.add("dark-mode"); 
        darkModeDot.classList.add("green-dot"); //Legger til den grønne prikken
    }
});


/* ----- Javascript for kantine.html ----- */
/*Filtrerer kantineelementer*/
function filtrerSok(e){
    const spiseSted = document.querySelectorAll(".kantineContainer div");
    let filter = e.target.dataset.filter;
    if (filter === '*') {
      spiseSted.forEach(spiseSted => spiseSted.classList.remove('hidden'));
    }  
    else {
      spiseSted.forEach(spiseSted => {
        spiseSted.classList.contains(filter) ? 
        spiseSted.classList.remove('hidden') : 
        spiseSted.classList.add('hidden');
      });
    };
};

/* ----- Javascript for datatorget.html ----- */


