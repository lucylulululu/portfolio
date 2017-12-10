/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  config.extraPlugins = 'widgetselection';
  config.extraPlugins = 'lineutils';
  config.extraPlugins = 'notificationaggregator';
  config.extraPlugins = 'filetools';
  config.extraPlugins = 'widget';
  config.extraPlugins = 'uploadwidget';
  config.extraPlugins = 'uploadimage';
  config.imageUploadUrl = 'http://127.0.0.1:8360/api/upload/';
};

CKEDITOR.on( 'instanceReady', function( ev ) {
	// code for fileupload and response
	ev.editor.on( 'fileUploadRequest', function( evt ) {
		var fileLoader = evt.data.fileLoader,
		formData = new FormData(),
		xhr = fileLoader.xhr;
		xhr.open( 'POST', fileLoader.uploadUrl, true );
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		formData.append( 'uploads[]', fileLoader.file, fileLoader.fileName );
    alert("send data url : " + fileLoader.uploadUrl + " : " + fileLoader.file + " : " + fileLoader.fileName);
    fileLoader.xhr.send( formData );
		// Prevent default behavior.
		evt.cancel();
	}, null, null, 4 ); // Listener with priority 4 will be executed before priority 5.

	ev.editor.on( 'fileUploadResponse', function( evt ) {
			// Prevent the default response handler.
			evt.stop();
			// Get XHR and response.
			var data = evt.data,
			xhr = data.fileLoader.xhr,
			response = xhr.responseText;
      alert("receive response " + response + ":" + JSON.parse(response).data.url);
      if(response){
        data.url = JSON.parse(response).data.url;
        var resphtml = "<img src="+ data.url + "/>";
        $('div.bodycontent').before('<div class="updated"><p>' + resphtml + '</p></div>');
  			return;
      }
			// if ($(response).find('div.updated').html()) {
			// 	resphtml = $(response).find('div.updated').html();
			// 	url = $("a",resphtml).attr("href");
			// 	data.url = url;
			// 	$('div.bodycontent').before('<div class="updated"><p>' + resphtml + '</p></div>');
			// 	return;
			// }
      //
			// if ($(response).find('div.error').html()) {
			// 	resphtml = $(response).find('div.error').html();
			// 	msg = resphtml;
			// 	data.message = msg;
			// 	$('div.bodycontent').before('<div class="error"><p>' + resphtml + '</p></div>');
			// 	evt.cancel();
			// 	return;
			// }
	});
});
