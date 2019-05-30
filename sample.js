// random value generated 
	var y = Math.floor(Math.random() * 100 + 1); 
	console.log(y);

      
    // counting the number of guesses 
    // made for correct Guess 
	var guess = 1; 
	
	 function myfunction (){ 
      
		// number guessed by user      
		var x = document.getElementById("userGuess").value; 


		function writeMessage(elementId, message, appendMessage) {
			var elemToUpdate = document.getElementById(elementId);  
			if (appendMessage) {
				elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;  //to change the current statements in html in id
			} else {
				elemToUpdate.innerHTML = message;
			}
		};

		
	   
		if(x == y) 
		{     
			writeMessage('statusArea', '<p>You got me in ' + guess +' guesses, I was thinking ' + y + '. Let\'s go again...</p>');
		

		} 
		else if(x < y) /* if guessed number is greater 
						than actual number*/ 
		{     
			guess++; 
			writeMessage('statusArea', '<p>You need to guess higher than ' + x + ', try again...</p>');
			writeMessage('historyList', '<li>' + x +'  (too low)</li>', true); 
		} 
		else
		{ 
			guess++; 
			writeMessage('statusArea', '<p>You need to guess lower than ' + x + ', try again...</p>');
			writeMessage('historyList', '<li>' + x + '  (too high)</li>', true);
		} 
		document.getElementById("myForm").reset();

	 } 
	
