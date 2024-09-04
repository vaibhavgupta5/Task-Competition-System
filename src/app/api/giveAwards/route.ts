import { connectDB } from "@/lib/dbConnect";
import UserModel, { awards } from "@/Models/users";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest){

    connectDB()

try {
        const {name, awardName} = await req.json();

        const user = await UserModel.findOne({name})


        if(!user){
            return Response.json(
                {
                    message: "User not found",
                    success: false
                },
                {
                    status: 404
                }
            )
        }
    
        user.awards.push({
            awardName : awardName,
        } as awards)

        user.save()
        return Response.json(
            {
                message: "Awards saved successfully",
                success: true
            },
            {
                status: 200
            }
        )
    } catch (error) {
        return Response.json(
            {
                message: "An error occurred",
                success: false,
            },
            {
                status: 500
            }
        )
    }
}