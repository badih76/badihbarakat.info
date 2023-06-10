"use client"

import { useEffect, useState } from "react";
import Styles from "./quotebox.module.css";

interface IProps {
    quote: string | null,
    width?: string,
    height?: string,
    by: string | null
}

interface IQuote {
    quote: string,
    by: string
}

const quotes = [
    {
        quote: "An expert is a man who knows just that much more about his subject than his associates. Most of us are nearer the top than we think. We fail to realize how easy it is, how necessary it is to learn that fraction more.",
        by: "William N. Hutchins"
    },
    {
        quote: "There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.",
        by: "Jiddu Krishnamurti"
    },
    {
        quote: "We now accept the fact that learning is a lifelong process of keeping abreast of change. And the most pressing task is to teach people how to learn.",
        by: "Peter Drucker"
    }
]
    

const QuoteBox = ({ quote=null, width= "100%", height= "auto", by=null }: IProps) => {
    return (
        <div className={Styles.quoteContainer}> 
            <div style={{padding: "2rem", color: "black"}}>
                <div className={Styles.openingQuote}>
                    <span style={{fontSize: "7rem", lineHeight: "5rem"}}>❝</span>
                </div>
                <span 
                    className={Styles.quoteText}>
                    {quote}❞
                </span>
                <div className={Styles.quoteBy}>
                    {by}
                </div>
                
            </div>
        </div>
    )
}


export default QuoteBox;

export const QuoteBoxPlain = ({ quote=null, width= "100%", height= "auto", by=null }: IProps) => {
    // const [ q, setQ ] = useState(quotes[0]);
    // const [ qNo, setQNo ] = useState(0);

    let changeQuote: NodeJS.Timer;

    // const changeQuoteInterval = () => {
    //     changeQuote = setInterval(() => {
    //         if(qNo < quotes.length) {
    //             console.log(qNo);
    //             console.log(q);
    
    //             setQ(() => quotes[qNo]);
    //             setQNo(previousQNo => previousQNo + 1);
    //         } else {
    //             setQNo(0);
    //             setQ(quotes[0]);
    //         }
    //     }, 5000);

    // }

    // useEffect(() => {
    //     changeQuoteInterval();
        
    //     return () => {
    //         clearInterval(changeQuote);
    //     }
    // }, [qNo]);

    return (
        <div className={[Styles.quoteContainerPlain, Styles.slideFromLeft].join(' ')}> 
            {
                quotes.map((q:IQuote, i: number) => {
                    return (
                    <div className={Styles.slide}>
                        <div className={Styles.slidingQuote}>
                            {/* <div className={Styles.openingQuote}>
                                <span style={{fontSize: "7rem", lineHeight: "5rem"}}>❝</span>
                            </div> */}
                            <span 
                                className={Styles.quoteTextPlain}>
                                ❝{q.quote}❞
                            </span>
                            <div className={Styles.quoteByPlain}>
                                {q.by}
                            </div>
                            
                        </div>
                    </div>)
                })

            }
            
        </div>
    )
}