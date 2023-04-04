export interface SimplePostEntity {
    id?: string;
    lat: number;
    lon: number;
}

export interface PostEntity extends SimplePostEntity {
    title: string;
    date: Date;
    duration: number;
    kind: string;
    tags: string;
    description: string;
    url: string;
    iframe: string;
}
