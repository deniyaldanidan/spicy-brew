import { MouseEvent } from "react";

export function between(x:number, min:number, max:number):boolean{
    return x>=min && x<=max;
}

export function imgPanZoomCalculator(img:HTMLImageElement, e:MouseEvent<HTMLImageElement>):void{
    img.style.transformOrigin = `${((e.pageX - img.offsetLeft) / img.width) * 100}%  ${((e.pageY - img.offsetTop) / img.height)*100}%`
}