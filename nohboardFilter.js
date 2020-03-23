document .body .onkeydown = console .log 

function keyFilter( o, F ) { 
	let { Elements } = o 
	o .Elements = Elements .filter( F ) 
	
	return textLiner( o ) 
	} 

function textLiner( t ) { 
	let inLine = t .replace( /([\[\]{},])/g, '\n$1 ' ) 
	let inProperty = inLine .replace( /:/g, ': ' ) 
	
	return inProperty 
	} 
