const $ = (x) => document.querySelector(x);
let state = 'inactive';

$('.btn').addEventListener('click', () => {
	if (state == 'inactive') {
		state = 'active';
		// slide share menu to viewport
		$('#active').classList.add('right-0');
		$('#active').classList.add('opacity-100');
		$('#active').classList.remove('right-full');
		// change button fill color to white
		$('.btn').classList.add('btn-active');
	} else {
		state = 'inactive';
		// slide share menu out of viewport
		$('#active').classList.remove('right-0');
		$('#active').classList.remove('opacity-100');
		$('#active').classList.add('right-full');
		// change button fill color to default
		$('.btn').classList.remove('btn-active');
	}
});