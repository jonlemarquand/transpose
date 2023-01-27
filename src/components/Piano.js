import React from 'react';
import './Piano.scss';

const Piano = ({active}) => {

	let keysArray = [1,2,3,4,5,6,7,8,9,10,11,12];
	let keysOptions = [
		{	c: 'c',		eb: 'a', 	f: 'g',	bb: 'd' },
		{	c: 'db',	eb: 'ab', 	f: 'g# ab',	bb: 'b' },
		{	c: 'd',		eb: 'bb', 	f: 'a',	bb: 'c' },
		{	c: 'eb',	eb: 'b', 	f: 'a# bb ',	bb: 'db' },
		{	c: 'e',		eb: 'c', 	f: 'b',	bb: 'd' },
		{	c: 'f',		eb: 'db', 	f: 'c',	bb: 'eb' },
		{	c: 'gb',	eb: 'd', 	f: 'c# db',	bb: 'e' },
		{	c: 'g',		eb: 'eb', 	f: 'd',	bb: 'f' },
		{	c: 'ab',	eb: 'e', 	f: 'd# eb',	bb: 'gb' },
		{	c: 'a',		eb: 'f', 	f: 'e',	bb: 'g' },
		{	c: 'bb',	eb: 'gb', 	f: 'f',	bb: 'ab' },
		{	c: 'b',		eb: 'g', 	f: 'f# gb',	bb: 'a' },
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