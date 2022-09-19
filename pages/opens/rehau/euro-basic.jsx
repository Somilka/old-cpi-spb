import MainLayout from "../../../layouts/MainLayout";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";

export default function Grazio() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Rehau Euro Basic</div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <img
                        src="/static/opens/rehau/rehau_euro-basic.png"
                        alt=""
                    />
                </div>
                <div className="hr">
                    Окна Rehau с профилем Euro — наиболее популярные из всей
                    линейки ПВХ-изделий европейского бренда. Это объясняется
                    невысокой стоимостью, красивым внешним видом, широким
                    спектром отделки, высокими тепло- и шумоизоляционными
                    свойствами.
                </div>

                <div className="hl flex column jcsb h100">
                    <h3>Технические параметры Euro 60:</h3>
                    <ul>
                        <li>системная глубина/число камер: 60 мм/3 камеры;</li>
                        <li>максимальная толщина стеклопакета — 32 мм;</li>
                        <li>теплопроводность — 1,6 Вт/Км;</li>
                        <li>теплосбережение — 0,65 2С/Вт;</li>
                        <li>
                            защита от проникновения влаги и воздуха с улицы — 2
                            контура уплотнителей толщиной 8 мм.
                        </li>
                    </ul>
                    <CallMasterBtn />
                </div>
                <div className="hr flex column jcsb h100">
                    <h3>Технические параметры Euro 60:</h3>
                    <ul>
                        <li>монтажная глубина — 70 мм;</li>
                        <li>максимальная толщина стеклопакета — 42 мм;</li>
                        <li>количество камер в профиле Рехау Евро — 5;</li>
                        <li>теплосбережение — 0,78 мС/Вт;</li>
                        <li>звукоизоляция — 43 дБ.</li>
                    </ul>
                    <CallRaschBtn />
                </div>
            </div>
        </MainLayout>
    );
}
