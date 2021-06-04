document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
		type        : 'loop',
		perPage     : 1,
		autoplay    : true,
		pauseOnHover: true,
	}  ).mount();
} );
