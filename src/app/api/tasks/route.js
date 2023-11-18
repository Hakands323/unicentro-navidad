import { NextResponse } from "next/server";
import Tasks from "@/models/Registro";
import { connectDB } from "@/utils/mongoose";
connectDB();

export async function GET() {
  try {
    connectDB();
    const taskFound = await Tasks.findById(params.id);
    console.log(taskFound);

    if (!taskFound)
      return NextResponse.json(
        {
          message: "Registro no encontrado",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json({ taskFound });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newTasks = new Tasks(data);
    const savedTasks = await newTasks.save();
    console.log(savedTasks);

    return NextResponse.json(savedTasks);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    connectDB();
    const data = await request.json();
    console.log(data);
    const taskUpdated = await Tasks.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    if (!data)
      return NextResponse.json(
        {
          message: "Registro no encontrado",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json({ taskUpdated });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
