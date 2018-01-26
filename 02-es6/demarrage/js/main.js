var file = 'catlaugh.jpg';

var videos = [
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

var html = 'images/'+file;
html = '<a href="'+html+'">\
		<img src="'+html+'" />\
	</a>';
document.querySelector('.videosContainer').innerHTML = html;

var videosHtml = videos.map( function(video){
	return '<a href="images/'+video.thumbnail+'">\
		<img src="images/'+video.thumbnail+'" />\
		<h2>'+video.title+'</h2>\
	</a>';
});
document.querySelector('.videosContainer').innerHTML = videosHtml.join('');