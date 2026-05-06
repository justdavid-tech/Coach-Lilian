import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'ebpmpydg',
  dataset: 'studio',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const LATEST_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) [0..2] {
    _id,
    title
  }
`;

sanityClient.fetch(LATEST_POSTS_QUERY)
  .then(posts => {
    console.log("Success:", posts);
  })
  .catch(err => {
    console.error("Error:", err.message);
  });
