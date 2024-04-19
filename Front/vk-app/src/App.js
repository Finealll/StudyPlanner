import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge-mock';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Components from "./components/Components.tsx";
import './App.css'
import {UserSelection} from "./panels/UserSelector/UserSelector.tsx";

const App = () => {
	const [activePanel, setActivePanel] = useState('user-selection');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			await bridge.send('VKWebAppInit');
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const selectUser = e => {
		console.log(e.currentTarget.dataset.to);
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider appearance={"light"}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Components id='components' go={go} />
								<UserSelection id='user-selection' userSelect={selectUser} />
								<Persik id='persik' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
