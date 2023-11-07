'use server'

import { EachGraphI } from "@/components/EachGraph";
import makePythonCode from "@/etc/makePythonCode";
import { spawnSync } from "child_process";
import { NextResponse } from "next/server";

export interface RunRequestDataI {
  setting: EachGraphI[],
  code: string,
}

export interface PythonReturnI {
  image: string
  print: string
}

export async function POST(request: Request) {
  const { setting, code: innerCode } = await request.json() as RunRequestDataI;
  const code = makePythonCode(setting, innerCode, 'testt.png')
  const pythonProcess = await spawnSync('python3', ['-c', code])
  const result = pythonProcess.stdout?.toString()?.trim();
  const error = pythonProcess.stderr?.toString()?.trim();
  const data = JSON.parse(result)

  return NextResponse.json(data)
}
