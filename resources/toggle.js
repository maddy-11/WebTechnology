document.getElementById('burger').onclick = function(){
		var nav = document.getElementById('menu')
		if(nav){
			if(nav.classList == 'menu'){
			nav.classList.remove('menu')
			nav.classList.add('active-nav');}
			else{
				nav.classList.remove('active-nav')
			nav.classList.add('menu');
			}
			
		}
	}

