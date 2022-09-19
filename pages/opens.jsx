import { useState } from "react";
import WinsMain from "../components/WinsMain";
import MainLayout from "../layouts/MainLayout";
import WinsPVH from "../components/WinsPVH";
import WinsAlum from "../components/WinsAlum";

export default function Opens() {

    const [winNav, setWinNav] = useState(0);

    const OpensCategories = [
        {
            id: 0,
            title: 'Общее',
            element: <WinsMain/>
        },
        {
            id: 1,
            title: 'Окна ПВХ',
            element: <WinsPVH/>
        },
        {
            id: 2,
            title: 'Алюминиевые окна',
            element: <WinsAlum/>
        },
        {
            id: 3,
            title: 'Деревянные окна',
            element: null
        },
        {
            id: 4,
            title: 'Противопожарные двери и окна',
            element: null
        }
    ];

    return (
        <MainLayout>
            <div className="content">
                <div className="win-nav">
                    {OpensCategories.map(({id, title}, i) => (
                        <div className={winNav == id ? "win-nav-item selected" : "win-nav-item"} key={id} onClick={() => {setWinNav(id)}}>{title}</div>
                    ))}
                </div>
            </div>
            {OpensCategories.map(({id,title,element}) => (
                id == winNav ? element : null
            ))}
        </MainLayout>
    );
};
