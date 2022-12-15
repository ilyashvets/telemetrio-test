import { ITracking, Status } from '../../interfaces/tracking.interface';

export class TrackingEntity implements ITracking {
    _id: string
    keyword: string
    searchByChats: boolean
    searchByChannels: boolean
    status: Status
    createdAt: Date
    coverage: number[]
    mentioning: number[]

    constructor(tracking) {
        this._id = tracking._id
        this.keyword = tracking.keyword
        this.searchByChats = tracking.searchByChats
        this.searchByChannels = tracking.searchByChannels
        this.status = tracking.status
        this.createdAt = tracking.createdAt
        this.coverage = tracking.coverage
        this.mentioning = tracking.mentioning
    }

    public updateTracking(searchByChats?: boolean, searchByChannels?: boolean) {
        if (typeof searchByChats === 'boolean') this.searchByChats = searchByChats
        if (typeof searchByChannels === 'boolean') this.searchByChannels = searchByChannels
        return this
    }
    
    public setStatus(status: Status) {
        this.status = status
        return this
    }
}