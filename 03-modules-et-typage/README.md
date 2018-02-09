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
### Syntaxe de base ES6
1. Remplacer toutes les déclarations de variables par des `const` sauf pour les variables dont on va modifier la valeur.
1. Utiliser les template strings pour remplacer les concaténations de chaînes.
1. Vérifier dans le navigateur que le code continue de fonctionner (sinon utiliser l'onglet "Sources" des devtools et notamment les breakpoints) !
### Classes & héritage
1. Créer une classe `Component` ayant les caractéristiques suivantes :
	+ le constructeur prend en paramètre
		- une chaîne nommée `tag` et stocké en variable membre `this.tag`
		- un Array nommé `children` et stocké en variable membre `this.children`
	+ la classe dispose d'une méthode `render()` qui retourne une chaîne de caractères correspondant à une balise dont le type correspond à l'attribut `tag` passé dans le constructeur. ex: si `tag` vaut "div" alors on générera une chaîne `<div></div>`. à l'intérieur de la balise on insérera le résultat de l'appel à la méthode `renderChildren` (cf. ci-dessous)
	+ la méthode `renderChildren` retourne une chaîne de caractère dont le résultat dépend du contenu du tableau `children`. La méthode parcourt tous les `children` et ajoute le rendu de l'enfant à la valeur retournée. Pour chaque enfant la méthode teste :
		- si l'enfant est lui même une instance de Component, elle retourne un le résultat de l'appel à la méthode `render` du Component. Utiliser pour cela l'opérateur `instanceof` cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
		- si l'enfant est une chaîne de caractères, la chaîne est ajoutée telle qu'elle dans le résultat retourné
	si le tableau children est vide, on retourne une chaîne vide
		- sinon soit le résultat de l'appel à la fonction render de chaque Component enfant
1. Instancier un Component de type `h1` avec comme enfant juste un texte `"JSTube"` et afficher le résultat de l'appel à la méthode `render()` dans la page html.
1. Créer une classe `VideoThumbnail` qui hérite de la classe `Component` :
	+ le constructeur prend en paramètre un objet nommé `video` dont le format correspond à celui d'un élément du tableau `videos`(cad. propriétés title, thumbnail, video)
	+ la méthode render() retourne un code du type :
	```html
	<div class="thumbnail">
		<img src="images/nom de la thumbnail">
		<h2>title de la video</h2>
	</div>
	```
1. dans le main.js, modifier le parcours du tableau `videos` pour utiliser la classe `VideoThumbnail` afin de rendre les vignettes de la liste.
