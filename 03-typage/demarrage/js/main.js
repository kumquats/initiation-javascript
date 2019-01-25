import VideoThumbnail from './VideoThumbnail.js';
import Component from './Component.js';
import videos from './videos.js';

// 2. Pour tester le bon fonctionnement de la classe, instancier un Component de type `h1`
const title = new Component('h1', null, ['Liste des vidéos']);
document.querySelector('.pageTitle').innerHTML = title.render();

// 9. dans le main.js, modifier le parcours du tableau `videos` pour utiliser la classe `VideoThumbnail` afin de rendre les vignettes de la liste.
const videosHtml = videos.map( video => {
	const v = new VideoThumbnail(video);
	return v.render();
});
document.querySelector('.videosContainer').innerHTML = videosHtml.join('');



// // Manipulation des chaînes
// let html = `images/${file}`;
// html = `<a href="${html}">
// 		<img src="${html}" />
// 	</a>`;
// document.querySelector('.videosContainer').innerHTML = html;

// // Manipulation des tableaux et objets
// const videosHtml = videos.map( function(video){
// 	return `<li class="media">
// 		<a href="images/${video.thumbnail}">
// 			<img src="images/${video.thumbnail}" width="246" height="138"/>
// 			<h4>${video.title}</h4>
// 		</a>
// 	</li>`;
// });
// document.querySelector('.videosContainer').innerHTML = videosHtml.join('');


// // 1. Créer une classe `Component`
// class Component {
// 	tag;
// 	attribute;
// 	children;
// 	constructor( tag, attribute, children=[] ){
// 		this.tag = tag;
// 		this.attribute = attribute;
// 		this.children = children;
// 	}
// 	render(){
// 		return `<${this.tag} ${this.renderAttribute()} ${
// 			this.children.length ?
// 			`>${this.renderChildren()}</${this.tag}>` :
// 			`/>`
// 		}`;
// 	}
// 	renderAttribute(){
// 		if ( this.attribute ){
// 			return `${this.attribute.name}="${this.attribute.value}"`
// 		}
// 		return '';
// 	}
// 	renderChildren(){
// 		return this.children.map( child => (
// 			child instanceof Component ? child.render() : child
// 		)).join('');
// 	}
// }

// // 2. Pour tester le bon fonctionnement de la classe, instancier un Component de type `h1`
// const title = new Component('h1', {}, ['Liste des vidéos']);
// document.querySelector('.pageTitle').innerHTML = title.render();

// //3. Modifier le fonctionnement de la méthode render pour prendre en compte le cas où `children` est vide
// let img = new Component( 'img' );
// console.log( img.render() );

// // 4. Modifier la méthode `render()` pour prendre en compte le paramètre `attribute`
// img = new Component( 'img', {name:'src', value:'images/catfail.jpg'} )
// console.log( img.render() );

// // 5. Créer une nouvelle classe `Img`** qui hérite de `Component`
// class Img extends Component {
// 	constructor(url){
// 		super('img', {name:'src', value:url} );
// 	}
// }
// img = new Img('images/catfail.jpg');
// console.log( img.render() );

// // 7. Adapter la méthode `render()` pour permettre de passer dans `children`
// const c = new Component( 'li', null, [
// 	'JS',
// 	new Component( 'strong', null, ['FTW'] )
// ] );
// console.log(c.render());

// // 8. Créer une classe `VideoThumbnail`** qui hérite de la classe `Component`
// class VideoThumbnail extends Component {
// 	constructor(video){
// 		super('li', {name:'class', value:'media'}, [
// 			new Img(`images/${video.thumbnail}`),
// 			new Component('h4', null, [video.title])
// 		])
// 	}
// }
// let v = new VideoThumbnail(videos[0]);
// console.log(v.render());

// // 9. dans le main.js, modifier le parcours du tableau `videos` pour utiliser la classe `VideoThumbnail` afin de rendre les vignettes de la liste.
// const videosHtml2 = videos.map( video => {
// 	const v = new VideoThumbnail(video);
// 	return v.render();
// });
// document.querySelector('.videosContainer').innerHTML = videosHtml2.join('');