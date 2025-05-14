console.log("jeg er i amalie.js a");

function hentPersoner() {
    console.log("hent personer kaldt");
    fetch("http://138.2.182.16:8080/api/persons")
        .then(response => {
            if (!response.ok) {
                throw new Error("Fejl i fetch: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data modtaget:", data);
            const liste = document.getElementById("personListe");
            liste.innerHTML = ""; // ryd listen først
            data.forEach(person => {
                const li = document.createElement("li");
                li.textContent = `${person.id}: ${person.name}`;
                liste.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Fejl ved hentning af personer:", error);
        });
}
