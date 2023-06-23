import { MouseEvent } from "react";
import add from "date-fns/add";

export function between(x: number, min: number, max: number): boolean {
    return x >= min && x <= max;
}

export function imgPanZoomCalculator(img: HTMLImageElement, e: MouseEvent<HTMLImageElement>): void {
    img.style.transformOrigin = `${((e.pageX - img.offsetLeft) / img.width) * 100}%  ${((e.pageY - img.offsetTop) / img.height) * 100}%`
}


export function timerangeToTimeArray(timerange: string): number[] {
    const timeArray: number[] = timerange.split(/to/i).map(ch => ch.trim()).map(tm => {
        const isAM = /am/i.test(tm);
        const splittedHrs = tm.slice(0, 5).split(":");
        const militaryHrs = isAM ? parseInt(splittedHrs[0]) : parseInt(splittedHrs[0]) + 12;
        const totalTime = militaryHrs * 60 + parseInt(splittedHrs[1]);
        return totalTime;
    })

    return timeArray;
}

export function genRandomWithinRange(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateSocialLinks(path: string, title: string) {
    const encodedURL = encodeURIComponent(`${process.env.prod_url}${path}`);
    const encodedTitle = encodeURIComponent(title);

    return {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`
    }
}


export class MyValErr extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MyValErr"
    }
}


export function calc_status(placed:Date) {
    const confirmed = add(placed, { minutes: 1, seconds: 30 });
    const shipped = add(placed, { minutes: 3 });
    const delivered = add(placed, { minutes: 5 });
    
    return { confirmed, shipped, delivered };
}

const dt_opts: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" }

export function date_formatter_1(dt:Date){
    return dt.toLocaleDateString("en-us", dt_opts);
}