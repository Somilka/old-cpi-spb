import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function softline82() {
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
                    <div className="title">Softline 82</div>
                </div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <img
                        src="/static/opens/veka/veka_softline_822.png"
                        alt=""
                        className=""
                    />
                    <CallMasterBtn className="" />
                    <CallRaschBtn className="" />
                </div>
                <div className="hr flex column">
                    <h3>СОВРЕМЕННАЯ МНОГОКАМЕРНАЯ СИСТЕМА:</h3>
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
                            обеспечивает высокую стабильность конструкций
                        </li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
}
