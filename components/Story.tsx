type Props = {
	large?: boolean;
	img?: string;
	username?: string;
};
let seed = 1;
function Story({img, username}: Props) {
	return (
		<div className='z-0 '>
			<div className='w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5'>
				<img
					className={`h-14 w-14 p-[.05]  border-2 border-gradient-to-r from-pink-500 via-red-500 to-yellow-500 object-contain rounded-full cursor-pointer hover:scale-110 transition transform duration-200 ease-out `}
					src={`https://avatars.dicebear.com/api/open-peeps/${
						seed++ || 'placeholder'
					}.svg`}
					alt=''
				/>
			</div>

			<p className='text-xs w-14 truncate text-center'>{username}</p>
		</div>
	);
}

export default Story;
