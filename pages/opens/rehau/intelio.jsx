import MainLayout from "../../../layouts/MainLayout";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";

export default function Intelio() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Rehau Intelio</div>
            </div>
            <div className="content">
                <div className="hl flex column">
                <img src="/static/opens/rehau/rehau_grazio.png" alt="" />
                <div><b>Rehau Intelio</b> — профиль, появившийся на рынке не так давно. Новый продукт быстро завоевал популярность. Потребители высоко оценили качество и сошлись во мнении, что это самые тихие окна в линейке <b>Rehau</b>.</div>
                </div>
                <div className="hr flex column jcsb h100">
                    <h3>Технические характеристики Intelio​:</h3>
                    <ul>
                        <li>число камер — 6;</li>
                        <li>звукоизоляция — 4 класс;</li>
                        <li>шумопоглощение — до 36 дБ;</li>
                        <li>сопротивление ветровой нагрузке — класс А;</li>
                        <li>противодействие потерям тепла — 0,98-0,99 м2°С/Вт;</li>
                        <li>герметичность — класс А;</li>
                        <li>устойчивость к влаге — А;</li>
                        <li>взломобезопасность — 3 класс:</li>
                        <li>долговечность — минимум 60 лет.</li>
                    </ul>
                    <div className="cost">Цена от: 8000</div>
                    <CallMasterBtn />
                    <CallRaschBtn />
                </div>
            </div>
        </MainLayout>
    );
};
