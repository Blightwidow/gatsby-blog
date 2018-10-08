import { SiteMeta } from "./siteMeta"
import { MediumPost } from "./MediumPost"

export interface StaticQueryResult {
  site: { siteMetadata: SiteMeta }
  allMediumPost: { edges: { node: MediumPost }[] }
}
