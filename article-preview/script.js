const $ = (x) => document.querySelector(x);
let state = 'inactive';

$('.btn-share').addEventListener('click', () => {
	if(state == 'inactive') {
		state = 'active';
		// slide share menu to viewport
		// change button fill color to white
	} else {
		state = 'inactive';
		// slide share menu out of viewport
		// change button fill color to default
	}
});