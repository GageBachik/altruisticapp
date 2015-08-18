$(function(){
	// console.log('javascript executed')
	var request = $.ajax({
		url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5c26167b4a5960e56014a8fc89dd1390&tags=wealthy,altruistic,rich,luxury&safe_search=1&content_type=1&per_page=500&format=json&nojsoncallback=1",
		method: "GET",
		dataType: "JSON"
	})

	request.done(function( data ) {
		var users = []
		var count = 0
		// console.log("data:", data)

		data.photos.photo.map(function (image) {
			if (users.indexOf(image.owner) === -1){
				$('.bg-collage').append('<img src="https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'_n.jpg" class="bg-image">')
				users.push(image.owner)
				count++
			}
		})

		// console.log("count:", count);
		// console.log("users:", users);

		$('.bg-collage').imagesLoaded( function() {
			// console.log('imagesloaded')
			$('.bg-collage').masonry({
				// options
				itemSelector: '.bg-image',
				columnWidth: 320,
				isFitWidth: true
			});
		});
	});

})

