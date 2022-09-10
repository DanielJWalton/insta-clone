import {useEffect, useState} from 'react';
import faker from 'faker';

type Props = {
	large?: boolean;
	img?: string;
	username?: string;
};
let seed = 20;
function Suggestions(img, username) {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className='mt-4 ml-10'>
			<div className='flex justify-between text-sm mb-5'>
				<h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
				<button className='text-gray-600 font-semibold'>See All</button>
			</div>

			{suggestions.map(profile => (
				<div
					key={profile.id}
					className='flex items-center justify-between mt-3'>
					<div className='rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5'>
						<img
							className={`h-14 w-14 p-[.05]  border-2 border-gradient-to-r from-pink-500 via-red-500 to-yellow-500 object-contain rounded-full cursor-pointer hover:scale-110 transition transform duration-200 ease-out `}
							src={`https://avatars.dicebear.com/api/open-peeps/${
								seed++ || 'placeholder'
							}.svg`}
							alt=''
						/>
					</div>
					<div className='flex-1 ml-4'>
						<h2 className='font-semibold text-sm'>{profile.username}</h2>
						<h3 className='text-xs text-gray-400'>
							Works at {profile.company.name}
						</h3>
					</div>
					<button className='text-blue-400 text-xs font-bold'>Follow</button>
				</div>
			))}
		</div>
	);
}

export default Suggestions;
