import { splitTextIntoSpans } from './helpers.js'

export function heroSectionAnimation() {
    const dsrptText = document.querySelector('.hero-content-middle h1');
    const dsrptSpans = splitTextIntoSpans(dsrptText);
    const lines = document.querySelectorAll('.h-line');
    const timetoText = document.querySelector('.hero-content-top p:first-child');
    const heroSubText = document.querySelector('.hero-content-top p:last-child');
    const navbar = document.querySelectorAll('nav');

    const heroTimeline = gsap.timeline();


    heroTimeline.from(timetoText, 
        {   
            opacity: 0,
            duration: 1,
        },
    );
    heroTimeline.from(".hero-content-middle h1 span", 
        {   
            yPercent: 150,
            stagger: {
                each: 0.1,
                from: "start",
            },
            duration: 1.5,
        },
        "a"
    );
    heroTimeline.from(lines, 
        {   
            yPercent: 150,
            stagger: {
                each: 0.1,
                from: "start",
            },
            duration: 1.5,
        },
        "a"
    );
    heroTimeline.from(heroSubText, 
        {   
            opacity: 0,
            duration: 1,
        },"b",
    );
    heroTimeline.from(navbar, 
        {   
            opacity: 0,
            duration: 1,
        },"b",
    );

}