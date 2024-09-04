import { connectDB } from "@/lib/dbConnect";
import UserModel, {  weekly } from "@/Models/users";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest){

    connectDB();

    try {
        const {
            name,
            buddyPartnerCall,
            socialMediaPosts,
            outreachDone,
            proposalsShared,
            level00AdsRunning,
            level1AdsRunning,
            level2AdsRunning,
            contentMultiplierSystemExecuted
          } = await req.json();
              
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
    


        user.weekly.push({
            

            buddyPartnerCall :  buddyPartnerCall,
            socialMediaPosts : socialMediaPosts,
            outreachDone: outreachDone,
            proposalsShared: proposalsShared,
            level00AdsRunning: level00AdsRunning,
            level1AdsRunning: level1AdsRunning,
            level2AdsRunning: level2AdsRunning,
            contentMultiplierSystemExecuted : contentMultiplierSystemExecuted,

     } as weekly)
    
        user.save()
    
        return Response.json(
            {
                message: "Weekly saved successfully",
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