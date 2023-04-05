import {PostRecord} from "../records/post.record";

test('PostRecord.getOne returns data from database for one entry.', async () => {

    const post = await PostRecord.getOne('aa34ede4-ce59-11ed-a3fd-7309cff45ae4');

    expect(post).toBeDefined();
    expect(post.id).toBe('aa34ede4-ce59-11ed-a3fd-7309cff45ae4');
    expect(post.title).toBe('Niżne Tatry - cz. zach');

});

test('PostRecord.getOne returns null from database for non-existing entry.', async () => {

    const post = await PostRecord.getOne('---');

    expect(post).toBeNull();

});

