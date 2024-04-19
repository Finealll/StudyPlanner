// @ts-ignore
import {DefaultLayout, DefaultLayoutProps} from "../../layouts/DefaultLayout.tsx";
// @ts-ignore
import React from "react";


export const TeacherMainScreen = (props) => {

    function getLogOutButton() {
        return <div className="logout-button" onClick={props.go} data-to="user-selection"/>
    }

    return <DefaultLayout title="Главная" hasBack={false} go={props.go} buttons={getLogOutButton()} >
        hi teacher!
    </DefaultLayout>
}