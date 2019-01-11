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

// Manipulation des chaînes
let html = `images/${file}`;
html = `<a href="${html}">
		<img src="${html}" />
	</a>`;
document.querySelector('.videosContainer').innerHTML = html;

// Manipulation des tableaux et objets
const videosHtml = videos.map( function(video){
	return `<li class="media">
		<a href="images/${video.thumbnail}">
			<img src="images/${video.thumbnail}" width="246" height="138"/>
			<h4>${video.title}</h4>
		</a>
	</li>`;
});
document.querySelector('.videosContainer').innerHTML = videosHtml.join('');