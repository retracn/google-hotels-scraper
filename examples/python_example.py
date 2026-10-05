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
