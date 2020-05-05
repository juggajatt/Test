function get_json(Test.json) {
	var requester = create_http_request();
	requester.open("GET", Test.json, false);
	
	requester.send(null);
	var json_text = requester.responseText;
	var data = json_parser(json_text);
	return data;
}
