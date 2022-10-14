import Link from "next/link";

export default function WinsAlum() {
    return (
        <div className="windows-alum">
            <div className="content">
                <div className="desk-block">
                    <div className="title">
                        Конструкции из алюминиевого сплава
                    </div>
                    <div className="desk-txt">
                        Алюминиевые окна появились у нас на рынке не так давно,
                        однако популярность этих сооружений стремительно
                        набирает обороты. К преимуществам изделий относят:
                        универсальность, лёгкость и прочность металла,
                        привлекательный внешний вид, долгосрочность
                        эксплуатации, резонное вложение средств в покупку. А
                        главное, алюминиевые окна эстетичны и уместны в
                        экстерьере зданий общественного, частного и
                        административного типа. Если подытожить - одни плюсы!
                        <br />
                        Светопрозрачные фасады выглядят стильно и
                        презентабельно. В СПб не найти ни одного современного
                        объекта коммерческой недвижимости или бизнес-комплекса,
                        в оформлении которого не использовался бы тот или иной
                        вид светопрозрачного архитектурного изыска. Каждый из
                        элементов так или иначе выделяется среди других - изо
                        дня в день появляются новые варианты исполнения.
                        Алюминиевый фасад создаёт необычайно изящные
                        архитектурные ансамбли, украшающие и привносящие
                        разнообразие в архитектуру Санкт-Петербурга.
                    </div>
                </div>
                <div className="desk-block">
                    <div className="title">
                        Окно из алюминия и другие конструкции
                    </div>
                    <div className="desk-txt">
                        <p>
                            Прелесть алюминия как металла в исключительной
                            прочности при одновременной легкости этого
                            материала. Сочетания таких качеств – гарант
                            надежности и стандартных оконных профилей, и
                            крупногабаритных установок для оформления фасадов.
                            При этом для самого профиля характерна относительная
                            тонкость функциональных элементов – как результат,
                            максимум светопрозрачной площади и на удивление
                            роскошный внешний вид.
                        </p>
                        <br />
                        <p>Выпускается изделия следующих типов:</p>
                        <ul>
                            <li>Фасадные системы;</li>
                            <li>Оконно-дверные системы;</li>
                            <li>Интерьерные системы.</li>
                        </ul>
                        <br />
                        <p>
                            Указанные установки отличаются повышенной стойкостью
                            к ветровым нагрузкам, выдерживают суровые погодные
                            условия, не боятся повреждений механического
                            характера. Они не деформируются при резких сменах
                            температуры окружающей среды, не привередливы в
                            уходе, а главное - выгодно подчеркивают престижный
                            статус владельца, неважно частное это лицо или
                            организация.
                        </p>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="title">Алюминиевые окна</div>
            </div>
            <div className="content alum-cards">
                <Link href="/opens/alum-slide-doors">
                    <div className="alum-card left min">
                        <img
                            className="alum-card-img"
                            src="/static/winAlum/WinAlum2.jpg"
                            alt=""
                        />
                        <div className="alum-card-name">
                            Алюминиевые раздвижные двери
                        </div>
                    </div>
                </Link>
                <Link href="/opens/light-slide-system">
                    <div className="alum-card right min">
                        <img
                            className="alum-card-img"
                            src="/static/winAlum/WinAlum3.jpg"
                            alt=""
                        />
                        <div className="alum-card-name">
                            Лёгкая раздвижная система
                        </div>
                    </div>
                </Link>
                <Link href="/opens/warm-glazing">
                    <div className="alum-card max left h100">
                        <img
                            className="alum-card-img"
                            src="/static/winAlum/WinAlum4.jpg"
                            alt=""
                        />
                        <div className="alum-card-name">Тёплое остекление</div>
                    </div>
                </Link>
                <Link href="/opens/alum-facades">
                    <div className="alum-card right u-min">
                        <img
                            className="alum-card-img"
                            src="/static/winAlum/WinAlum1.jpg"
                            alt=""
                        />
                        <div className="alum-card-name">Алюминиевые фасады</div>
                    </div>
                </Link>
                <Link href="/opens/light-septums">
                    <div className="alum-card left u-min h100">
                        <img
                            className="alum-card-img"
                            src="/static/winAlum/WinAlum8.jpg"
                            alt=""
                        />
                        <div className="alum-card-name">Лёгкие перегородки</div>
                    </div>
                </Link>
                <Link href="/opens/cold-glazing">
                    <div className="alum-card max right">
                        <img
                            className="alum-card-img"
                            src="/static/winAlum/WinAlum5.jpg"
                            alt=""
                        />
                        <div className="alum-card-name">
                            Холодное остекление
                        </div>
                    </div>
                </Link>
                <Link href="/opens/ventilated-facade">
                    <div className="alum-card left min">
                        <img
                            className="alum-card-img"
                            src="/static/winAlum/WinAlum6.jpg"
                            alt=""
                        />
                        <div className="alum-card-name">
                            Вентилируемый фасад
                        </div>
                    </div>
                </Link>
                <Link href="/opens/skylights">
                    <div className="alum-card right min">
                        <img
                            className="alum-card-img"
                            src="/static/winAlum/WinAlum7.jpg"
                            alt=""
                        />
                        <div className="alum-card-name">Зенитные фонари</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
