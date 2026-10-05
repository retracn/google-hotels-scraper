// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/google-hotels-scraper').call({
  "locations": [
    "Paris"
  ],
  "checkIn": "2026-11-20",
  "checkOut": "2026-11-23"
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.name, item.pricePerNight, item.rating, item.hotelClass);
