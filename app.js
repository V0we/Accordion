// Variables

let heading = document.getElementsByClassName('heading');
let answer = document.getElementsByClassName('answer')

for (i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function() {
       var panel = this.nextElementSibling;
        panel.classList.toggle('active') 
       
    })
}

