import MainLayout from "../layouts/MainLayout";

export default function Windows() {
    return (
        <MainLayout>
            <div className="content"><div className="title">Стеклопакеты</div></div>
            {/* <div className="content">
                <h3 className="full tac">Объекты использования стеклопакетов:</h3>
                <p className="f3 flex jcc aic">В многоэтажные дома.</p>
                <p className="s3 flex jcc aic">Дачи.</p>
                <p className="t3 flex jcc aic">Коттеджи.</p>
                <p className="f3 flex jcc aic">Частные дома.</p>
                <h3 className="s3 flex jcc aic">И в любое другое место</h3>
                <p className="t3 flex jcc aic">Оранжереи.</p>
                <p className="f3 flex jcc aic">Зимние сады.</p>
                <p className="s3 flex jcc aic">Школы.</p>
                <p className="t3 flex jcc aic">Детские сады.</p>
            </div> */}
            <div className="content">
                <div className="hl flex column jcsb h100">
                    <div className="flex column">
                        <h3>
                            Однокамерные:
                        </h3>
                        <p>
                            Однокамерный стеклопакет – это конструкция, состоящая из двух стекол, герметично соединенных по контуру с помощью дистанционной рамки с осушителем. Преимущества однокамерных стеклопакетов: Незначительный вес конструкции.
                        </p>
                    </div>
                    <div className="cost">От 1220 руб.</div>
                </div>
                <img src="/static/windows/window1.jpg" alt="" className="hr" />
            </div>
            <div className="content">
                <div className="hl flex column jcsb h100">
                    <div className="flex column">
                        <h3>
                        Двухкамерный:
                        </h3>
                        <p>
                        Двухкамерный стеклопакет — выгодное приобретение, для ценителей уюта в доме и комфортного проживания.<br/>Преимущества двухкамерных стеклопакетов: Двухкамерные стеклопакеты действуют как изолятор, наличие двух воздушных камер в оконных системах позволит сохранить тепло в жилом помещении
                        </p>
                    </div>
                    <div className="cost">От 1660 руб.</div>
                </div>
                <img src="/static/windows/window2.png" alt="" className="hr" />
            </div>
            <div className="content">
                <div className="hl flex column jcsb h100">
                    <div className="flex column">
                        <h3>
                        Трехкамерный стеклопакет:
                        </h3>
                        <p>
                        Как и любой стеклопакет, трехкамерный представляет собой замкнутую стеклянную конструкцию из разделенных дистанционными рамками стекол одинаковой или различной толщины и образовавшихся между этими стеклами герметичных воздушных камер – заполненных специальным воздушным или газовым составом промежутков.<br/>Преимуществом трехкамерных стеклопакетов является устойчивость к очень сильным морозам и ветрам.
                        </p>
                    </div>
                    <div className="cost">Расчет стоимости стеклопакета по запросу.</div>
                </div>
                <img src="/static/windows/window3.png" alt="" className="hr" />
            </div>
            <div className="content">
                <div className="hl flex column jcsb h100">
                    <div className="flex column">
                        <h3>
                        Тепло пакет:
                        </h3>
                        <p>
                        Зачастую зимой температура опускается ниже -25 градусов и очень важно сохранить тепло в помещении. Теплопакеты -это современная технология, созданная на основе мирового опыта и разработок компаний. Система представляет собой 1- или 2-камерный стеклопакет, одно из стекол которого энергосберегающее.
                        </p>
                    </div>
                    <div className="cost">От 1400 руб.</div>
                </div>
                <img src="/static/windows/window4.png" alt="" className="hr" />
            </div>
            <div className="content">
                <div className="hl flex column jcsb h100">
                    <div className="flex column">
                        <h3>
                        Энергосберегающий стеклопакет:
                        </h3>
                        <p>
                        Стеклопакет энергосберегающий с аргоном. Содержит специальный газ, который создает определенное давление внутри системы и препятствует выходу тепла наружу.
                        </p>
                    </div>
                    <div className="cost">От 1300 руб.</div>
                </div>
                <img src="/static/windows/window5.png" alt="" className="hr" />
            </div>
            <div className="content">
                <div className="hl flex column jcsb h100">
                    <div className="flex column">
                        <h3>
                        Двухкамерный стеклопакет энергосберегающий:
                        </h3>
                        <p>
                        Он представляет собой определенный вид остекления, который отлично сохраняет тепло в помещении. В отличие от обычных, стеклопакеты с энергосберегающим стеклом изготавливаются из специального стекла, поверх которого наносится определенное низкоэмиссионное покрытие.
                        </p>
                    </div>
                    <div className="cost">От 1770 руб.</div>
                </div>
                <img src="/static/windows/window6.jpg" alt="" className="hr" />
            </div>
            <div className="content">
                <div className="hl flex column jcsb h100">
                    <div className="flex column">
                        <h3>
                        Солнцезащитный стеклопакет:
                        </h3>
                        <p>
                        Солнцезащитный стеклопакет - конструкция в составе которых применяется стекло с солнцезащитными свойствами. Функция солнцезащитных стекол - это защита помещения от разных видов солнечного излучения, путем отражения и/или поглощения с дальнейшим рассеиванием энергии.
                        </p>
                    </div>
                    <div className="cost">От 1900 руб.</div>
                </div>
                <img src="/static/windows/window7.jpg" alt="" className="hr" />
            </div>
        </MainLayout>  
    );
};
