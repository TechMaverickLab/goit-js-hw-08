/* global document, localStorage */

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const onPlay = function(data) {
	localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
	player.setCurrentTime(savedTime).catch((error) => {
		switch (error.name) {
		case 'RangeError':
			// час був встановлений поза межами відеофайла
			break;

		default:
			// деяка інша помилка
			break;
		}
	});
}
