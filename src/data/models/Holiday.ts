export class Holiday {
  readonly date: Date
  readonly name: string
  readonly description: string

  constructor(dateString: string, name: string, description: string) {
    this.date = new Date(dateString)
    this.name = name
    this.description = description
  }
}
