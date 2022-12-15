export enum Status {
    Active = 'active',
    Paused = 'paused'
}

export interface ITracking {
    _id?: string
    keyword: string
    searchByChats: boolean
    searchByChannels: boolean
    status: Status
    createdAt: Date
    coverage: number[]
    mentioning: number[]
}