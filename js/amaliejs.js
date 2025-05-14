console.log("jeg er i amalie.js");

function hentPersoner() {
    fetch("http://138.2.182.16:8080/api/persons")
        .then(response => response.json())
        .then(data => {
            const liste = document.getElementById("personListe");
            liste.innerHTML = "";
            data.forEach(person => {
                const li = document.createElement("li");
                li.textContent = person.name;
                liste.appendChild(li);
            });
        })
        .catch(err => console.error("Fejl ved hentning:", err));
}