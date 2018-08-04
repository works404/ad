	 	link="#"
	 	element=document.getElementById("next_but")
	 	indic=document.getElementById("but_indicator")
	document.getElementById('next_but').innerHTML="<div class='next04' id='nn'><div class='next-button-container'><a class='next-button' href='"+indic.className+"' target='_top' title='Next page' ><div class='icon-next-container'> <svg class='next-svg-icon rh-img-rtl' preserveAspectRatio='xMinYMin meet' version='1.1' xmlns='https://www.w3.org/2000/svg' xmlns:xlink='https://www.w3.org/1999/xlink' x='0px' y='0px' height='33px' width='20px' viewBox='0 0 26 42' enable-background='new 0 0 26 42' xml:space='preserve'><polyline fill='none' stroke='#0053f9' stroke-width='5' stroke-miterlimit='10' points='2.875,2.958 21.166,20.957 2.917,38.916'></polyline></svg></div></a></div></div>";
	if (element.className=='left'){
		document.getElementById("nn").style.transform='scaleX(-1)'
	}
