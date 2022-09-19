import MainLayout from "../../../layouts/MainLayout";

export default function Hoppe() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Ручка оконная Roto Swig</div>
                <div className="full flex jcc">
                    <div className="feature">37mm</div>
                </div>
            </div>
            <div className="content">
                <img className="hl" src="/static/fittings/roto_swig/roto_swig1.jpg" alt="" />
                <img className="hr" src="/static/fittings/roto_swig/roto_swig2.jpg" alt="" />
                <h2 className="full">Технические характеристики:</h2>
                <div className="flex aic hl">
                    <h3>Материал:</h3>
                    <div className="feature">Металл</div>
                </div>
                <div className="flex aic hr">
                    <h3>Тип товара:</h3>
                    <div className="feature">Ручка оконная</div>
                </div>
                <div className="flex aic hl">
                    <h3>Страна производитель:</h3>
                    <div className="feature">Германия</div>
                </div>
                <div className="flex aic hr">
                    <h3>Цвет:</h3>
                    <div className="feature">Белый</div>
                </div>
                <div className="flex aic hl">
                    <h3>Длина штифта:</h3>
                    <div className="feature">37 мм</div>
                </div>
                <div className="flex aic hr">
                    <h3>Ключ/Блокиратор:</h3>
                    <div className="feature">Нет</div>
                </div>
                <div className="flex aic hl">
                    <h3>Материал окна:</h3>
                    <div className="feature">Дерево</div>
                </div>
                <div className="flex aic hr">
                    <h3>Материал окна:</h3>
                    <div className="feature">ПВХ</div>
                </div>
                <div className="flex aic hl">
                    <h3>Страна бренда:</h3>
                    <div className="feature">Германия</div>
                </div>
                

            </div>
        </MainLayout>
    );
};
