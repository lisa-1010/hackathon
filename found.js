var client = new WindowsAzure.MobileServiceClient('https://lost-found.azure-mobile.net/', 'PgYPjeVvaByElucuwGqnmaPVhkkgtf15'),
        todoItemTable = client.getTable('todoitem');
        found_table = client.getTable('found_items');

window.onload = function() {
	var submit = get('submit');
	submit.addEventListener('click', function(event) {
		event.preventDefault();
		var found_obj = {};
		found_obj.category = get('found_category').value;
		found_obj.location = get('found_location').value;
		found_obj.description = get('found_description').value;
		found_obj.date = get('found_date').value;
		found_obj.email = get('found_email').value;

		found_add_item(found_obj);
	});
}

// assume well-formatted
found_add_item = function(found_obj) {
	// if (lost_obj.length !== 4) {
	// 	console.log('Wrong number of values');
	// 	return;
	// }
	if (found_obj.category !== '' && found_obj.location !== '' && found_obj.date !== '' && found_obj.email !== '') {
		found_table.insert(
		{
			category: found_obj.category, location: found_obj.location, description: found_obj.description, 
                        date: found_obj.date, email: found_obj.email
		});
		get('found_category').value = '';
		get('found_location').value = '';
		get('found_description').value = '';
		get('found_date').value = '';
		get('found_email').value = '';
	}
}


get = function(id) {
    return document.getElementById(id);
}
