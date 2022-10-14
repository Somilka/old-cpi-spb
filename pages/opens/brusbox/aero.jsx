import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function Aero() {
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
                    <div className="title">Aero</div>
                </div>
            </div>
            <div className="content">
                <img
                    src="/static/opens/brusbox/brusbox_aero.png"
                    alt=""
                    className="hl"
                />
                <div className="hr flex column">
                    <p>
                    <b>BRUSBOX AERO</b> — наиболее востребованная система профилей в сегменте как корпоративного, так и частного строительства за счет оптимального соотношения ее цены и качества. Система имеет 3-х камерное строение и монтажную глубину 60 мм, что позволяет устанавливать в оконные конструкции стеклопакеты толщиной до 32 мм.<br/>Данная профильная система полностью соответствует требованиям государственных стандартов , что делает ее незаменимой в случаях, когда цена является основополагающим фактором при выборе системы, способной удовлетворить спрос широкого круга потребителей.
                    </p>
                    <h3>Технические характеристики «BRUSBOX AERO»:</h3>
                    <ul>
                        <li>конструктивная ширина — 60 мм</li>
                        <li>количество камер — 3 шт</li>
                        <li>толщина лицевых стенок — 2.5 мм</li>
                        <li>максимальная толщины заполнения — 32 мм</li>
                        <li>
                            сопротивление теплопередаче — 0.82 м2С/Вт (без
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
