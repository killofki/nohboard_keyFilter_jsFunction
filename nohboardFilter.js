document .body .onkeydown = console .log 

function keyFilter( o, F ) { 
	let { Elements } = o 
	o .Elements = Elements .filter( F ) 
	let text = JSON .stringify(...[ o,, '\t' ]) 
	
	return textLiner( text ) 
	} 

function textLiner( t ) { 
	// 200511 json sillofki style // killofk style 
	// let inLine = t .replace( /([\[\]{},])/g, '\n$1 ' ) 
	// let inProperty = inLine .replace( /:/g, ': ' ) 
	
	// return inProperty 
	return t 
	} 

/* sample 

keyFilter( keys, ({ KeyCodes, __type, Text }) => 
	   [ 37, 39 ] .some( v => KeyCodes ?.[ 0 ] === v ) 
	|| __type .match( /Mouse/ ) 
	|| Text .match( /[k]/ ) 
	) 

*/ 