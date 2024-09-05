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
    
        let total = 0;

        if(buddyPartnerCall === "Yes"){
            total += 10;
        }

        if(level00AdsRunning === "Yes"){
            total += 10;
        }

        if(level1AdsRunning === "Yes"){
            total += 10;
        }

        if(level2AdsRunning === "Yes"){
            total += 10;
        }

        if(contentMultiplierSystemExecuted === "Yes"){
            total += 10;
        }

        const allTotal = total + Number(socialMediaPosts) + Number(outreachDone) + Number(proposalsShared)


        console.log(allTotal)

        user.weekly.push({
            

            buddyPartnerCall :  buddyPartnerCall,
            socialMediaPosts : socialMediaPosts,
            outreachDone: outreachDone,
            proposalsShared: proposalsShared,
            level00AdsRunning: level00AdsRunning,
            level1AdsRunning: level1AdsRunning,
            level2AdsRunning: level2AdsRunning,
            contentMultiplierSystemExecuted : contentMultiplierSystemExecuted,
            total : allTotal.toString()
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