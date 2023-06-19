import { PostRecord } from '../records/post.record';
import { type PostEntity } from '../types';
import { pool } from '../utils/db';

const defObj = {
  title: '[@Test] wycieczka',
  date: '2021-11-10',
  duration: 4,
  kind: 'hiking',
  tags: 'góry, bacówki',
  description: 'opis',
  url: 'https://en.mapy.cz/s/cunebumeku',
  iframe:
    '<iframe style="border:none" src="https://en.frame.mapy.cz/s/mokuvarefo" width="400" height="280"></iframe>',
  lat: 49.7970994,
  lon: 19.0946544,
};

afterAll(async () => {
  await pool.end();
});

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

test('PostRecord.findAll returns array of found entries.', async () => {
  const posts = await PostRecord.findAll('');

  expect(posts).not.toEqual([]);
  expect(posts[0].id).toBeDefined();

  console.log(posts);
});

test('PostRecord.findAll returns array of found entries when searching for "T".', async () => {
  const posts = await PostRecord.findAll('T');

  expect(posts).not.toEqual([]);
  expect(posts[0].id).toBeDefined();
});

test('PostRecord.findAll returns empty array when searching for something that does not exist.', async () => {
  const posts = await PostRecord.findAll('----------------------');

  expect(posts).toEqual([]);
});

test('PostRecord.findAll returns only filtered data.', async () => {
  const posts = await PostRecord.findAll('');

  expect((posts[0] as PostEntity).duration).toBeUndefined();
  expect((posts[0] as PostEntity).description).toBeUndefined();
  expect((posts[0] as PostEntity).kind).toBeUndefined();
  expect((posts[0] as PostEntity).date).toBeUndefined();
  expect((posts[0] as PostEntity).tags).toBeUndefined();
  expect((posts[0] as PostEntity).url).toBeUndefined();
  expect((posts[0] as PostEntity).iframe).toBeUndefined();
});

test('PostRecord.insert returns new UUID.', async () => {
  const post = new PostRecord(defObj);
  await post.insert();

  expect(post.id).toBeDefined();
  expect(typeof post.id).toBe('string');
});

test('PostRecord.insert inserts data to database.', async () => {
  const post = new PostRecord(defObj);
  await post.insert();

  const foundPost = await PostRecord.getOne(post.id);

  expect(foundPost).toBeDefined();
  expect(foundPost).not.toBeNull();
  expect(foundPost.id).toBe(post.id);
});

test('PostRecord.insert doesn\'t insert negatives values for duration field.', async () => {
  const post = new PostRecord(defObj);
  await post.insert();

  expect(post.duration).toBeGreaterThanOrEqual(0);
  expect(typeof post.duration).toBe('number');
});
