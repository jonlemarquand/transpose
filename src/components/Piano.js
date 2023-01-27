import React from 'react';
import './Piano.scss';

const Piano = ({active}) => {

	let keysOptions = [
		{	c: 'c',		eb: 'a', 	f: 'g',	bb: 'd' },
		{	c: 'db',	eb: 'bb', 	f: 'g# ab',	bb: 'eb' },
		{	c: 'd',		eb: 'b', 	f: 'a',	bb: 'e' },
		{	c: 'eb',	eb: 'c', 	f: 'a# bb ',	bb: 'f' },
		{	c: 'e',		eb: 'db', 	f: 'b',	bb: 'gb' },
		{	c: 'f',		eb: 'd', 	f: 'c',	bb: 'g' },
		{	c: 'gb',	eb: 'eb', 	f: 'c# db',	bb: 'ab' },
		{	c: 'g',		eb: 'e', 	f: 'd',	bb: 'a' },
		{	c: 'ab',	eb: 'f', 	f: 'd# eb',	bb: 'bb' },
		{	c: 'a',		eb: 'gb', 	f: 'e',	bb: 'b' },
		{	c: 'bb',	eb: 'g', 	f: 'f',	bb: 'c' },
		{	c: 'b',		eb: 'ab', 	f: 'f# gb',	bb: 'db' },
	]
	let black = [1, 3, 6, 8, 10];

	let whiteKeys = keysOptions.map((key, index) => {
		if(black.includes(index)) {
			return null;
		}
		
		return ( <div className={`key-${index} key`}>
			{key[active]}
		</div> )
	});

	let blackKeys = keysOptions.map((key, index) => {
		if(black.includes(index)) {
			return (
				<div className={`key-${index} key`}>
						{key[active]}
				</div>
			)
		}
		return null;
	});

	return (
		<div className="piano">
			<div className="white">
				{whiteKeys}
			</div>
			<div className="black">
				{blackKeys}
			</div>
		</div>
	)
}

export default Piano;