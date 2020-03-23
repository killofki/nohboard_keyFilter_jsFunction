function textLiner( t ) { 
	let inLine = t .replace( /([\[\]{},])/g, '\n$1 ' ) 
	let inProperty = t .replace( /:/g, ': ' ) 
	
	return inProperty 
	) 

function objFilter( o, F ) { return Object .fromEntries( Object .entries( o ) .map( F ) ) } 
