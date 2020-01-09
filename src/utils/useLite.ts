export const useLite = (): boolean => {
  return (navigator as any).connection?.saveData
    || (navigator as any).connection?.effectiveType !== "4g"
}
