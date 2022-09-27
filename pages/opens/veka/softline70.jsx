import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function softline70() {
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
                    <div className="title">Softline 70</div>
                </div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <img
                        src="/static/opens/veka/veka_softline_702.png"
                        alt=""
                        className=""
                    />
                    <CallMasterBtn className="" />
                    <CallRaschBtn className="" />
                </div>
                <div className="hr flex column">
                    <h3>ПРОФИЛЬНАЯ СИСТЕМА ДЛЯ ПРОФЕССИОНАЛЬНЫХ РЕШЕНИЙ:</h3>
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
                            воздействиям внешней среды
                        </li>
                        <li>Ровная гладкая поверхность</li>
                        <li>
                            Использование специальных армирующих усилителей
                            обеспечивает высокую стабильность конструкции
                        </li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
}
