const file = 'catlaugh.jpg';

const videos = [
	{
		title: 'CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation',
		thumbnail: 'catlaugh.jpg',
		video: 'videos/catfails.mp4'
	},
	{
		title: 'Hilarious Cat Fails (April 2017)',
		thumbnail: 'catfails.jpg',
		video: 'videos/catfails.mp4'
	},
	{
		title: 'Cats are so funny you will die laughing - Funny cat compilation',
		thumbnail: 'catssofunny.jpg',
		video: 'videos/catfails.mp4'
	}
];

console.log('youpi');

let html = `images/${file}`;
html = `<a href="${html}">
		<img src="${html}" />
	</a>`;
document.querySelector('.videosContainer').innerHTML = html;

const videosHtml = videos.map( function(video){
	return `<a href="images/${video.thumbnail}">
		<img src="images/${video.thumbnail}" />
		<h2>${video.title}</h2>
	</a>`;
});
document.querySelector('.videosContainer').innerHTML = videosHtml.join('');

class Component {
	tag;
	children;
	attributes;

	constructor(tag = 'div', children=[], attributes={}){
		this.tag = tag;
		this.children = children;
		this.attributes = attributes;
	}

	render(){
		let html = `<${this.tag} ${this.renderAttributes()}`;
		if ( this.children.length ){
			html += `>
				${this.renderChildren()}
			</${this.tag}>`;
		} else {
			html += '/>';
		}
		return html;
	}

	renderChildren(){
		return this.children.map( child =>
			child instanceof Component ?
			child.render() :
			child
		).join('');
	}

	renderAttributes(){
		const attributesHtml = [];
		for ( let attribute in this.attributes ){
			attributesHtml.push( `${attribute}="${this.attributes[attribute]}"` );
		}
		return attributesHtml.join( ' ' );
	}
}

const h1 = new Component('h1', ['JSTube']);
document.querySelector('.videosContainer').innerHTML = h1.render();

class VideoThumbnail extends Component {
	video;

	constructor(video){
		super('div', [
				new Component('img', [], {src: `images/${video.thumbnail}`}),
				new Component('h2', [video.title])
			], { class: 'thumbnail' }
		);
		this.video = video;
	}

}

const thumbnailsHtml = videos.map( video => {
	let videoThumbnail = new VideoThumbnail(video);
	return videoThumbnail.render();
});
document.querySelector('.videosContainer').innerHTML += thumbnailsHtml.join('');
