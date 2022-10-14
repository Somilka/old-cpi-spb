import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function seventy() {
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
                    <div className="title">70-6</div>
                </div>
            </div>
            <div className="content">
                <img
                    src="/static/opens/brusbox/brusbox_70-6.png"
                    alt=""
                    className="hl"
                />
                <div className="hr flex column">
                    <p>
                    Система <b>BRUSBOX 70-6</b> — новейшее достижение в разработке энергосберегающих профильных систем.<br/>В данной серии имеют увеличенную монтажную глубину — 70мм и максимально возможное для данной глубины количество камер – 6, благодаря чему система <b>BRUSBOX 70-6</b> обеспечивает высокие показатели тепло- и звукоизоляции оконных конструкций и является лидером в премиум-сегменте оконных профилей.
                    </p>
                    <h3>Технические характеристики «BRUSBOX 70-6»:</h3>
                    <ul>
                        <li>конструктивная ширина — 70 мм</li>
                        <li>количество камер — 6 шт</li>
                        <li>толщина лицевых стенок — 3 мм</li>
                        <li>максимальная толщины заполнения — 40 мм</li>
                        <li>
                            сопротивление теплопередаче — 1,02 м2С/Вт (без
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
