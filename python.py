def calculer_moyenne(notes):
    somme = sum(notes)
    nombre_notes = len(notes)
    if nombre_notes > 0:
        return somme / nombre_notes
    else:
        return 0

notes = []
action = None

while action != 'fin':
    action = input("Entrez votre note (ou 'fin' pour terminer) : ")
    if action != 'fin':
        notes.append(float(action))

moyenne = calculer_moyenne(notes)

if moyenne >= 10:
    print("Vous avez la moyenne.")
else:
    print("Vous n'avez pas la moyenne.")
