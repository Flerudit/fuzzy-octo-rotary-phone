function calculerMoyenne(notes) {
    const somme = notes.reduce((acc, curr) => acc + curr, 0);
    const nombreNotes = notes.length;
    if (nombreNotes > 0) {
        return somme / nombreNotes;
    } else {
        return 0;
    }
}

const notes = [];
let action = null;

while (action !== 'fin') {
    action = prompt("Entrez votre note (ou 'fin' pour terminer) : ");
    if (action !== 'fin') {
        notes.push(parseFloat(action));
    }
}

const moyenne = calculerMoyenne(notes);

if (moyenne >= 10) {
    console.log("Vous avez la moyenne.");
} else {
    console.log("Vous n'avez pas la moyenne.");
}
