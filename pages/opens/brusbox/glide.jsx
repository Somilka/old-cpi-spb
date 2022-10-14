import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function Glide() {
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
                    <div className="title">Glide</div>
                </div>
            </div>
            <div className="content">
                <img
                    src="/static/opens/brusbox/brusbox_glide.png"
                    alt=""
                    className="hl"
                />
                <div className="hr flex column">
                    <p>
                        Раздвижная система <b>BRUSBOX GLIDE</b> - имеет
                        великолепный внешний вид, придает максимальную
                        функциональность даже самому узкому балкону или лоджии.
                        <br />
                        Система <b>GLIDE</b> позволит Вам открыть новые
                        возможности оконного рынка.
                    </p>
                    <h3>Технические характеристики «BRUSBOX GLIDE»:</h3>
                    <ul>
                        <li>конструктивная ширина — 60 мм</li>
                        <li>количество камер — 3/1 шт</li>
                        <li>класс относительно толщины лицевых стенок — C</li>
                        <li>максимальная толщина заполнения — 16 мм</li>
                        <li>
                            сопротивление теплопередаче — 0,73 м2С/Вт (без
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
