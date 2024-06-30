import {PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";


const prisma = new PrismaClient();

export async function GET() {
	let res = NextResponse;

	try {
		const tasks = await prisma.task.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		return res.json(tasks);
	} catch (err) {
		console.error(err);
	}
}

export async function POST(request: Request) {
	const res = NextResponse;
	const reqData = await request.json();
	const data = {
		title: reqData.title,
	};

	try {
		const task = await prisma.task.create({data});
		return res.json({status: 200, data: task, msg: "success"});
	} catch (error) {
		console.error(error);
	}
}

export async function PUT(request: Request) {
	const res = NextResponse;
	const reqData = await request.json();
	const updateTask = await prisma.task.update({
		where: {
			id: reqData.taskId,
		},
		data: {
			completed: reqData.completed,
		},
	})

	return res.json({status: 200, data: updateTask, msg: "success"});
}

export async function DELETE(request: Request) {
	let res = NextResponse;

	return res.json({msg: "DELETE tasks"});
}
