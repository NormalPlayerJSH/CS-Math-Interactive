import { EachGraphI } from "@/components/EachGraph";

export default function makePythonCode(setting: EachGraphI[], code: string, filename: string) {
  const graphCodes = setting.map(({ name, type, color }) => `plt.${type === 'line' ? 'plot' : 'scatter'}([a[0] for a in ${name}], [a[1] for a in ${name}], color="${color}")`)
  return `
import matplotlib.pyplot as plt
import base64
import io
import sys
import json

tmpIO = io.StringIO()
backupIO = sys.stdout
sys.stdout = tmpIO
  
${code}

plt.figure(figsize=(10, 10))
plt.margins(0, 0)
plt.subplots_adjust(0.05, 0.05, 0.95, 0.95)

${graphCodes.join('\n')}

stringIOBytes = io.BytesIO()
plt.savefig(stringIOBytes, dpi=200)
stringIOBytes.seek(0)
base64String = base64.b64encode(stringIOBytes.read()).decode()

sys.stdout = backupIO
printValue = tmpIO.getvalue()

print(json.dumps({
    "print": printValue,
    "image": base64String
}), end='')
  `
}