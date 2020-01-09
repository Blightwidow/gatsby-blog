import React from "react"

export const useLite = (dependencies: string[]): boolean => {
  const [isLite, setIsLite] = React.useState(true)

  React.useEffect(() => {
    setIsLite(!!(navigator as any).connection?.saveData || (navigator as any).connection?.effectiveType !== "4g")
  }, dependencies)

  return isLite
}
