import Component from './Component.js';
import VideoThumbnail from './VideoThumbnail.js';

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

const h1/*:Component*/ = new Component('h1', ['JSTube']);
document.querySelector('.videosContainer').innerHTML = h1.render();

const thumbnailsHtml = videos.map( video => {
	let videoThumbnail/*:VideoThumbnail*/ = new VideoThumbnail(video);
	return videoThumbnail.render();
});
document.querySelector('.videosContainer').innerHTML += thumbnailsHtml.join('');
