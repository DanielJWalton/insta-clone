import React from 'react';

type Props = {
	seed?: string;
	large?: boolean;
};

function Avatar({seed, large}: Props) {
	return (
		<img
			className={` rounded-full border border-gray-300 bg-white ${
				large && 'h-20 w-20'
			}`}
			src={`https://avatars.dicebear.com/api/open-peeps/${
				parseInt(seed, 10) + 1 || 'placeholder'
			}.svg`}
			alt=''
		/>
	);
}

export default Avatar;
