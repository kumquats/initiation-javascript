# TP 4 - API DOM & Ajax

## Objectifs
Charger des données en AJAX. Utiliser l'API DOM pour modifier le contenu de la page au clic sur un lien.

## Préparatifs
1. Récupérer les fichiers de demarrage ou au minimum le dossier `/videos`

## Instructions
### AJAX
1. Supprimer le tableau videos du fichier main.js
1. Charger avec AJAX et l'api fetch le fichier videos/data.json
1. Utiliser les données qu'il contient pour générer l'affichage des vignettes correspondantes

### API DOM
1. Modifier le rendu de la classe Thumbnail pour remplacer la div par un lien `<a href="#">` autour de l'image et du titre
1. Créer un composant `VideoPlayer` dont le constructeur prend un objet video (un élément du json) et dont la méthode render retourne une div dans laquelle on retrouve :
	- une balise h1 contenant le titre de la video
	- un player `<video>` permettant de lire la vidéo
	- un bouton "retour"
1. au clic sur un lien de la liste, remplacer la page par une page détail dont le contenu correspond au render du VideoPlayer
1. Au clic sur le bouton retour, revenir à la page liste