type Props = {
	large?: boolean;
	img?: string;
	username?: string;
};
let seed = 1;
function Story({img, username}: Props) {
	return (
		<div className='z-0'>
			<img
				className={`h-14 w-14 p-[1.5px] border-2 border-red-500 object-contain rounded-full cursor-pointer hover:scale-110 transition transform duration-200 ease-out `}
				src={`https://avatars.dicebear.com/api/open-peeps/${
					seed++ || 'placeholder'
				}.svg`}
				alt=''
			/>
			<p className='text-xs w-14 truncate text-center'>{username}</p>
		</div>
	);
}

export default Story;
