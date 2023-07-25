import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import './CitiesSlider.scss'

class CitiesSlider extends Component {
    constructor(props) {
        super(props);

        this.IMAGE_PARTS = 4;

        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;

        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }

    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
    }

    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change) {
        window.clearTimeout(this.changeTO);
        const { length } = this.props.slides;
        const { activeSlide } = this.state;
        let newActiveSlide = activeSlide + change;
        if (newActiveSlide < 0) newActiveSlide = length - 1;
        if (newActiveSlide >= length) newActiveSlide = 0;
        this.setState({ activeSlide: newActiveSlide, prevSlide: activeSlide });
    }

    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        return (
            <div className={classNames('slider', { 's--ready': sliderReady })}>
                <p className="slider__top-heading">
                    <p className="txt bliss font-bold md:text-6xl text-5xl mx-0 py-1 cursor-default">
                        BE BOLD BE  BLISS
                    </p>
                </p>
                <div className="slider__slides">
                    {this.props.slides.map((slide, index) => (
                        <div
                            className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                            key={index}
                        >
                            <div className="slider__slide-content">
                                {/* <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3> */}
                                <h2 className="slider__slide-heading">
                                    {[...slide.city].map((l, i) => <span key={i}>{l}</span>)}
                                </h2>
                                <Link to={slide.to} className="slider__slide-readmore">Shop now</Link>
                            </div>
                            <div className="slider__slide-parts">
                                {[...Array(this.IMAGE_PARTS)].map((x, i) => (
                                    <div className="slider__slide-part" key={i}>
                                        <div className="hidden lg:block slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                                        <div className="lg:hidden block slider__slide-part-inner" style={{ backgroundImage: `url(${slide?.img2})` }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
            </div>
        );
    }
}


export default CitiesSlider;