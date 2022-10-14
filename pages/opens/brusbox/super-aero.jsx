import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function SuperAero() {
    return (
        <MainLayout>
            <div className="content">
                <div className="full flex jcc aic">
                    <img
                        className="wa"
                        height="70px"
                        src="/static/logos/brusbox_logo.png"
                        alt=""
                    />
                    <div className="title">Super Aero</div>
                </div>
            </div>
            <div className="content">
                <img
                    src="/static/opens/brusbox/brusbox_super-aero.png"
                    alt=""
                    className="hl"
                />
                <div className="hr flex column">
                    <p>
                        <b>BRUSBOX SUPER AERO</b> – 5-ти камерная система
                        профилей с монтажной глубиной 70 мм, идеальное решение
                        для тех, кто делает выбор, основываясь на рациональном
                        подходе, позволяющем достойно оценить оптимальное
                        сочетание высоких показателей энергоэффективности окон
                        из профиля <b>SUPER AERO</b> и их доступной цены.
                    </p>
                    <h3>Технические характеристики «BRUSBOX SUPER AERO»:</h3>
                    <ul>
                        <li>конструктивная ширина — 70 мм</li>
                        <li>количество камер — 5 шт</li>
                        <li>толщина лицевых стенок — 2.5 мм</li>
                        <li>максимальная толщины заполнения — 40 мм</li>
                        <li>
                            сопротивление теплопередаче — 0.97 м2С/Вт (без
                            армирования)
                        </li>
                    </ul>
                    <CallMasterBtn />
                    <CallRaschBtn />
                </div>
            </div>
        </MainLayout>
    );
}
