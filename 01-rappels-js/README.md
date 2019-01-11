# TP 1 - Rappels JavaScript

## Objectifs

Manipuler les fonctions et types de base de JavaScript pour générer en JavaScript l'interface d'une application web que nous appellerons au hasard "JSTube".<br>
Ce TP sera aussi l'occasion de manipuler les outils de debug du navigateur (devtools).

## Note

#### _Pour tous les TP vous coderez en ES6+. Les syntaxes EcmaScript que vous pourrez utiliser dépendront de la version de votre navigateur._

Vous pouvez consulter le support navigateur des différentes fonctionnalités EcmaScript ici :

- pour ES6 : http://kangax.github.io/compat-table/es6/
- pour ES6, ES7, ES8, ES9 (ES2016+) : http://kangax.github.io/compat-table/es2016plus/
- pour les features en cours de spécification (comme les propriétés de classes, ou le mot clé `static`) : http://kangax.github.io/compat-table/esnext/

Par exemple si vous souhaitez utiliser les déclarations de propriétés dans le corps de la classe ([_"public instance class fields"_](http://kangax.github.io/compat-table/esnext/#test-instance_class_fields_public_instance_class_fields)) ou les propriétés privées ([_"private instance class fields basic support"_](http://kangax.github.io/compat-table/esnext/#test-instance_class_fields_private_instance_class_fields_basic_support)) : il vous faudra Chrome 66 minimum et activer le flag harmony : http://kangax.github.io/compat-table/esnext/#chrome-harmony-note

**NB : Dans la vraie vie cette question est tranchée facilement par l'utilisation du compilateur [Babel](https://babeljs.io)** : vous codez les fonctionnalités ES6+ que vous souhaitez sans vous soucier du support navigateur, et le compilateur se charge de transformer tout votre code en ES5, compatible donc avec tous les navigateurs. <br>Dans ce court TP nous n'utiliserons pas Babel afin de gagner un peu de temps et concentrer notre travail sur le code, sachez juste que lorsque vous travaillerez sur de vrais projets c'est Babel qu'il faudra utiliser (et [Webpack](https://webpack.js.org/) pour la gestion des modules) !\*

## Préparatifs

1. créer un dossier pour ce TP et y placer le contenu du dossier de démarrage fourni dans ce repo.
2. lancer un serveur http dans le dossier créé :

```bash
cd /chemin/vers/votre/dossier/demarrage
python3 -m http.server 8000
```

1. vérifier dans le navigateur que la page index.html fournie s'affiche correctement en ouvrant l'url http://localhost:8000
2. Installer un éditeur de code optimisé pour le développement web : [VSCode](https://code.visualstudio.com/), [SublimeText](https://www.sublimetext.com/), [Atom](https://atom.io/), ...
3. Explorer le contenu du dossier de démarrage, le fichier `index.html` et surtout le fichier `main.js` : il contient déjà du code qui servira pour la suite du TP.

## Instructions

### Intégration du JS

1. **Inclure le fichier `main.js` dans le fichier `index.html`** à l'aide d'une balise `<script>`.<br>
   **NB :** Pour éviter que le chargement du fichier JS ne bloque le chargement de la page HTML, il existe 2 solutions : - placer la balise `<script>` en toute fin de fichier html, juste **avant** la balise fermante `</body>`\* - placer la balise `<script>` dans le `<head>` du fichier, mais y ajouter un attribut `defer` (cf. [doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer))
   C'est cette dernière solution que je préconise, le support navigateur étant très bon (IE10, Android 3+, iOS 5+, etc.) cf. https://caniuse.com/#feat=script-defer
1. **Tester la page pour vérifier que le js est correctement chargé** : Ouvrir les outils de développement de votre navigateur (touche F12 sur Chrome) et ouvrir le panneau "Console". Si le fichier `main.js` est correctement chargé, le texte 'youpi' doit s'afficher dans la console. En effet, le fichier main.js contient une instruction `console.log('youpi');`. La méthode `console.log` permet d'afficher du texte ou des variables dans la console. <br>**NB :** _Si ce texte ne s'affiche pas, c'est probablement que le fichier `main.js` n'est pas correctement intégré dans la page html. <br>Ouvrir le panneau "Network"/"Réseau" puis recharger la page en désactivant le cache navigateur(touche CTRL+F5, ou CTRL+SHIFT+R) s'assurer que le fichier `main.js` figure bien dans la liste des fichiers téléchargés._

**_Pour la suite du TP, tout le code se fera dans ce fichier `main.js`, le fichier html ne devra pas être modifié !_**

### Manipulation des chaînes

1. **Créer une variable nommée `html`.** Sa valeur initiale sera la concaténation de la chaine de caractères `'images/'` et de la valeur de la variable `file` (qui est déjà présente dans le fichier `main.js`)
2. **Sur une ligne suivante, modifier la valeur de la variable `html`**. Votre code devra permettre de transformer la variable html en une chaîne qui corresponde au code html d'une balise `<a>`. L'URL du lien devra correspondre à la valeur initiale de la variable `html`. Cette balise `<a>` devra contenir elle même une balise `<img>` dont la source (_attribut `src`_) sera la valeur initiale de la variable `html`. Pour contrôler votre travail, afficher la valeur de la variable dans la console, le résultat obtenu devra être :
   ```html
   <a href="images/catlaugh.jpg"><img src="images/catlaugh.jpg"/></a>
   ```
3. **Afficher le lien et l'image ainsi générés dans la page html** à l'aide de l'API DOM et notamment de la méthode `querySelector` et de la propriété `innerHTML` :
   ```js
   document.querySelector(".videosContainer").innerHTML = html;
   ```

### Manipulation des tableaux et objets

Le fichier `main.js` qui vous a été fourni contient un tableau d'objets littéraux nommé `videos`. Il vous faut maintenant parcourir ce tableau afin de générer les vignettes des vidéos contenues dans ce tableau.
Pour chaque vignette on aura :
- une balise `<li>` (*vous l'aurez peut être remarqué, videosContainer est un `<ul>`*) avec la classe CSS `"media"` et contenant :
  - l'image de la vidéo (propriété `thumbnail`) dans une balise `<img>`
  - et le titre titre de la vidéo (propriété `title`) dans une balise `<h4>`.

Le code obtenu devra être de ce type :
```html
<li class="media">
    <img src="images/catlaugh.jpg" width="246" height="138" />
    <h4>CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation</h4>
</li>
```

Pour parcourir le tableau vous pouvez utiliser différentes méthodes :
1. Une boucle `for` classique
2. La méthode `Array.foreach` cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
3. Ou la méthode `Array.map` cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map accompagnée de la méthode `Array.join` cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join
