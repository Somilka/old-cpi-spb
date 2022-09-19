import MainLayout from "../layouts/MainLayout";

export default function Drainages() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Водоотливы</div>
            </div>
            <div className="content">
                <img src="/static/drainages/drainages.jpg" alt="" className="hl" />
                <p className="hr">
                    Водоотливы предлагаемые нашей компанией охватывают все возможные варианты и конфигурации которые могут понадобиться нашим заказчикам.<br/>
                    Цвета: стандартные - белый, серый и коричневый, также возможна окраска в любой цвет по шкале RAL.<br/>
                    Стороны окраски: стандарт - только снаружи, но также возможна окраска со всех сторон
                </p>
            </div>
        </MainLayout>
    );
};
