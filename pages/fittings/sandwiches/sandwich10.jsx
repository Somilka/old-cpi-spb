import MainLayout from "../../../layouts/MainLayout";

export default function Sandwich10() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Сэндвич-панель стандарт 10мм</div>
                <div className="full flex jcc">
                    <div className="feature">белая</div> 
                    <div className="feature">матовая</div> 
                    <div className="feature">пластик</div> 
                    <div className="feature">0.8мм</div>
                </div>
            </div>
            <div className="content">
                <img src="/static/fittings/sandwich.jpg" alt="" className="hl" />
                <div className="flex column hr">
                    <p>Сэндвич-панели состоят из трех слоев разнородных материалов. Эта разнородность придает им свойства, объединяющие достоинства обоих материалов. Например, внутренний слой из экструзионного вспененного полистирола с закрытой ячеистой структурой обеспечивает хорошую теплоизоляцию и малый вес. Наружные слои из жесткого пластика — ударостойкость, эстетичный внешний вид, жесткость и твердость поверхности.</p>
                    <div className="sizes flex column">
                        <div className="sizes-title">
                            Размеры:
                        </div>
                        <div className="size">1500x3000x10</div>
                        <div className="size">2000x3000x10</div>
                        <div className="size">2500x3000x10</div>
                        <div className="size">3000x3000x10</div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
