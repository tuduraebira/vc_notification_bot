function send(){
  // GlitchのURLを入力
	const URL = "https://xxx-xxx-xxx.glitch.me"
  
	response = UrlFetchApp.fetch(URL, {
		'contentType': 'application/json; charset=utf-8',
		'method': 'post',
		'payload': {
			'type': 'wake'
		},
		'muteHttpExceptions': true
	});
}
