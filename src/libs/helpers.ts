import add from "date-fns/add";
import { deliveriesType } from "@/custTypes";

export function between(x: number, min: number, max: number): boolean {
    return x >= min && x <= max;
}

export function imgPanZoomCalculator(img: HTMLImageElement, e: MouseEvent | TouchEvent): void {
    try {
        const clienttX = (e as TouchEvent)?.touches?.length ? (e as TouchEvent)?.touches[0]?.clientX : (e as MouseEvent).pageX;
        const clientY = (e as TouchEvent)?.touches?.length ? (e as TouchEvent)?.touches[0]?.clientY : (e as MouseEvent).pageY;

        img.style.transformOrigin = `${((clienttX - img.offsetLeft) / img.width) * 100}%  ${((clientY - img.offsetTop) / img.height) * 100}%`
    } catch (error) {
        console.log(error);
    }
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


export function calc_status(placed: Date) {
    const confirmed = add(placed, { minutes: 1, seconds: 30 });
    const shipped = add(placed, { minutes: 3 });
    const delivered = add(placed, { minutes: 5 });

    return { confirmed, shipped, delivered };
}

const dt_opts1: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" }
/**
 * 
 * @param dt 
 * @returns DateString like Jul 14, 5:02 AM
 */
export function date_formatter_1(dt: Date) {
    return dt.toLocaleDateString("en-us", dt_opts1);
}

const dt_opts2: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short" }
/**
 * 
 * @param dt 
 * @returns DateString like Jul 14
 */
export function date_formatter_2(dt: Date) {
    return dt.toLocaleDateString("en-us", dt_opts2);
}


export function subscriptionDeliveryCalculator(initial: Date, n_deliveries: typeof deliveriesType[number], frequency: number) {
    const n_dels = n_deliveries === "12-delivery" ? 12 : (n_deliveries === "6-delivery" ? 6 : 3);
    const deliveries = [];
    for (let i = 1; i <= n_dels; i++) {
        deliveries.push({ label: `Delivery #${i}`, value: add(initial, { days: i * frequency }) })
    }
    return deliveries;
}