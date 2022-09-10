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
			<div className='flex pl-5 justify-between p-2 w-full text-center md:max-w-4xl mx-auto '>
				<div
					className='relative w-40 mr-4 md:inline-grid cursor-pointer'
					onClick={() => router.push('/')}>
					<Image
						src='/igtext.svg'
						alt='Picture of the author'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div className='w-screen hidden md:inline'>
					<div className='mt-1 relative w-1/2 mx-auto rounded-md '>
						<div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
							<SearchIcon
								className='h-5 w-5 text-gray-400'
								aria-hidden='true'
							/>
						</div>
						<input
							type='text'
							className='bg-gray-200 items-center mx-auto focus:ring-gray-200 w-full focus:border-black block pl-10 sm:text-sm border-none rounded-md'
							placeholder='Search'
						/>
					</div>
				</div>

				<div className='flex items-center justify-end space-x-4'>
					<HomeIcon
						className='navBtn h-7 md:h-8'
						onClick={() => router.push('/')}
					/>

					{session ? (
						<>
							<div className='relative navBtn'>
								<PaperAirplaneIcon className='navBtn ' />
								<div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse'>
									3
								</div>
							</div>
							<PlusCircleIcon
								className='h-7 md:h-8 cursor-pointer'
								onClick={() => setOpen(true)}
							/>

							<UserGroupIcon className='navBtn h-7 md:h-8' />
							<HeartIcon className='navBtn h-7 md:h-8' />
							<img
								onClick={signOut}
								className='cursor-pointer rounded-full h-7 md:h-8'
								src={session.user.image}
								alt=''
							/>
						</>
					) : (
						<button className='flex flex-row w-14' onClick={signIn}>
							Sign In
						</button>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
