import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const prompt = searchParams.get("prompt");
    const location = searchParams.get("location");

    console.log("prompt: ", prompt);
    console.log("location: ", location);

    // Call AWS stuff here
    // The returned object should have: name, description, rating, reviews, location
    const responseObject = {
        "objects": [
            {
                "id": 1,
                "name": "Object1",
                "value": 42,
                "description": "This is the first object with dummy data."
            },
            {
                "id": 2,
                "name": "Object2",
                "value": 17,
                "description": "This is the second object with dummy data."
            },
            {
                "id": 3,
                "name": "Object3",
                "value": 99,
                "description": "This is the third object with dummy data."
            },
            {
                "id": 4,
                "name": "Object4",
                "value": 7,
                "description": "This is the fourth object with dummy data."
            },
            {
                "id": 5,
                "name": "Object5",
                "value": 23,
                "description": "This is the fifth object with dummy data."
            }
        ]
    };

    return NextResponse.json(responseObject);
}
