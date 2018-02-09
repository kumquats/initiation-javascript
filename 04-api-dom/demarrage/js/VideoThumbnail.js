import Component from './Component.js';

export default class VideoThumbnail extends Component {
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