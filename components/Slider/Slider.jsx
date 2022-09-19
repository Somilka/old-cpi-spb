import React, {useState, useEffect} from 'react';

const slides = [
    {id: 1, src: '/static/slides/slide1.png', alt: ''},
    {id: 2, src: '/static/slides/slide4.png', alt: ''},
    {id: 3, src: '/static/slides/slide1.png', alt: ''},
    {id: 4, src: '/static/slides/slide4.png', alt: ''},
]

function Slider() {
    const [curSlide, upCurSlide] = useState(0);
    const [curPadd, upCurPadd] = useState(0);
    const [intCount, upIntCount] = useState(0);

    function showNav(i) {
        return <div className={curSlide === i ? "slider__nav selected" : "slider__nav"} key={i} onClick={() => {updateSlide(i)}}></div>;
    }

    function updateSlide(i) {
        upCurPadd(Math.round(document.querySelector('.slide').getBoundingClientRect().width) * i);
        upCurSlide(i);
        let tempPadd = Math.round(document.querySelector('.slide').getBoundingClientRect().width) * i;
        document.querySelector('.slides').style.marginLeft = Math.round(tempPadd) * -1 + 'px';
    }

    function nextSlide() {
        if (curSlide + 1 < document.querySelectorAll('.slide').length) {
            upCurPadd(Math.round(curPadd) + Math.round(document.querySelector('.slide').getBoundingClientRect().width));
            let tempPadd = Math.round(curPadd) + Math.round(document.querySelector('.slide').getBoundingClientRect().width);
            console.log(tempPadd);
            document.querySelector('.slides').style.marginLeft = Math.round(tempPadd) * -1 + 'px';
            upCurSlide(curSlide + 1);
        } else {
            document.querySelector('.slides').style.marginLeft = 0 + 'px';
            upCurPadd(0);
            upCurSlide(0);
        }
    }

    function prevSlide() {
        if (curSlide - 1 >= 0) {
            let tempPadd = Math.round(curPadd) - Math.round(document.querySelector('.slide').getBoundingClientRect().width);
            console.log(tempPadd);
            document.querySelector('.slides').style.marginLeft = Math.abs(Math.round(tempPadd)) * -1 + 'px';
            upCurPadd(tempPadd);
            upCurSlide(curSlide - 1);

            // console.log(Math.round(curPadd) - Math.round(document.querySelector('.slide').getBoundingClientRect().width));
            // // let tempPadd = Math.round(curPadd) - Math.round(document.querySelector('.slide').getBoundingClientRect().width);
            // document.querySelector('.slides').style.marginLeft = Math.abs(Math.round(tempPadd)) * -1 + 'px';
            // upCurPadd(Math.round(curPadd) - Math.round(document.querySelector('.slide').getBoundingClientRect().width));
            // upCurSlide(curSlide - 1);
        } else {
            document.querySelector('.slides').style.marginLeft = Math.abs(((document.querySelectorAll('.slide').length - 1) * Math.round(document.querySelector('.slide').getBoundingClientRect().width))) * -1 + 'px';
            console.log(((document.querySelectorAll('.slide').length - 1) * Math.round(document.querySelector('.slide').getBoundingClientRect().width)) * -1);
            upCurPadd((document.querySelectorAll('.slide').length - 1) * Math.round(document.querySelector('.slide').getBoundingClientRect().width));
            upCurSlide(document.querySelectorAll('.slide').length - 1);
        }
    }

    return (
            <div className="slider">
                {/* <div className="flex"> */}
                    <div className="slide-control prev" onClick={() => {prevSlide()}}>
                        <img src='/static/arrows/arrow-prev.svg' alt="" className="slide-control-arrow" />
                    </div>
                    <div className="slider__content">
                        <div className="slides">
                            {slides.map(({id, src, alt}) => (
                                <img key={id} src={src} alt={alt} className="slide" />
                            ))}
                            {/* <img src={slide1} alt="" className="slide" /> */}
                            {/* <img src={slide4} alt="" className="slide" /> */}
                            {/* <img src={slide1} alt="" className="slide" /> */}
                            {/* <img src={slide4} alt="" className="slide" /> */}
                        </div>
                    </div>
                    <div className="slide-control next" onClick={() => {nextSlide()}}>
                        <img src='/static/arrows/arrow-next.svg' alt="" className="slide-control-arrow" />
                    </div>
                {/* </div> */}
                <div className="slider__navigation">
                    {slides.map((item, i) => { return showNav(i) })}
                    
                    {/* <div className="slider__nav"></div>
                    <div className="slider__nav"></div>
                    <div className="slider__nav"></div> */}
                </div>
            </div>
        
    );
}

export default Slider;