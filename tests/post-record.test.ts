import { PostRecord } from '../records/post.record';

const defObj = {
  title: '[@Test] wycieczka',
  date: '2021-11-10',
  duration: 4,
  kind: 'hiking',
  tags: 'góry, bacówki',
  description: 'opis',
  url: 'https://en.mapy.cz/s/cunebumeku',
  iframe: '<iframe style="border:none" src="https://en.frame.mapy.cz/s/mokuvarefo" width="400" height="280"></iframe>',
  lat: 49.7970994,
  lon: 19.0946544
};

test('Can build PostRecord', () => {
  const post = new PostRecord(defObj);

  expect(post.title).toBe('[@Test] wycieczka');
  expect(post.description).toBe('opis');
});

test('Check date', () => {
  const post = new PostRecord(defObj);

  expect(post.date).toBe('2021-11-10');
});

test('Validates negative duration value', () => {
  const post = new PostRecord(defObj);

  expect(post.duration).toBe(4);
});

test('Empty kind', () => {
  const post = new PostRecord(defObj);

  expect(post.kind).toBe('hiking');
});

test('Numeric tags', () => {
  const post = new PostRecord(defObj);

  expect(post.tags).toBe('góry, bacówki');
});
