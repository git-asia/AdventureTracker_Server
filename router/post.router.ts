import {Router} from "express";
import {PostRecord} from "../records/post.record";

export const postRouter = Router()

    .get('/search/:title?', async (req, res) => {
        const posts = await PostRecord.findAll(req.params.title ?? '');
        res.json(posts);
    })

    .get('/:id', async (req, res) => {
        const post = await PostRecord.getOne(req.params.id);
        res.json(post);
    })

    .post('/', async (req, res) => {
        const post = new PostRecord(req.body);
        await post.insert();
        res.json(post);
    });
