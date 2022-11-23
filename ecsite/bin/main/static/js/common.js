let login = (event) => {
	event.preventDefault();
	let jsonString = {
		'userName': $('input[name=userName]').val(),
		'password': $('input[name=password]').val()
	};
	$.ajax({
		type: 'POST',
		url: '/ecsite/api/login',
		data: JSON.stringify(jsonString),
		contentType: 'application/json',
		datatype: 'json',
		scriptCharset: 'utf-8'
	})
	.then((result) => {
		let user = JSON.parse(result);
		$('#welcome').text(' --ようこそ！ ${user.fullName} さん');
		$('#hiddenUserId').val(user.id);
		$('input[name=userName]').val('');
		$('input[name=password]').val('');
	}, () => {
		console.error('Error: ajax connection failed.');
	}
);
};

let addCart = (event) => {
	let tdList = $(event.target).parent().parent().find('td');
	}
	
let buy = (event) => {
	$.ajax({
		type: 'POST',
		url: '/ecsite/api/purchase',
		data: JSON.stringify({
			"userId": $('#hiddenUserId').val(),
			"cartList": cartList
		}),
		contentType: 'application/json',
		datatype: 'json',
		scriptCharset: 'utf-8',
	})
	.then((result) => {
		  alert('購入しました。');
	},() => {
		console.error('Error: ajax connection failed.');
	}
);
	
	
	
	
};

let removeCart = (event) => {
	const tdList = $(event.target).parent().parent().find('td');
	let id = $(tdList[0]).text();
	cartList = cartList.filter(function(cart) {
		return cart.id !== id;
	});
	$(event.target).parent().parent().remove();
};

let showHistory = () => {
	$.ajax({
		type: 'POST',
		url: '/ecsite/api/history',
		data: JSON.stringify({ "userId": $('#hiddenUserId').val() }),
		contentType: 'application/json',
		datatype: 'json',
		scriptCharset: 'utf-8'
	})
	.then((result) => {
		let historyList = JSON.parse(result);
		let tbody = $('#historyTable').find('tbody');
		$(tbody).children().remove();
		historyList.forEach(history, index);{
			let tr = $('<tr />');
			
			$('<td />', { 'text': history.goodsName }).appendTo(tr);
			$('<td />', { 'text': history.itemCount }).appendTo(tr);
			$('<td />', { 'text': history.createdAt }).appendTo(tr);
			
			$(tr).appendTo(tbody);
		};
		$("#history").dialog("open");
	 () => {
		console.error('Error: ajax connection failed.');
        )
       };
        