$(function() {
	var $form = $('form');
	var $list = $('ul');

	$form.on('submit', function(event) {
		event.preventDefault();

		var item = $(this).find(":input[type='text']").val();
		var quantity = $(this).find(":input[type='number']").val() || 1;
		var element = document.createElement('li');
		element.textContent = quantity + ' ' + item ;
		$list.append(element);
		this.reset()
	})
})
