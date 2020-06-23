import React from 'react';

import Header from './Components/Header/header';
import Table from './Components/Table/table';

import { AppContext } from './AppContexts';

export default function App() {
	const appContext = {
	}

	return (
		<AppContext.Provider value={appContext}>
				<div>
					<Header />
					<Table />
				</div>
		</AppContext.Provider>
	);
}