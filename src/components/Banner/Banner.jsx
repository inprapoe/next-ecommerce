import Image from 'next/image'
import { IoChevronBack, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Button from '../Button/Button';

const Banner = () => {
    return (
        <div className="banner group">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>  hasPrev && (
                    <div className="banner__btn left-4" type="button" onClick={onClickHandler} title={label}>
                        <Button buttonSize="banner" buttonColor="white-yellow">
                            <IoChevronBackOutline className="-ml-0.5"/>
                        </Button>
                    </div>
                )}
                renderArrowNext={(onClickHandler, hasNext, label) =>  hasNext && (
                    <div className="banner__btn right-4" type="button" onClick={onClickHandler} title={label}>
                        <Button buttonSize="banner" buttonColor="white-yellow">
                            <IoChevronForwardOutline className="-mr-0.5"/>
                        </Button>
                    </div>
                )}
            >
                <div className="">
                    <div className="relative pt-60p md:pt-50p lg:pt-40p 2xl:pt-35p">
                        <div className="absolute inset-0">
                            <Image className="object-cover object-center w-full h-full" src={`/images/banner/banner1.jpg`}layout="fill"/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative pt-60p md:pt-50p lg:pt-40p 2xl:pt-35p">
                        <div className="absolute inset-0">
                            <Image className="object-cover object-center w-full h-full" src={`/images/banner/banner1.jpg`}layout="fill"/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative pt-60p md:pt-50p lg:pt-40p 2xl:pt-35p">
                        <div className="absolute inset-0">
                            <Image className="object-cover object-center w-full h-full" src={`/images/banner/banner1.jpg`}layout="fill"/>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
