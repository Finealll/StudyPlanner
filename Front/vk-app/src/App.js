import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge-mock';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Components from "./components/Components.tsx";
import './App.css'
import {UserSelection} from "./panels/UserSelector/UserSelector.tsx";
import {TeacherMainScreen} from "./panels/TeacherMainScreen/TeacherMainScreen.tsx";
import {StudentMainScreen} from "./panels/StudentMainScreen/StudentMainScreen.tsx";

const App = () => {
	const [activePanel, setActivePanel] = useState('components');
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
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider appearance={"light"}>
			<AdaptivityProvider>
				<AppRoot>
					<div id="modal-root"/>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go}/>
								<Components id='components' go={go}/>
								<UserSelection id='user-selection' userSelect={selectUser}/>
								<TeacherMainScreen id='teacher-main' go={go}/>
								<StudentMainScreen id='student-main' go={go}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
