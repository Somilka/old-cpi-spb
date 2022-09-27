import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function euroline() {
    return (
        <MainLayout>
            <div className="content">
                <div className="full flex jcc aic">
                    <img
                        className="wa"
                        height="70px"
                        src="/static/logos/veka_logo.png"
                        alt=""
                    />
                    <div className="title">Euroline 58</div>
                </div>
            </div>
            <div className="content">
                <img
                    src="/static/opens/veka/veka_euroline2.png"
                    alt=""
                    className="hl"
                />
                <div className="hr flex column">
                    <p>
                        <b>VEKA EUROLINE</b> – это наиболее распространенный
                        трехкамерный профиль, шириной 58мм, который можно
                        назвать универсальным. Он подходит для любых регионов
                        страны – как с теплым, так и с холодным климатом,
                        обладает великолепными гидро-, тепло- и
                        звукоизоляционными характеристиками. Такие герметичны,
                        не пропускают сквозняк, имеют привлекательный внешний
                        вид, благодаря чему окна <b>VEKA EUROLINE</b> впишутся в
                        любую обстановку, не испортив ни фасад здания, ни
                        интерьер помещения.
                    </p>
                </div>
            </div>
            <div className="content">
                <CallMasterBtn className="hl" />
                <CallRaschBtn className="hr" />
            </div>
            <div className="content">
                <div className="full flex column">
                    <h3>КЛАССИЧЕСКАЯ СИСТЕМА ОКОННЫХ И ДВЕРНЫХ ПРОФИЛЕЙ</h3>
                    <ul>
                        <li>
                            Стабильная многокамерная система с превосходными
                            изолирующими характеристиками
                        </li>
                        <li>
                            Высокая шумоизоляция обеспечивает тишину и
                            спокойствие Вашего дома
                        </li>
                        <li>
                            Высококачественный пластик, устойчивый к
                            воздействиям внешней среды. Не нуждается ни в
                            покраске, ни в любом ином специальном уходе
                        </li>
                        <li>Ровная гладкая поверхность</li>
                        <li>
                            Использование специальных армирующих усилителей
                            обеспечивает высокую стабильность конструкций​
                        </li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
}
