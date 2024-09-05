import { connectDB } from "@/lib/dbConnect";
import UserModel from "@/Models/users";

export async function GET(){
    connectDB();

    try {
        const users = await UserModel.find({});

        if (users.length === 0) {
            return Response.json(
                {
                  message: "No users found",
                  success: false,
                },
                {
                  status: 400,
                }
              );
        }

            
        return Response.json(
            {
              message: "User created successfully",
              success: true,
              users: users,
            },
            {
              status: 201,
            }
          );

    } catch (error) {
        return Response.json(
            {
              message: "User already exists",
              success: false,
            },
            {
              status: 400,
            }
          );
    }


}