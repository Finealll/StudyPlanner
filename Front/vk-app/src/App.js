import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge-mock';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Components from "./components/Components.tsx";
import './App.css'
import {UserSelection} from "./panels/UserSelector/UserSelector.tsx";
import {TeacherMain} from "./panels/TeacherMain/TeacherMain.tsx";
import {StudentMain} from "./panels/StudentMain/StudentMain.tsx";
import {TeacherProfile} from "./panels/TeacherProfile/TeacherProfile.tsx";
import {StudentTeacherView} from "./panels/StudentTeacherView/StudentTeacherView.tsx";
import {string} from "prop-types";

const App = () => {
	const [activePanel, setActivePanel] = useState('components');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [studentTeacherViewId, setStudentTeacherViewId] = useState(null);

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

	const goStudentTeacherView = id => {
		setStudentTeacherViewId(id)
		setActivePanel('student-teacher-view');
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
								<UserSelection id='user-selection' go={go}/>
								<TeacherMain id='teacher-main' go={go}/>
								<TeacherProfile id='teacher-profile' go={go}/>
								<StudentMain id='student-main' go={go} goStudentTeacherView={goStudentTeacherView}/>
								<StudentTeacherView id='student-teacher-view' go={go} teacherId={studentTeacherViewId}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
