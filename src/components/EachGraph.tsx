import { Input, InputLabel, InputWrapper, SegmentedControl } from "@mantine/core"

export interface EachGraphI {
  type: 'line' | 'dot'
  name: string
  color: string
}

export interface EachGraphProps {
  onChange: (name: string, value: string) => void
  onDelete: () => void
  value: EachGraphI
}

export default function EachGraph({ onChange, value, onDelete }: EachGraphProps) {
  const eventToOnChange = (e: any) => onChange(e.target.name, e.target.value.trim());
  return (
    <div className="w-full p-3 mr-1 bg-slate-500 flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center gap-3">
          <div>타입</div>
          <SegmentedControl value={value.type} onChange={(v) => onChange('type', v)} data={[
            { label: '점', value: 'dot' },
            { label: '선', value: 'line' },
          ]} />
        </div>
        <div className="flex flex-row items-center gap-3">
          <div>색깔</div>
          <Input component="select" name="color" value={value.color} onChange={eventToOnChange}>
            <option value="#000000">검정</option>
            <option value="#FFFF00">노랑</option>
            <option value="#0000FF">파랑</option>
            <option value="#FF0000">빨강</option>
            <option value="#00FF00">초록</option>
          </Input>
          <div className="w-6 h-6" style={{ backgroundColor: value.color }}>
             
          </div>
        </div>
        <button className="h-[39px] w-[39px] p-1 rounded bg-red-500" onClick={onDelete}>
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clipRule="evenodd" fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" />
          </svg>
        </button>
      </div>
      <Input placeholder="변수명" type="text" value={value.name} onChange={eventToOnChange} name="name" />      
    </div>
  )
}