import { connectDB } from "@/lib/dbConnect";
import UserModel, {  awards, monthly } from "@/Models/users";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest){

    connectDB();

    try {
        const {name, assignmentType, uploadDocument} = await req.json();
    
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
    
        

        user.monthly.push({
            assignmentType: assignmentType,
  uploadDocument: uploadDocument
     } as monthly)
    

     user.awards.push({
        awardName: "yes"
     } as awards)

        user.save()
    
        return Response.json(
            {
                message: "Monthly saved successfully",
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