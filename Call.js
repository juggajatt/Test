function get_json(file_name) {
	var requester = create_http_request();
	requester.open("GET", file_name, false);
	
	requester.send(null);
	var json_text = requester.responseText;
	var data = json_parser(json_text);
	return data;
}
