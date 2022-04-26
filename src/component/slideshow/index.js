import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'

const SlideShow = ({ data, styles }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === data.length - 1 ? 0 : prevIndex + 1
                ),
            2500
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={styles.slideshow}>
            <div
                className={styles.slideshowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {data.map((value, index) => (
                    <Image
                        src={value.source}
                        className={styles.slide}
                        key={index}
                        width="500"
                        height="300"
                    />
                ))}
            </div>
            <button className={styles.slideshowButton}></button>
            <div className={styles.slideshowDots}>
                {data.map((_, idx) => {
                    if (index === idx) {
                        return (
                            <div
                                key={idx}
                                className={`${styles.slideshowDotActive}`}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            ></div>
                        )
                    } else {
                        return (
                            <div
                                key={idx}
                                className={styles.slideshowDot}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            ></div>
                        )
                    }
                }
                )}
            </div>
        </div>
    )
}

export default SlideShow;