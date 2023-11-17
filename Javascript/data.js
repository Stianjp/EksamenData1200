/*
her har jeg lagt inn litt javascript for å få mer "liv" i slideshowet som ligger på datatorg siden.
*/ 



/*når slideshowet som er classet .hiddendata kommer opp for seeren av siden legger den til klasen 'show' 
som gjør at den blir synlig på siden (se css koden). og når brukeren fjerner siden forsvinner slideshowet igjen. ("else" delen)
*/
const observer = new IntersectionObserver((entries) => {   
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }  
    });
});

const hiddenElements = document.querySelectorAll('.hiddendata');
hiddenElements.forEach((el) => observer.observe(el));

