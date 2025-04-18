export class Dtofile {
    filename: string
    content: Buffer
}

export class DtoInSendMail {
    destination: string
    title: string
    html: string
    files?: Dtofile[] = []
}