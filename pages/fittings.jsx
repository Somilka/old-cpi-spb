import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export default function Fittings() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Фурнитура и ручки</div>
            </div>
            <div className="content fittings">
            <Link href="/fittings/sandwiches/sandwich10">
                <div className="fitting">
                <div className="fitting-name">
                        <p className="fitting-title">
                        Сэндвич-панель стандарт
                        </p>
                        <p className="brand">10мм</p>
                        <div className="features">
                            <span className="feature">белая</span>
                            <span className="feature">матовая</span>
                            <span className="feature">пластик</span>
                            <span className="feature">0.8мм</span>
                        </div>
                    </div>
                    <img src="/static/fittings/sandwich.jpg" alt="" className="img-fitting" />
                </div>
            </Link>
            <Link href="/fittings/sandwiches/sandwich24">
                <div className="fitting">
                <div className="fitting-name">
                        <p className="fitting-title">
                        Сэндвич-панель стандарт
                        </p>
                        <p className="brand">24мм</p>
                        <div className="features">
                            <span className="feature">белая</span>
                            <span className="feature">матовая</span>
                            <span className="feature">пластик</span>
                            <span className="feature">0.8мм</span>
                        </div>
                    </div>
                    <img src="/static/fittings/sandwich.jpg" alt="" className="img-fitting" />
                </div>
            </Link>
            <Link href="/fittings/sandwiches/sandwich32">
                <div className="fitting">
                <div className="fitting-name">
                        <p className="fitting-title">
                        Сэндвич-панель стандарт
                        </p>
                        <p className="brand">32мм</p>
                        <div className="features">
                            <span className="feature">белая</span>
                            <span className="feature">матовая</span>
                            <span className="feature">пластик</span>
                            <span className="feature">0.8мм</span>
                        </div>
                    </div>
                    <img src="/static/fittings/sandwich.jpg" alt="" className="img-fitting" />
                </div>
            </Link>
            <Link href="/fittings/handles/hoppe">
                <div className="fitting">
                    <div className="fitting-name">
                        <p className="fitting-title">
                        Ручка оконная
                        </p>
                        <p className="brand"> Hoppe (compact)</p>
                        <div className="features">
                            <span className="feature">37mm</span>
                        </div>
                    </div>
                    <img src="/static/fittings/hoppe_compact.jpg" alt="" className="img-fitting" />
                </div>
            </Link>
            <Link href="/fittings/handles/roto">
                <div className="fitting">
                    <div className="fitting-name">
                        <p className="fitting-title">
                        Ручка оконная
                        </p>
                        <p className="brand"> Roto Swing</p>
                        <div className="features">
                            <span className="feature">37mm</span>
                        </div>
                    </div>
                    <img src="/static/fittings/roto_swing.jpg" alt="" className="img-fitting" />
                </div>
            </Link>
            </div>
        </MainLayout>
    );
};
