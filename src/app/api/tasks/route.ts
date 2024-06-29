import {PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
	let res = NextResponse;
	const title = "hello world";

	// await taskService.createTask("Learn Javascript");
	return res.json({msg: title});
}

export async function POST(request: Request) {
	const res = NextResponse;
	const reqData = await request.json();
	const data =  {
		title: reqData.title
	}

	try {
		const task = await prisma.task.create({data});
		return res.json({status: 200, data: task, msg: 'success'});
	} catch (error) {
		console.error(error);
	}
}

export async function PUT(request: Request) {
	let res = NextResponse;

	return res.json({msg: "PUT tasks"});
}

export async function DELETE(request: Request) {
	let res = NextResponse;

	return res.json({msg: "DELETE tasks"});
}
