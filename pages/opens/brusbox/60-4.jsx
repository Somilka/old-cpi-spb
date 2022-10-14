import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function sixty() {
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
                    <div className="title">60-4</div>
                </div>
            </div>
            <div className="content">
                <img
                    src="/static/opens/brusbox/brusbox_60-4.png"
                    alt=""
                    className="hl"
                />
                <div className="hr flex column">
                    <p>
                    <b>BRUSBOX 60-4</b> – универсальная, обладающая безупречным качеством и высокими теплотехническими характеристиками система профилей. Система имеет монтажную глубину 60 мм и 4-х камерное строение. Благодаря высокому уровню потребительских свойств, система BRUSBOX 60-4 применяется для изготовления оконных конструкций любых конфигураций. И используется в остеклении разных строительных объектов: от многоквартирных домов до элитных коттеджей.
                    </p>
                    <h3>Технические характеристики «BRUSBOX 60-4»:</h3>
                    <ul>
                        <li>конструктивная ширина — 60 мм</li>
                        <li>количество камер — 4 шт</li>
                        <li>толщина лицевых стенок — 2.8 мм</li>
                        <li>максимальная толщины заполнения — 32 мм</li>
                        <li>
                            сопротивление теплопередаче — 0,83 м2С/Вт (без
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
