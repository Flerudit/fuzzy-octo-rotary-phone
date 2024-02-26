<?php

function calculerMoyenne($notes) {
    $somme = array_sum($notes);
    $nombre_notes = count($notes);
    if ($nombre_notes > 0) {
        return $somme / $nombre_notes;
    } else {
        return 0;
    }
}

$notes = [];
$action = null;

while ($action !== 'fin') {
    $action = readline("Entrez votre note (ou 'fin' pour terminer) : ");
    if ($action !== 'fin') {
        $notes[] = (int)$action;
    }
}

$moyenne = calculerMoyenne($notes);

if ($moyenne >= 10) {
    echo "Vous avez la moyenne.";
} else {
    echo "Vous n'avez pas la moyenne.";
}

?>
