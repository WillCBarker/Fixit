import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    const prompt = await request.json()
    console.log(prompt)
    return NextResponse.json({"yo":"sup"})
}