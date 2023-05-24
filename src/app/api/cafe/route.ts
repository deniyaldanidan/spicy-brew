import cafes from "@/cafes";
import { NextResponse } from "next/server";


export async function GET(request: Request){
    const {searchParams} = new URL(request.url);
    const state = searchParams.get("state");
    const city = searchParams.get("city");

    if (city?.length){
        const list = cafes.filter(cf=>cf.city===city);
        return list.length ? NextResponse.json({cafes: list, size: list.length}) : NextResponse.json({cafes, size: cafes.length})
    }

    if (state?.length){
        const list = cafes.filter(cf=>cf.state===state);
        return list.length ? NextResponse.json({cafes: list, size: list.length}) : NextResponse.json({cafes, size: cafes.length})
    }

    return NextResponse.json({cafes, size: cafes.length})
}