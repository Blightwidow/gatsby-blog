import { wrapWithLocaleProvider, wrapContent } from "./gatsby-utils"
import "typeface-roboto"
import "typeface-roboto-mono"

export const wrapRootElement = wrapWithLocaleProvider
export const wrapPageElement = wrapContent
