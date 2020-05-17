document .body .onkeydown = console .log 

function keyFilter( o, F ) { 
	let { Elements } = o 
	o .Elements = Elements .filter( F ) 
	let text = JSON .stringify(...[ o,, '\t' ]) 
	
	return textLiner( text ) 
	} 

function textLiner( t ) { 
	// 200511 json sillofki style // killofk style 
	let pre = t .replace( /,([\n\r]+)(\t+)/g, '$1$2, ' ) 
	let prespace = pre .replace( /(\t+)((?!, ).*[\n\r]+)(?=\1, )/g, '$1  $2' ) 
	let closer = prespace .replace( /(?<=([\n\r]|^)(\t+)(\t(?!\t).*[\n\r]+))(\2(?!\t)\})/g, '$2\t}' ) 
	return closer 
	} 

function jsonKillofkiStyle( obj ) { 
	let { stringify } = JSON 
	jsonKillofkiStyle = obj => { 
		let tabs = stringify(...[ obj,, '\t' ]) 
		let pre = tabs .replace( /,([\n\r]+)(\t+)/g, '$1$2, ' ) 
		let prespace = pre .replace( /(\t+)((?!, ).*[\n\r]+)(?=\1, )/g, '$1  $2' ) 
		let closer = prespace .replace( /(?<=([\n\r]|^)(\t+)(\t(?!\t).*[\n\r]+))(\2(?!\t)\})/g, '$2\t}' ) 
		return closer 
		} // -- lazy() 
	return jsonKillofkiStyle( obj ) // lazy 
	} // -- jsonKillofkiStyle() 


/* sample 

keyFilter( keys, ({ KeyCodes, __type, Text }) => 
	   [ 37, 39 ] .some( v => KeyCodes ?.[ 0 ] === v ) 
	|| __type .match( /Mouse/ ) 
	|| Text .match( /[k]/ ) 
	) 

*/ 