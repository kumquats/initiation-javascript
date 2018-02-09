# TP 3 - Modules & typage

## Objectifs
Utiliser la mécanique de modules pour une meilleure organisation du code. Tester le typage avec Flow.

## Préparatifs
NB : L'utilisation des modules se fait habituellement grâce à [webpack](https://webpack.js.org/). Cet outil s'installe via npm, et s'utilise en ligne de commande : à chaque modification du code, un nouveau fichier js minifié est généré. Pour simplifier la mise en place du TP nous allons utiliser un équivalent qui à l'avantage de pouvoir s'exécuter au runtime : [systemJS](https://github.com/systemjs/systemjs).
1. Télécharger systemJS depuis le repo github : https://github.com/systemjs/systemjs
1. Inclure le JS de systemJS dans la page html **à la place** du main.js
1. Immédiatement après SystemJS, créer une balise script dans laquelle se trouvera le code suivant :
```js
SystemJS.import('./main.js');
```
1. Configurer SystemJS pour prendre en compte la syntaxe ES6 via le plugin-babel : cf. https://github.com/systemjs/plugin-babel
1. Tester que la page continue de fonctionner normalement, et constater dans l'inspecteur Réseau, que le fichier JS est bien chargé


## Instructions
### Modules
1. Sortir les classes Component et VideoThumbnail dans des modules distincts

### Typage
1. Ajouter des informations de typage aux méthodes et paramètres de chaque classe puis tester la conformité de votre code dans https://flow.org/try/