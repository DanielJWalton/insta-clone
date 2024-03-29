import Story from './Story';
import {useEffect, useState} from 'react';
import faker from 'faker';
import {useSession} from 'next-auth/react';

function Stories() {
	const [suggestions, setSuggestions] = useState([]);
	const {data: session} = useSession();

	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className='flex w-screen md:w-full space-x-2 p-6 bg-white md:mt-8 border-gray-200 border rounded-lg overflow-x-scroll scrollbar-none scrollbar-thumb-black'>
			{session && (
				<Story img={session.user.image} username={session.user.username} />
			)}
			{suggestions.map(profile => (
				<Story
					key={profile.id}
					img={profile.avatar}
					username={profile.username}
				/>
			))}
		</div>
	);
}

export default Stories;
