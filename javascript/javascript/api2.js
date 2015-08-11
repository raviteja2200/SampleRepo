		var $datas = $('#data');
		var $fsname = $('#fname');
		var $fage = $('#fage');
		function addFriend(friend){
			$datas.append('<li> name: '+ friend.name + ', age: ' + friend.age + '</li>');
		}
		$.ajax({
  		type: 'GET',
  		url: 'http://rest.learncode.academy/api/johnbob/friends',
  		success: function(friends) {
    	console.log("I have friends!", data); //returns all of johnbob's friends
    	$.each(friends,function(i,friend){
							addFriend(friend);
					});
  	},
  	error: function()
    		{
    			alert('error getting friend');
    		}
  		
  	
	});
		$('#bt').on('click',function()
			{
				var friend = {
					name: $fsname.val(),
					age: $fage.val(),
					};
			$.ajax({
				type:'POST',
				url:'http://rest.learncode.academy/api/johnbob/friends',
				data: friend,
				success: function(newfriend){
					addFriend(newfriend);
				},
				error: function()
  						{
  							alert('error posting friend');
  						}

			})
		});


		$('#bt1').on('click',function()
			{	
					var friend = {
					name: $fsname.val(),
					age: $fage.val(),
					};
				$.ajax
				({
  					type: 'DELETE',
  					url: 'http://rest.learncode.academy/api/johnbob/friends/1',
  					success: function() 
  					{
    					//no data...just a success (200) status code
    					console.log('Friend Deleted Successfully!');
    					name;
					},
				error: function()
					{
						alert('cant delete a friend');
					}		
				})
  
});
