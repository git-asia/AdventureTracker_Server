import {PostEntity, SimplePostEntity} from "../types";
import {ValidationError} from "../utils/errors";
import {FieldPacket} from "mysql2";
import {pool} from "../utils/db";
import {v4 as uuid} from 'uuid';

type PostRecordResults = [PostEntity[], FieldPacket[]];

export class PostRecord implements PostEntity {
    id?: string;
    title: string;
    date: string;
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

        if (obj.description.length > 2000) {
            throw new ValidationError('Opis nie może przekraczać 2000 znaków.');
        }

        if (obj.url.length > 300) {
            throw new ValidationError('Link nie może przekraczać 300 znaków.');
        }

        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError('Nie można zlokalizować ogłoszenia.');
        }

        this.id = obj.id;
        this.title = obj.title;
        this.date = obj.date;
        this.duration = obj.duration;
        this.kind = obj.kind;
        this.tags = obj.tags;
        this.description = obj.description;
        this.url = obj.url;
        this.iframe = obj.iframe;
        this.lat = obj.lat;
        this.lon = obj.lon;
    }

    static async getOne(id: string): Promise<PostRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `trips` WHERE `id` = :id", {
            id,
        }) as PostRecordResults;

        return results.length === 0 ? null : new PostRecord(results[0]);
    }


    static async findAll(name: string): Promise<SimplePostEntity[]> {
        const [results] = await pool.execute("SELECT * FROM `trips` WHERE `title` LIKE :search", {
            search: `%${name}%`,
        }) as PostRecordResults;

        return results.map(result => {
            const {
                id, lat, lon,
            } = result;

            return {
                id, lat, lon,
            };
        });
    }

    static async listAll(): Promise<PostRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `trips`") as PostRecordResults;

        return results.map(result => new PostRecord(result));
    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid();
        } else {
            throw new Error('Cannot insert something that is already inserted!');
        }

        await pool.execute("INSERT INTO `trips`(`id`, `title`, `date`, `duration`, `kind`, `tags`, `description`,  `url`, `iframe`, `lat`, `lon`) VALUES(:id, :title, :date, :duration, :kind, :tags, :description, :url, :iframe, :lat, :lon)", this);
    }
}
