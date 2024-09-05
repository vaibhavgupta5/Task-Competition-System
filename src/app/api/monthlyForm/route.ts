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
    
        const currentDate = new Date(); // Current date

        // Convert START_DATE to a Date object
        const startDate = new Date(process.env.START_DATE as string);
        
        // Calculate the difference in milliseconds
        const timeDiff = Math.abs(Number(currentDate)- Number(startDate));
        
        // Convert the difference from milliseconds to days
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        
        // Assuming a 30-day total, calculate remaining days
        const total = 30 - diffDays;  
        console.log(diffDays)
        console.log(total)

        user.monthly.push({
            assignmentType: assignmentType,
  uploadDocument: uploadDocument,
  total: total.toString()
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