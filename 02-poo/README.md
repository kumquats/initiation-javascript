# TP 1 - ES6

## Objectifs
Utiliser la POO en JS et notamment les notions d'héritage.

## Instructions

### Classes & héritage
1. **Créer une classe `Component` ayant les caractéristiques suivantes** :
	+ **le constructeur** prend en paramètre
		- une chaîne nommée `tag`
		- un objet nommé `attribute`
		- un tableau nommé `children`

		Ces trois paramètres sont pour le moment simplement sauvegardés dans des propriétés de l'instance: `this.tag`, `this.children` et `this.attribute`
	+ **la classe dispose d'une méthode `render()`**. Cette méthode retourne une chaîne de caractères au format html qui correspond à une balise du type de l'attribut `tag` passé dans le constructeur. Si le tableau `children` n'est pas vide, le contenu retourné entre les balises ouvrantes et fermantes correspond à la première valeur du tableau <br>Par exemple : si `tag` vaut `"div"` et que `children` vaut `[ "youpi", "ça", "marche" ]` alors `render()` retournera une chaîne `"<div>youpi</div>"` (les 2 dernières valeurs du tableau sont pour le moment ignorées).

2. **Pour tester le bon fonctionnement de la classe, instancier un Component de type `h1`** avec comme enfant un tableau contenant une seule valeur : une chaîne `"Liste des vidéos"`. Puis afficher le résultat de l'appel à la méthode `render()` de cette instance dans la balise de classe CSS `"pageTitle"`.

3. **Modifier le fonctionnement de la méthode render pour prendre en compte le cas où `children` est vide** (`undefined`). Par exemple si je crée un Component de ce style :
   ```js
   const img = new Component( 'img' );
   ```
   `render()` doit retourner un code du type :
   ```html
   <img />
   ```
   et pas
   ```html
   <img></img>
   ```
   qui est un code html qui n'est pas valide.

4. **Modifier la méthode `render()` pour prendre en compte le paramètre `attribute`** : si le paramètre `attribute` a été fourni au constructeur, la méthode `render()` comme ceci :
   ```js
   const img = new Component( 'img', {name:'src', value:'images/catfail.jpg'} );
   ```
   `render()` doit retourner un code du type :
   ```html
   <img src="images/catfail.jpg" />
   ```
5. **Créer une nouvelle classe `Img`** qui hérite de `Component` et dont le constructeur s'utilise comme ceci :
	```js
	const img = new Img('images/catfail.jpg');
	```

6. **Modifier la méthode render() de la classe Component pour prendre en compte tous les children** (et non plus uniquement le premier élément). <br>Par exemple : si `tag` vaut `"div"` et que `children` vaut `[ "youpi", "ça", "marche" ]` alors `render()` retournera une chaîne `"<div>youpiçamarche</div>"`.

7. **Adapter la méthode `render()` pour permettre de passer dans `children`** non seulement des chaînes de caractères commme c'est déjà le cas mais aussi **d'autres `Component`** comme ceci :
	```js
	const c = new Component( 'li', null, [
		'JS',
		new Component( 'strong', null, ['FTW'] )
	] );
	```
	La méthode teste maintenant pour chaque enfant :
   - si cet enfant est lui même une instance de Component, elle fait alors appel à la méthode `render()` du Component enfant (récursivité)
   - si l'enfant est une chaîne de caractères, la chaîne est ajoutée telle qu'elle comme avant

	Pour tester si un enfant est de la classe `Component`, utiliser l'opérateur `instanceof` cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

8. **Créer une classe `VideoThumbnail`** qui hérite de la classe `Component` :
	+ le constructeur prend en paramètre un objet nommé `video` dont le format correspond à celui d'un élément du tableau `videos` (cad. propriétés title, thumbnail, video)
	+ la méthode render() retourne un code du type :
	```html
	<li class="media">
		<img src="images/nom de la thumbnail" >
		<h4>title de la video</h4>
	</li>
	```
9. **dans le main.js, modifier le parcours du tableau `videos` pour utiliser la classe `VideoThumbnail`** afin de rendre les vignettes de la liste.

10. **Passer les classes `Component`, `Img`, et `VideoThumbnail` dans des modules ES6 distincts**. Penser à modifier la balise `<script>` du fichier `index.html`
