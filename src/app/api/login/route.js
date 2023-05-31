import dbConnect from "../../../../utils/dbConnect";
import Admin from "../../../../models/admin";
import AdminLoign from "../../../../models/adminLogin";
import { NextResponse } from "next/server";
export async function POST(req, res) {
    try {

        const body = await req.json();
        console.log(body)
        const {email, password}=body;
        console.log(email,password)
        await dbConnect();
      const admin= await Admin({email:email});
      console.log(admin)
    
        // return NextResponse.json({
        //     message:"Message sent successfully!"
        // }, {
        //     status: 200
        // })

    }catch (e) {
        return NextResponse.json(
            { message: e },
            { status: 500 }
        )
    }
}