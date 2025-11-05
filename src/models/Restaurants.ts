class Restaurant {
    destach: boolean
    image?: string
    id?: number
    name: string
    category: string
    assessment: string
    description: string

    constructor(
        id: number, 
        destach: boolean,
        name: string, 
        category: string, 
        assessment: string,
        description: string
    ) {
        this.id = id
        this.destach = destach
        this.name = name
        this.category = category
        this.assessment = assessment
        this.description = description
    }
}

export default Restaurant