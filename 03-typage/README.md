# TP 3 - Typage

## Objectifs
Ajouter des informations de typage compatibles avec [Flow](https://flow.org)

Si vous avez Node.JS installé, vous pouvez utiliser flow en ligne de commande : cf. [Flow en ligne de commande](#flow-en-ligne-de-commande)

Dans le cas contraire, ou si l'installation ne fonctionne pas (problème de droits par exemple), alors vous pouvez utiliser le testeur en ligne : cf. [Tester Flow en ligne](#tester-flow-en-ligne)


## Flow en ligne de commande
Si votre machine dispose de NodeJS, vous pouvez installer Flow en local et utiliser flow dans un terminal.

Tapez dans un terminal les instructions suivantes :
1. **Configurez le proxy :**
	```bash
	npm config set proxy http://cache.univ-lille1.fr:3128
	npm config set https-proxy http://cache.univ-lille1.fr:3128
	```
2. **Initialisez votre projet npm :**
	```bash
	cd /chemin/vers/votre/dossier/demarrage
	npm init
	```

	La commande `npm init`est à lancer dans le dossier où se trouve votre fichier index.html.

	Répondez aux questions qui vous sont posées pour créer votre projet npm (si vous n'êtes pas sûr des réponses à donner à certaines questions, faites juste <kbd>Entrée</kbd>, vous aurez ainsi les valeurs par défaut).

	A la fin du questionnaire vous verrez qu'un fichier package.json a été créé. Celui-ci est important car c'est dans ce fichier que sont enregistrées toutes les dépendances de votre projet (les librairies js que vous allez installer, comme flow par exemple). Dans la vraie vie, il s'agit d'un fichier que l'on versionne car il permet à n'importe qui d'installer automatiquement toutes les dépendances de votre projet sans avoir besoin de les lister une à une grâce à la commande `npm install`.

3. **Installez Flow (attention, cette commande -comme les prochaines- est toujours à lancer dans votre dossier de travail, là où se trouvent les fichiers index.html et package.json) :**
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
	Vous devriez avoir comme résultat final :
	```bash
	No errors!
	```
	En effet, pour le moment nos fichiers ne contiennent aucune information de typage !
6. **Ajouter des informations de typage au fichier main.js : typer toutes les variables**

7. **Une fois que le main.js est traité, passez aux autres fichiers du projet : typez les propriétés, les méthodes et leurs paramètres, les variables contenues dans chaque classe JS.**

8. **Une fois que le message 'No errors!' apparaît enfin, vous remarquerez que votre code ne fonctionne plus dans le navigateur : les annotations flow, ne sont pas comprises par les navigateurs car rappelons qu'il ne s'agit pas d'une syntaxe EcmaScript officielle.** Pour régler le problème, on doit normalement installer [Babel](https://babeljs.io). Pour gagner du temps, on va simplement commenter les informations de typage de cette manière :

	Au lieu d'écrire :
	```js
	const maChaine:string = 'lol';
	```
	Il faudra écrire :
	```js
	const maChaine/*:string*/ = 'lol';
	```

	Notez que la vérification des types continue de fonctionner !

## Tester Flow en ligne
Si vous n'avez pas Node.JS sur votre machine (ou que vous n'arrivez pas à le faire fonctionner) il vous reste la possibilité de tester le typage en JS avec le testeur en ligne du site [flow.org](https://flow.org).

La manipulation est un peu fastidieuse lorsque, comme nous, on travaille avec plusieurs fichiers, mais elle a le mérite de fonctionner sans avoir besoin d'installer quoique ce soit et d'être un bon moyen de tester le typage rapidement.

1. **Ajouter des informations de typage au fichier main.js : typer toutes les variables**

2. **Testez votre code dans le testeur en ligne sur https://flow.org/try/.**

	Comme cet outil ne permet pas d'uploader plusieurs fichiers, il va falloir copier/coller le contenu de tous les fichiers dans la même fenêtre. Cela implique plusieurs choses :
	- il faut enlever les instructions `import ....` et `export ...`
	- il faut copier les fichiers dans le bon ordre en fonction des dépendances de chaque fichier

	Une fois que le message 'No errors!' apparaît, vous pouvez passer à la suite ! Mais je vous recommande de coder directement dans le testeur en ligne (une fois que vous aurez un code qui fonctionne, vous pourrez le réintégrer dans vos fichiers .js).

1. **Une fois que le main.js est traité, passez aux autres fichiers du projet : typez les propriétés, les méthodes et leurs paramètres, les variables contenues dans chaque classe JS.**

2. **Une fois que le message 'No errors!' apparaît enfin, vous remarquerez que votre code ne fonctionne plus dans le navigateur : les annotations flow, ne sont pas comprises par les navigateurs car rappelons qu'il ne s'agit pas d'une syntaxe EcmaScript officielle.** Pour régler le problème, on doit normalement installer [Babel](https://babeljs.io). Pour gagner du temps, on va simplement commenter les informations de typage de cette manière :

	Au lieu d'écrire :
	```js
	const maChaine:string = 'lol';
	```
	Il faudra écrire :
	```js
	const maChaine/*:string*/ = 'lol';
	```

	Notez que la vérification des types continue de fonctionner !



