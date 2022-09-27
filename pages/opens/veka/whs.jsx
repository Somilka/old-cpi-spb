import MainLayout from "../../../layouts/MainLayout";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";

export default function whs() {
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
                    <div className="title">Whs</div>
                </div>
            </div>
            <div className="content">
                <div className="hl flex column">
                    <img
                        src="/static/opens/veka/veka_whs2.png"
                        alt=""
                        className=""
                    />
                    <CallMasterBtn className="" />
                    <CallRaschBtn className="" />
                </div>
                <div className="hr flex column">
                    <h3>
                        БАЗОВЫЙ ПРОФИЛЬ VEKA, ИМЕЮЩИЙ ОТЛИЧНЫЕ ХАРАКТЕРИСТИКИ:
                    </h3>
                    <ul>
                        <li>
                            Самый доступный по цене вариант профильной системы
                            от VEKA, обладающий всеми необходимыми сертификатами
                            качества как противопожарными, так и гигиеническими
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
                        <li>Матовая поверхность профиля</li>
                        <li>
                            Замкнутое металлическое армирование внутри профиля
                            обеспечит хорошую стабильность конструкций. Материал
                            армирования: оцинкованная сталь
                        </li>
                        <li>
                            WHS представляет собой профильную систему c
                            номинальной толщиной наружной стенки 2,5 мм.
                        </li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
}
