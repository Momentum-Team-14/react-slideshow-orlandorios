import React from "react";
import { useState, useEffect } from "react";
import { filmData } from "./film-data";

const Slideshow = () => {
    const [filmData] = useState(filmData);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = filmData.length - 1;
        if(index < 0) {
            setIndex(lastIndex);
        }
        if(index > lastIndex) {
            setIndex(0);
        }
    }, [index, filmData])

    useEffect(() => {
        const nextIndex = filmData.length + 1;
        if(index < 0) {
            setIndex(nextIndex);
        }
        if(index > nextIndex) {
            setIndex(0);
        }
    }, [index, filmData])
    
    return (
        <section className="section">
            <div className="test">
                <h2>test</h2>
            </div>
            <div className="center">
                {filmData.map((info, indexMovie) => {
                    const {id, title, original_title, image, description} = info;
                    let position = "nextSlide";
                    if(indexMovie === index) {
                        position = "currentSlide";
                    }
                    if(
                        indexMovie === index - 1 || 
                        (index === 0 && indexMovie === filmData.length -1)) {
                        position = "lastSlide";
                    }
                    return (
                        <article className="{position} key={id}">
                        <img src={image} alt={title} className="movie-poster"/>
                        <h4>{title}</h4>
                        <p className="original_title">{original_title}</p>
                        <p className="description">{description}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )

}

export default Slideshow