import { connectDB } from "@/lib/dbConnect";
import UserModel from "@/Models/users";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  connectDB();

  const { name, image } = await req.json();

  try {
    const user = await UserModel.findOne({ name });

    if(user){
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

    const newUser = new UserModel({ name, image });
    await newUser.save();

    return Response.json(
      {
        message: "User created successfully",
        success: true,
        user: newUser,
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    return Response.json(
      {
        message: error,
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
