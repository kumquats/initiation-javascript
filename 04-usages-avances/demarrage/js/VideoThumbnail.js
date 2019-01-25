// @flow

// 8. Créer une classe `VideoThumbnail`** qui hérite de la classe `Component`
import Component from './Component.js';
import Img from './Img.js';

export default class VideoThumbnail extends Component {
	constructor(video/*:{title:string, thumbnail:string}*/){
		super('li', {name:'class', value:'media'}, [
			new Img(`images/${video.thumbnail}`),
			new Component('h4', null, [video.title])
		])
	}
}