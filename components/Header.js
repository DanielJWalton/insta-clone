import Image from 'next/image';
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from '@heroicons/react/outline';
import {HomeIcon} from '@heroicons/react/solid';
import {signIn, signOut, useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {modalState} from '../atoms/modalAtom';
import {useRecoilState} from 'recoil';

function Header() {
	const {data: session, status} = useSession();
	const [open, setOpen] = useRecoilState(modalState);
	const router = useRouter();

	return (
		<header className='shadow-sm border-b bg-white sticky top-0 z-50'>
			<div className='flex justify-between p-2 max-w-6xl mx-5 xl:mx-auto'>
				<div
					className='hidden relative w-24 lg:inline-grid cursor-pointer'
					onClick={() => router.push('/')}>
					<Image
						src='https://links.papareact.com/ocw'
						alt='Picture of the author'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div
					className='relative w-6 md:w-8 flex-shrink-0 lg:hidden cursor-pointer'
					onClick={() => router.push('/')}>
					<Image
						src='https://links.papareact.com/jjm'
						alt='Picture of the author'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div className='w-screen'>
					<div className='mt-1 p-3 relative rounded-md'>
						<div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
							<SearchIcon
								className='h-3 w-3 text-gray-400'
								aria-hidden='true'
							/>
						</div>
						<input
							type='text'
							className='bg-gray-50 focus:ring-black w-full focus:border-black block pl-10 sm:text-sm border-gray-300 rounded-md'
							placeholder='Search'
						/>
					</div>
				</div>

				<div className='flex items-center justify-end space-x-4'>
					<HomeIcon
						className='h-5 md:h-8 navBtn'
						onClick={() => router.push('/')}
					/>

					<MenuIcon className='h-6 md:h-8 md:hidden cursor-pointer' />

					{session ? (
						<>
							<div className='relative navBtn'>
								<PaperAirplaneIcon className='navBtn' />
								<div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse'>
									3
								</div>
							</div>
							<PlusCircleIcon
								className='h-7 md:h-8 cursor-pointer'
								onClick={() => setOpen(true)}
							/>

							<UserGroupIcon className='navBtn h-5 md:h-8' />
							<HeartIcon className='navBtn h-5 md:h-8' />
							<img
								onClick={signOut}
								className='cursor-pointer rounded-full h-5 md:h-8'
								src={session.user.image}
								alt=''
							/>
						</>
					) : (
						<button onClick={signIn}>Sign In</button>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
