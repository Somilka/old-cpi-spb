import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function aclass() {
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
                    <div className="title">Aclass</div>
                </div>
            </div>
            <div className="content">
                <img
                    src="/static/opens/brusbox/brusbox_aclass.png"
                    alt=""
                    className="hl"
                />
                <div className="hr flex column">
                    <p>
                    В 2018 году на рынке появилась новая система <b>«BRUSBOX ACLASS»</b>. относящейся к классу исполнения — А, взамен, системы «BRUSBOX 60-3», не отвечающей современным более жестким требованиям ГОСТ 30673-2013 к толщине лицевых стенок систем профилей ПВХ.
                    </p>
                    <h3>Технические характеристики «BRUSBOX ACLASS»:</h3>
                    <ul>
                        <li>конструктивная ширина — 60 мм</li>
                        <li>количество камер — 3 шт</li>
                        <li>толщина лицевых стенок — 3 мм</li>
                        <li>максимальная толщины заполнения — 32 мм</li>
                        <li>
                            сопротивление теплопередаче — 0,84 м2С/Вт (без
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
