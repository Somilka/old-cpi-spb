import MainLayout from "../layouts/MainLayout";
import Slider from "../components/Slider/Slider";
import Link from "next/link";
// import img from '../public/dev_logo.png';

export default function Index() {
    return (
        <MainLayout title="Главная" page="main">
            <div className="block main">
                <div className="content">
                    <div className="welcome-text">
                        <h2 className="welcome-title">
                            Производство пластиковых, алюминиевых и деревянных
                            окон в Санкт-Петербурге
                        </h2>
                        <div className="welcome-par">
                            “Центр Промышленных Инноваций - СПб” приветствует
                            Вас
                        </div>
                    </div>
                    <div className="welcome-win">
                        <div className="welcome-win-card">
                            <img
                                className="welcome-win-card-img"
                                src="/static/dev_logo.png"
                                alt="dev logo"
                            />
                            <div className="welcome-win-card-text">
                                Пластиковые окна
                            </div>
                        </div>
                        <div className="welcome-win-card">
                            <img
                                className="welcome-win-card-img"
                                src="/static/dev_logo.png"
                                alt="dev logo"
                            />
                            <div className="welcome-win-card-text">
                                Алюминиевые окна
                            </div>
                        </div>
                        <div className="welcome-win-card">
                            <img
                                className="welcome-win-card-img"
                                src="/static/dev_logo.png"
                                alt="dev logo"
                            />
                            <div className="welcome-win-card-text">
                                Деревянные окна
                            </div>
                        </div>
                        <div className="welcome-win-card">
                            <img
                                className="welcome-win-card-img"
                                src="/static/dev_logo.png"
                                alt="dev logo"
                            />
                            <div className="welcome-win-card-text">
                                Противопожарные окна и двери
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="content"> */}
            <Slider />
            {/* </div> */}
            <div className="content">
                <Link href="/sills">
                    <div className="category big">
                        <img
                            src="/static/categories/sills.png"
                            alt="Подоконники"
                            className="category-img"
                        />
                        <div className="category-name">Подоконники</div>
                    </div>
                </Link>
                <Link href="/">
                    <div className="category big">
                        <img
                            src="/static/dev_logo.png"
                            alt="Подоконники"
                            className="category-img"
                        />
                        <div className="category-name">Стеклопакеты</div>
                    </div>
                </Link>
                <Link href="/wos">
                    <div className="category big">
                        <img
                            src="/static/categories/wos.jpg"
                            alt="Подоконники"
                            className="category-img"
                        />
                        <div className="category-name">
                            Системы открывания окон
                        </div>
                    </div>
                </Link>
                <Link href="/drainages">
                    <div className="category min">
                        <img
                            src="/static/categories/drainages.jpg"
                            alt="Подоконники"
                            className="category-img"
                        />
                        <div className="category-name">Водоотливы</div>
                    </div>
                </Link>
                <Link href="/slopes">
                    <div className="category min">
                        <img
                            src="/static/categories/slopes.jpg"
                            alt="Подоконники"
                            className="category-img"
                        />
                        <div className="category-name">Откосы</div>
                    </div>
                </Link>
                <Link href="/mosqnets">
                    <div className="category min">
                        <img
                            src="/static/categories/mosqnets.png"
                            alt="Подоконники"
                            className="category-img"
                        />
                        <div className="category-name">Москитные сетки</div>
                    </div>
                </Link>
                <Link href="/fittings">
                    <div className="category min">
                        <img
                            src="/static/categories/fittings.jpg"
                            alt="Подоконники"
                            className="category-img"
                        />
                        <div className="category-name">Фурнитура/ручки</div>
                    </div>
                </Link>
            </div>
            <div className="content">
                <div className="title">Наши партнёры</div>
                <div className="partner-imgs">
                    <img
                        src="/static/partners/partner1.png"
                        alt="РОСАТОМ"
                        className="partner"
                    />
                    <img
                        src="/static/partners/partner2.png"
                        alt="КОНТУР"
                        className="partner"
                    />
                    <img
                        src="/static/partners/partner3.png"
                        alt="АРГОС"
                        className="partner"
                    />
                    <img
                        src="/static/partners/partner4.png"
                        alt="B2B Center"
                        className="partner"
                    />
                    <img
                        src="/static/partners/partner5.png"
                        alt="Фабрикант"
                        className="partner"
                    />
                    <img
                        src="/static/partners/partner6.svg"
                        alt="ТИТАН2"
                        className="partner"
                    />
                    <img
                        src="/static/partners/partner7.png"
                        alt=""
                        className="partner"
                    />
                </div>
            </div>
        </MainLayout>
    );
}
