# Google Hotels Scraper & API: prices, ratings and photos

[![Run on Apify](https://img.shields.io/badge/Run%20on-Apify-0b57d0)](https://apify.com/automationnation/google-hotels-scraper)

Google Hotels Scraper is an Apify Actor that returns Google Hotels results for any city or area: prices for your dates (per night and with taxes), star class, rating and review count, coordinates, nearby places, photos, website and Google links, with rating, class and price filters, at $1 per 1,000 hotels.

**Price:** $1 per 1,000 hotels ($0.80 on Gold and above) · **Run it:** [https://apify.com/automationnation/google-hotels-scraper](https://apify.com/automationnation/google-hotels-scraper) · **Guide:** [https://retracn.github.io/automationnation-actors/google-hotels-scraper/](https://retracn.github.io/automationnation-actors/google-hotels-scraper/)

## Quick facts

- One row per hotel: nightly price before and with taxes, currency, dates, class, rating, review count, rating breakdown, coordinates, nearby places, photos, website and links.
- Set check-in, check-out and adults for exact prices.
- 20 hotels per search in seconds, plain HTTP.
- Price: $1 per 1,000 hotels.
- Hotel price tracker: with Only price drops on, a scheduled run saves a hotel only when its nightly price is lower than the last price seen for it (up to 500 hotels remembered per search), with the previous price on the row.

## Example input

```json
{
  "locations": [
    "Paris"
  ],
  "checkIn": "2026-11-20",
  "checkOut": "2026-11-23"
}
```

## Run it from code

**REST API**

```bash
curl -X POST "https://api.apify.com/v2/acts/automationnation~google-hotels-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"locations": ["Paris"], "checkIn": "2026-11-20", "checkOut": "2026-11-23"}'
```

**Python** — see [`examples/python_example.py`](examples/python_example.py)

```python
# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/google-hotels-scraper").call(run_input={
  "locations": [
    "Paris"
  ],
  "checkIn": "2026-11-20",
  "checkOut": "2026-11-23"
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("name"), item.get("pricePerNight"), item.get("rating"), item.get("hotelClass"))
```

**JavaScript** — see [`examples/node_example.mjs`](examples/node_example.mjs)

```js
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
```

## Use it with AI agents (MCP)

Hosted MCP server URL (Claude, ChatGPT, Cursor and other clients with remote MCP support):

```
https://mcp.apify.com?tools=automationnation/google-hotels-scraper
```

Local config for Claude Desktop / Cursor — [`mcp/claude_desktop_config.json`](mcp/claude_desktop_config.json):

```json
{
  "mcpServers": {
    "google-hotels-scraper": {
      "command": "npx",
      "args": [
        "-y",
        "@apify/actors-mcp-server",
        "--tools",
        "automationnation/google-hotels-scraper"
      ],
      "env": {
        "APIFY_TOKEN": "YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

## FAQ

**Is there an official Google Hotels API?**
Google's Hotel APIs are for hotel partners managing their own prices; there's no public API for Google Hotels search results.

**How many hotels per search?**
Up to 20; use neighbourhood or star-rating searches to cover a city.

**Can it track hotel prices for my dates?**
Yes. Schedule a search for your city and dates with Only price drops on: each run saves only hotels whose nightly price dropped, with the previous price, ready for Slack, email or a webhook.

## More from AutomationNation

- [AI Visibility Tracker](https://apify.com/automationnation/ai-visibility-tracker) — $0.05 per answer checked ($0.04 on Gold) + $0.50 per optional report · [GitHub examples](https://github.com/retracn/ai-visibility-tracker)
- [Google Jobs Scraper](https://apify.com/automationnation/google-jobs-scraper) — $2 per 1,000 jobs ($1.50 on paid plans) + $0.03 per search · [GitHub examples](https://github.com/retracn/google-jobs-scraper)
- [YouTube Transcript Scraper](https://apify.com/automationnation/youtube-transcript-scraper) — $1.50 per 1,000 transcripts ($1.20 on Gold and above) · [GitHub examples](https://github.com/retracn/youtube-transcript-api)
- [Google Shopping Scraper](https://apify.com/automationnation/google-shopping-scraper) — $1 per 1,000 products ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-shopping-scraper)
- [Google Flights Scraper](https://apify.com/automationnation/google-flights-scraper) — $0.20 per 1,000 flights ($0.16 on Gold and above) · [GitHub examples](https://github.com/retracn/google-flights-scraper)
- [Google Ads Transparency Scraper](https://apify.com/automationnation/google-ads-transparency-scraper) — $1 per 1,000 ads ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-ads-transparency-scraper)
- [Google News Scraper](https://apify.com/automationnation/google-news-scraper) — $1 per 1,000 articles ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-news-scraper)
- [Google Images Scraper](https://apify.com/automationnation/google-images-scraper) — $0.25 per 1,000 images ($0.20 on Gold and above) · [GitHub examples](https://github.com/retracn/google-images-scraper)
- [Google Custom Search API Alternative](https://apify.com/automationnation/google-custom-search-api) — $5 per 1,000 searches of up to 10 results ($4 on Gold and above) · [GitHub examples](https://github.com/retracn/google-custom-search-api-alternative)
- [Google Videos Scraper](https://apify.com/automationnation/google-videos-scraper) — $1 per 1,000 videos ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-videos-scraper)
- [Google Trends Scraper](https://apify.com/automationnation/google-trends-scraper) — $1 per 1,000 keyword reports ($0.27–$0.90 on paid plans) · $0.50 per 1,000 trending searches · [GitHub examples](https://github.com/retracn/google-trends-scraper)
- [App Store Reviews Scraper](https://apify.com/automationnation/app-store-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/app-store-reviews-scraper)
- [Google Play Reviews Scraper](https://apify.com/automationnation/google-play-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/google-play-reviews-scraper)
- [AEO & GEO Tracker — Google AI Overview Citation Checker](https://apify.com/automationnation/aeo-auditor) — $0.04 per keyword ($0.032 on Gold), plus $2 per run from 17 Nov 2026; $0.01 per keyword until 16 Oct 2026 · [GitHub examples](https://github.com/retracn/google-ai-overview-tracker)
- [Google Maps Leads Scraper](https://apify.com/automationnation/google-maps-leads) — $0.03 per lead ($0.024 on Gold); $0.08 per business found with the no-website or unclaimed filters · [GitHub examples](https://github.com/retracn/google-maps-leads-scraper)
- [Google Maps Leads Scraper UK](https://apify.com/automationnation/uk-business-leads) — $0.05 per lead ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/uk-business-leads-google-maps)
- [App Store & Google Play Reviews Scraper + AI](https://apify.com/automationnation/app-store-review-miner) — $0.05 per app report ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/app-store-google-play-reviews-ai)
- [UK Companies House Leads — Filing Signals & AI Outreach](https://apify.com/automationnation/companies-house-leads) — $0.008 per lead
- [Contact Waterfall Enrichment — Emails & Directors](https://apify.com/automationnation/contact-waterfall-enrichment) — $0.015 per company
- [All Actors and guides](https://retracn.github.io/automationnation-actors/) · [AI visibility trackers compared](https://retracn.github.io/automationnation-actors/compare/ai-visibility-trackers/) · [Google Jobs scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-jobs-scrapers/) · [Google Trends scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-trends-scrapers/) · [App Store review scrapers compared](https://retracn.github.io/automationnation-actors/compare/app-store-review-scrapers/) · [Google Play review scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-play-review-scrapers/) · [YouTube transcript scrapers compared](https://retracn.github.io/automationnation-actors/compare/youtube-transcript-scrapers/) · [Google Flights scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-flights-scrapers/) · [Google Hotels scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-hotels-scrapers/) · [Google Ads Transparency scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-ads-transparency-scrapers/) · [Google Shopping scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-shopping-scrapers/) · [Google News scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-news-scrapers/)

---

This repository holds usage examples. The scraper itself runs on the [Apify platform](https://apify.com/automationnation/google-hotels-scraper); you need a free Apify account and API token. Examples are MIT licensed.
