
function getSchedules() {
	var request = new XMLHttpRequest();
	var scheduleArray;


	request.open('GET', '/api/schedules');
	request.timeout = 5000;
	request.responseType = 'json';
	request.send();

	request.addEventListener('load', function(event) {
		var key;
		var result = {};
		var tally = [];

		scheduleArray = [].slice.call(request.response);
		if (scheduleArray.length > 0) {
			scheduleArray.forEach(function (schedule) {
				var key = 'staff ' + String(schedule.id);
				if (result[schedule.id]) {
					result[key] += 1;
				} else {
					result[key] = 1;
				}
			});

			for (key in result) {
				tally.push(key + ': ' + String(result[key]))
			};

			alert(tally.join('\n'));
		} else {
			alert('There are no schedules');
		}
	});

	request.addEventListener('timeout', function(event) {
		alert('request timed out')
	});

	request.addEventListener('loadend', function(event) {
		alert('The request has completed');
	});
}

function returnJSON(collection) {
	var result = {};
	for (var pair of collection.entries()) {
		if (dataValid) {
			result[pair[0]] = pair[1];
		} else {
			return false;
		}
	}

	return result;
}

function dataValid(data) {
	if (data === '') {
		return false
	}
}

document.addEventListener('DOMContentLoaded', function(event) {
	var form = document.querySelector('form');

	form.addEventListener('submit', function(event) {
		var request = new XMLHttpRequest();
		request.open('POST', '/api/staff_members');
		request.setRequestHeader('Content-Type', 'application/json');

		var data = returnJSON(new FormData(form));
		var json = JSON.stringify(data);
		request.send(json);

		request.addEventListener('load', function(event) {
			switch(request.status) {
				case 201:
					var data = JSON.parse(request.response);
					console.log(data);
					alert(`Succesfully created staff with id: ${data.id}`)
					form.reset();
					break;
				case 400:
					alert(request.response);
			}
		});
	});
});




