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