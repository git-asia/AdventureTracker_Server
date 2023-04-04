import {PostEntity, SimplePostEntity} from "../types";
import {ValidationError} from "../utils/errors";


export class PostRecord implements PostEntity {
    id?: string;
    title: string;
    date: Date;
    duration: number;
    kind: string;
    tags: string;
    description: string;
    url: string;
    iframe: string;
    lat: number;
    lon: number;


    constructor(obj: PostEntity) {
        if (!obj.title || obj.title.length > 100) {
            throw new ValidationError('Tytuł postu nie może być pusty, ani przekraczać 100 znaków.');
        }

        if (!obj.date) {
            throw new ValidationError('Pole "data" nie może być puste.');
        }

        if (!obj.duration) {
            throw new ValidationError('Pole "długość (dni)" nie może być puste.');
        }

        if (!obj.kind) {
            throw new ValidationError('Pole "aktywność" nie może być puste.');
        }

        if (obj.description.length > 1000) {
            throw new ValidationError('Opis nie może przekraczać 1000 znaków.');
        }

        if (obj.url.length > 300) {
            throw new ValidationError('Link nie może przekraczać 300 znaków.');
        }

        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError('Nie można zlokalizować ogłoszenia.');
        }
    }
}