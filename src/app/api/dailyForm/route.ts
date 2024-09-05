import { connectDB } from "@/lib/dbConnect";
import UserModel, { daily } from "@/Models/users";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest){

    connectDB();

    try {
        const {name, mmds, ders} = await req.json();
    
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

        const currentDate = new Date(Date.now()).toLocaleDateString();

        const len = user.daily.length;
       

        if(len > 0){

            const date = new Date(user.daily[len-1].createdAt);

            const dbDate = date.toLocaleDateString();
            if(dbDate === currentDate && len !== 0){
                return Response.json(
                    {
                        message: "Daily entry already exists for today",
                        success: false
                    },
                    {
                        status: 400
                    }
                )
            }
            
        }

        let total = 0

        if(mmds === "Yes" && ders === "Yes"){
                total = 2;
        }
        else if((mmds === "Yes" && ders === "No") || (mmds === "No" && ders === "Yes")){
                total = 1;
        }
        else{
            total = 0;
        }
     

        user.daily.push({
            mmds : mmds,
            ders : ders,
            total : total.toString(),
     } as daily)
    
        user.save()
    
        return Response.json(
            {
                message: "Daily saved successfully",
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