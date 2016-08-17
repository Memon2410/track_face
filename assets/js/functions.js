// Browser detection for when you get desparate. A measure of last resort.

// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// Uncomment the below to use:
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


$(window).load(function(){

	// TRACKING *****
	var video = document.getElementById('video');
	var canvas = document.getElementById('canvas');
	var mask = document.getElementById('mask')
	var context = canvas.getContext('2d');
	var tracker = new tracking.ObjectTracker('face');
	
	tracker.setInitialScale(4);
	tracker.setStepSize(2);
	tracker.setEdgesDensity(0.1);
	tracking.track('#video', tracker, {camera: true});
	
	tracker.on('track', function(event) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		event.data.forEach(function(rect) {
			//context.strokeStyle = '#FF0000';
			//context.strokeRect(rect.x, rect.y, rect.width, rect.height);
			context.drawImage(mask, rect.x, rect.y, rect.width, rect.height);

		});
		
	});

/*

	// declare our variables
			var seriously, // the main object that holds the entire composition
				source, // wrapper object for source video
				edge, // edge detection effect
				target; // a wrapper object for our target canvas

			if (Seriously.incompatible('camera')) {
				document.body.appendChild(document.createTextNode('Sorry, your browser does not support getUserMedia'));
				document.querySelector('canvas').style.display = 'none';
				return;
			}

			// construct our seriously object
			seriously = new Seriously();

			// time to get serious
			source = seriously.source(canvas);
			target = seriously.target('#canvas');
			edge = seriously.effect('edge');

			// connect all our nodes in the right order
			edge.source = source;
			target.source = edge;

			seriously.go();


*/			

});