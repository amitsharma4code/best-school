import dbConnect from "../../../../utils/dbConnect";
import Admin from "../../../../models/admin";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        console.log(body)
        await dbConnect();
        await Admin.create(body);
        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: e },
            { status: 500 }
        )
    }
}