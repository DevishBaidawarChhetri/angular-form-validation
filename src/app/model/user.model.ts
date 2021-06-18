export class User {
  constructor(
    public fullName: string = "",
    public email: string = "",
    public address: string = "",
    public phone: number | null,
    public city: string = "",
    public state: string = "",
    public zip: number | null,
    public favLanguage: string[],
    public gender: string = "",
    public rating: number | null,
    public selectFile: string = "",
  ) { }
}
