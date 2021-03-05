import { FC } from 'react';
import './styles.css';
import { GridView, Moon, Settings } from '../icons';

const App: FC = () => {
	return (
		<div className='py-3 px-5'>
			<div className='flex items-center'>
				<header>
					<h1 className='font-bold text-2xl'>Simple Start</h1>
				</header>

				<div className='flex mx-auto'>
					<h3 className='font-semibold tracking-wide mr-1'>Workspace:</h3>
					<span className='px-3 text-black text-opacity-50 tracking-tight'>none (click here to create a new one)</span>
				</div>

				<nav className='flex space-x-4 items-center'>
					<button>
						<GridView className='w-7 h-7' />
					</button>
					<button>
						<Moon className='w-7 h-7' />
					</button>
					<button>
						<Settings className='w-7 h-7' />
					</button>

					<span className='border-l border-gray-300 w-1 h-7' />

					<button className='font-bold text-sm text-white bg-black px-2.5 py-1.5 rounded tracking-wide'>
						Add a bookmark
					</button>
				</nav>
			</div>
		</div>
	);
};

export default App;
