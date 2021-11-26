import { SHARED_CONSTANTS } from '@shared/constants';

mp.events.add('playerReady', (player) => {
	console.log(`${player.name} is ready!`);
});

console.log(SHARED_CONSTANTS.HELLO_WORLD);
