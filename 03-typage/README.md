# TP 3 - Typage

## Objectifs
Ajouter des informations de typage compatibles avec [Flow](https://flow.org)

## Instructions
1. Ajouter les types à toutes les variables, propriétés et méthodes de toutes les classes


NB : Pour que le code JS continue de fonctionner sans passer par un compilateur, ajouter les types entre commentaire :

	Au lieu d'écrire :
	```js
	const maChaine:string = 'lol';
	```
	Il faudra écrire :
	```js
	const maChaine/*:string*/ = 'lol';
	```

Pour tester les infos de typage vous avec 2 solutions :
1. utiliser le testeur en ligne
2. installer flow en local et tester en ligne de commande


### Utiliser le testeur en ligne
Pour simplifier l'utilisation de Flow et éviter d'avoir à l'installer sur vos machines, on peut utiliser le testeur en ligne sur https://flow.org/try/. Comme cet outil ne permet pas d'uploader plusieurs fichiers, il va falloir copier/coller le contenu de tous les fichiers dans la même fenêtre. Cela implique plusieurs choses :
 - il faut enlever les instructions `import ....` et `export ...`
 - il faut copier les fichiers dans le bon ordre en fonction des dépendances de chaque fichier

## Alternative : installer Flow
Si votre machine dispose de NodeJS, vous pouvez installer Flow en local et tester en CLI.

Pour installer Flow et tester les types de votre code, il vous faut Node.JS ce qui permettra d'utiliser npm (Node Package Manager - l'outil qui permet de télécharger des utilitaires JS).

Tapez dans un terminal les instructions suivantes :
1. **Configurez le proxy :**
	```bash
	npm config set proxy http://cache.univ-lille1.fr:3128
	```
2. **Initialisez votre projet npm :**
	```bash
	cd /chemin/vers/votre/dossier/demarrage
	npm init
	```
	Répondez alors aux questions qui vous sont posées pour créer votre projet npm (si vous n'êtes pas sûr des réponses, faites juste <kbd>Entrée</kbd>). A la fin du questionnaire vous verrez qu'un fichier package.json a été créé. Celui-ci nous sera utile par la suite.
3. **Installez Flow (attention, cette commande -comme les prochaines- est à lancer dans votre dossier de travail, là où se trouve les fichiers index.html et package.json) :**
	```bash
	npm install --save-dev flow-bin
	```
	Vous noterez que flow-bin a été rajouté dans les dépendances du fichier `package.json` !
4. **Initialisez flow à l'aide de la commande suivante :**
	```bash
	./node_modules/.bin/flow init
	```
5. **Lancez ensuite la vérification de vos fichiers en lançant :**
	```bash
	./node_modules/.bin/flow
	```
	Cette commande va vérifier tous les fichiers dans lesquels se trouvent le commentaire `// @flow`

	Corrigez votre code jusqu'à ce que flow n'affiche plus d'erreur



