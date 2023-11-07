"use client";

import { useState } from "react";
import Editor from "./Editor";
import EachGraph, { EachGraphI } from "./EachGraph";
import { before } from "node:test";
import makePythonCode from "@/etc/makePythonCode";
import axios from "axios";
import { PythonReturnI, RunRequestDataI } from "@/app/api/run/route";
import Image from "next/image";

export default function FullPage() {
  const [Code, setCode] = useState("# 코드를 입력해보세요!\n\n");
  const [Setting, setSetting] = useState<EachGraphI[]>([
    { type: "dot", name: "", color: "#000000" },
  ]);
  const [Status, setStatus] = useState<'start' | 'loading' | 'data'>('start')
  const [Data, setData] = useState<null | PythonReturnI>(null);

  const haveImage = Status !== 'start';

  const onSubmit = async () => {
    const isValid = Setting.map(t => t.name.trim()).reduce((prev, curr) => prev && curr.length > 0, true)
    if (!isValid) {
      alert('변수명은 비어있을 수 없습니다.')
      return;
    }
    setStatus('loading')
    const { data } = await axios.post<PythonReturnI>('/api/run', {
      setting: Setting, code: Code
    } as RunRequestDataI)
    setData(data)
    setStatus('data')
  }

  const onChangeSettingMaker = (index: number) => (name: string, value: string) =>
    setSetting((before) => {
      const newList = [...before];
      const newEach = { ...newList[index] };
      newEach[name as any as 'type'] = value as 'dot';
      newList[index] = newEach;
      return newList;
    });
  const onDeleteMaker = (index: number) => () => {
    setSetting((before) => before.filter((t, i) => i !== index));
  };

  return (
    <div className=" w-screen h-screen flex flex-row bg-[#1e1e1e] text-white overflow-hidden">
      <div className="w-1/4 h-full border-r-4 border-gray-400 p-3 grid gap-3 min-w-[400px]"
      style={{
        gridTemplateRows: `64px 40px 1fr${haveImage ? ' auto': ''}`
      }}
      >
        <button onClick={onSubmit} className="w-full h-16 bg-orange-500 text-2xl font-extrabold flex-shrink-0">
          실행하기
        </button>
        <div className="w-full h-10 flex flex-row items-center justify-between flex-shrink-0 flex-grow-0 basis-auto">
          <div className="text-xl font-bold">목록</div>
          <button
            className="h-10 p-3 bg-blue-400 flex justify-center items-center"
            onClick={() =>
              setSetting((t) => [
                ...t,
                { type: "dot", name: "", color: "black" },
              ])
            }
          >
            + 추가하기
          </button>
        </div>
        <div className="w-full overflow-hidden flex-wrap flex-1 basis-auto">
          <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden gap-3">
            {Setting.map((value, i) => (
              <EachGraph
                value={value}
                onChange={onChangeSettingMaker(i)}
                onDelete={onDeleteMaker(i)}
                key={i}
              />
            ))}
          </div>
        </div>
        {
          haveImage && (
          <div className="w-full aspect-square bg-white flex-shrink-0 relative">
             {
              Status === 'data' && Data && (
                <Image src={`data:image/png;base64,${Data.image}`} alt="" layout="fill"></Image>
              )
             }
          </div>
          )
        }
        
      </div>
      <div className="w-3/4 h-full grid" style={{ gridTemplateRows: '1fr 200px'}}>
        <div>
          <Editor value={Code} onChange={(v) => setCode(v || "")} />
        </div>
        <div className="bg-slate-800 border-t-4 border-gray-400 font-mono p-3 whitespace-pre">
          <div className="w-full h-full overflow-y-auto">
            {
              Status === 'data' && Data && `${Data.print}\n완료!`
            }
            {
              Status === 'loading' && '로딩 중...'
            }
          </div>
        </div>
      </div>
    </div>
  );
}
