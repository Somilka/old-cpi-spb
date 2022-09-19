import MainLayout from "../../../layouts/MainLayout";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";

export default function Grazio() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Rehau Blitz</div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <img src="/static/opens/rehau/rehau_blitz.png" alt="" />
                </div>
                <div className="hr flex column jcsb h100">
                    <h3>Технические характеристики профиля</h3>
                    <p>Модернизированный профиль Рехау Блиц подходит для остекления промышленных и жилых объектов. В нем соединяются традиционные свойства бюджетной линейки оконных профилей и новейших разработок немецкого производителя. Информация из технического каталога Рехау Блиц Нью предоставляет описание свойств и характеристики профиля:</p>
                    <ul>
                        <li>высота створки с нахлестом на раму — 104 мм.</li>
                        <li>наличие трех воздушных камер;</li>
                        <li>армирующий П-образный профиль шириной 1,5-2 мм;</li>
                        <li>возможность использования остекления 4,24 или 32 мм;</li>
                        <li>внешний и внутренний контур уплотнения с нахлестом 6 и 8 мм;</li>
                        <li>толщина внешних стенок 2,7 мм;</li>
                        <li>теплоустойчивость 0,7м²°С/Вт;</li>
                        <li>шумоизоляция до 25 дБ (4 класс звукоизоляции).</li>
                    </ul>
                    <div>Оптимальный набор базовых свойств и характеристик <b>Rehau Bllitz</b>, позволяет использовать обновленный профиль для изготовления оконных и дверных блоков, остекления балконов, лоджий и веранд.</div>
                    <CallMasterBtn />
                    <CallRaschBtn />
                </div>
            </div>
        </MainLayout>
    );
};
