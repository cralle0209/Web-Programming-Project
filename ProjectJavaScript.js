$(function(){

	let body = $('body'),
		stage = $('#stage'),
		back = $('a.back');

	$('#phase1 .encrypt').click(function(){
		body.attr('class', 'encrypt');

		phase(2);
	});


	$('#phase2 .button').click(function(){
		$(this).parent().find('input').click();
	});

	let file = null;

	$('#phase2').on('change', '#encrypt-input', function(e){

		if(e.target.files.length!=1){
			alert('Please select a file to encrypt!');
			return false;
		}

		file = e.target.files[0];

		if(file.size > 1024*1024){
			alert('Please choose files smaller than 1mb.);
			return;
		}

		phase(3);
	});


	$('a.button.process').click(function(){

		let input = $(this).parent().find('input[type=password]'),
			a = $('#phase4 a.download'),
			password = input.val();

		input.val('');

		if(password.length<5){
			alert('Please choose a longer password!');
			return;
		}

		let reader = new FileReader();

		if(body.hasClass('encrypt aes')){

		
			reader.onload = function(e){

				let encrypted = CryptoJS.AES.encrypt(e.target.result, password);

				a.attr('href', 'data:application/octet-stream,' + encrypted);
				a.attr('download', file.name + '.encrypted');

				phase(4);
			};

			reader.readAsDataURL(file);
		}
	});
		
		let reader = new FileReader();

		if(body.hasClass('encrypt des')){

		
			reader.onload = function(e){

				let encrypted = CryptoJS.DES.encrypt(e.target.result, password);

				a.attr('href', 'data:application/octet-stream,' + encrypted);
				a.attr('download', file.name + '.encrypted');

				phase(4);
			};

			reader.readAsDataURL(file);
		}
	});
	
		let reader = new FileReader();

		if(body.hasClass('encrypt rabbit')){

		
			reader.onload = function(e){

				let encrypted = CryptoJS.rabbit.encrypt(e.target.result, password);

				a.attr('href', 'data:application/octet-stream,' + encrypted);
				a.attr('download', file.name + '.encrypted');

				phase(4);
			};

			reader.readAsDataURL(file);
		}
	});


	back.click(function(){

		$('#phase2 input[type=file]').replaceWith(function(){
			return $(this).clone();
		});

		phase(1);
	});


	function phase(i){

		if(i == 1){
			back.fadeOut();
		}
		else{
			back.fadeIn();
		}
		stage.css('top',(-(i-1)*100)+'%');
	}

});
