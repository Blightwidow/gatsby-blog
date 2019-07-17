import webassembly from "webassembly"

export interface AssemblyApi {
  factorial: (base: number) => number
}

export const loadAssembly = (): Promise<AssemblyApi> => {
  return webassembly.load("/binary.wasm").then(wasm => ({
    factorial: wasm.exports.factorial as AssemblyApi["factorial"],
  }))
}
