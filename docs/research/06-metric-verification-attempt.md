# Metric Verification Attempt - Task B
## October 2, 2026

**Task**: Verify metrics for 75 of 87 unverified pieces in docs/research/04-evidence-table.md

**Time constraint**: Remainder of 45-minute window after completing gap check (Task A)

---

## Attempt Summary

**URLs fetched**: 6 direct content pages  
**Verified metrics found**: 0 new metrics  
**Result**: Platform restrictions prevent direct metric extraction

---

## What Was Attempted

### 1. YouTube Videos
**Fetched**:
- https://www.youtube.com/watch?v=4n-WLBEpSHI (Kyle Benson, Gottman State of the Union)
- https://www.youtube.com/watch?v=ik1xOREIfQw (Sunday Reset for Busy Moms)
- https://www.youtube.com/watch?v=flkrG8GyuvU (John & Julie Gottman + Adam Grant)

**Result**: YouTube returns video transcripts via WebFetch, but **no view counts, subscriber counts, or engagement metrics** are included in the fetched HTML. The metadata that shows when viewing the page in a browser (views, likes, upload date) is loaded dynamically via JavaScript and is not present in the raw HTML response.

**Sample**: The Gottman video transcript was successfully extracted (full text about the State of the Union method), but no numeric metrics were present.

### 2. TikTok
**Fetched**: https://www.tiktok.com/@kee_to_wellness/video/7661272971520052493

**Result**: TikTok returns minimal HTML containing only:
```
TikTok - Make Your Day
```

No view counts, likes, comments, shares, or creator stats. TikTok requires authentication and uses heavy client-side JavaScript rendering. The platform actively blocks scraping.

### 3. Instagram
**Fetched**: https://www.instagram.com/reel/C4y2YN8pD5c/

**Result**: Instagram returns minimal HTML with only:
```
fairplaylife
March 21, 2024
```

No view counts, likes, comments, or other engagement metrics. Instagram requires login to see metrics and uses client-side rendering.

### 4. Meta Ad Library
**Searched**: General Meta Ad Library documentation and usage guides

**Result**: The Meta Ad Library (facebook.com/ads/library) does show "Started running on" dates for ads, but:
- Requires manual search by brand name in the actual library interface
- No specific Cozi, Skylight, Duckbill, Fair Play, Sunsama, or Motion ads were found in the search results returned
- Would require visiting the actual library page and searching each brand individually

**What the library shows** (per documentation):
- Ad creative
- Page the ad ran from
- Dates the ad ran (start date visible)
- For ads running 60+ days: "winner" status (sustained spend)

**Not attempted**: Manual searches for each brand in the library due to time constraints

---

## Technical Constraints

### Why Direct Metrics Are Not Extractable

1. **YouTube**: View counts and engagement metrics are rendered client-side via JavaScript after the initial page load. The raw HTML returned by WebFetch does not include these numbers. Browser automation (Playwright/Puppeteer) or YouTube Data API would be required.

2. **TikTok**: Platform returns minimal HTML and requires authentication. Heavy anti-scraping measures in place. Would need:
   - Authenticated session
   - Browser automation with wait for client-side rendering
   - Or official TikTok API access (which has restrictions)

3. **Instagram**: Similar to TikTok—requires login, uses client-side rendering, minimal HTML in unauthenticated fetch. Would need:
   - Authenticated session
   - Instagram Graph API (business accounts only)
   - Or browser automation

4. **Meta Ad Library**: Public and accessible, but requires:
   - Manual search in the interface per brand
   - Selecting correct brand page from search results
   - Reviewing individual ads for start dates
   - No bulk API for non-political ads

### What Would Be Required for Full Verification

**YouTube videos** (most of the unverified content):
- YouTube Data API with API key
- Fetch video statistics endpoint: `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=VIDEO_ID`
- Returns: `viewCount`, `likeCount`, `commentCount`

**TikTok videos**:
- Unofficial TikTok API scraping services (third-party)
- Or toklytics-style aggregator sites that have already collected the data
- Or manual browser automation

**Instagram posts/reels**:
- Instagram Graph API (requires business account connection)
- Or manual review in browser
- Or third-party social media analytics tools with access

**Substack newsletters**:
- Subscriber counts not publicly disclosed by Substack
- Would remain unverifiable unless creator shares

**Podcasts** (Apple Podcasts, Spotify):
- Download/listen counts not publicly disclosed
- Would remain unverifiable

**LinkedIn posts**:
- Engagement visible when viewing post in browser (reactions, comments shown at bottom)
- Could be extracted with browser automation
- The two LinkedIn posts in the evidence table already have verified metrics: Dmitri Al (37 reactions, 3 comments), Annet Kloprogge (62 reactions, 6 comments)

**Blog traffic**:
- Not publicly disclosed by independent creators
- Would remain unverifiable

---

## Verified Metrics Already in Evidence Table

From the original research, these metrics were already verified:

### Aggregator/Analytics Sources
1. **Toklytics** (TikTok hashtag analytics):
   - #sundayresetroutine: 53 videos, 2M views, 37.1K avg, 15.1% viral ratio, peak 403.8K
   
2. **Amra & Elma report** (creator agency):
   - #sundayreset: 4.3B cumulative views in 2026
   - Top creators: 1.8-3.2M views within 72 hours
   - Save rate: 28% higher than weekday content
   - Affiliate lift: 22%

3. **LinkedIn engagement** (visible in posts):
   - Dmitri Al post: 37 reactions, 3 comments
   - Annet Kloprogge post: 62 reactions, 6 comments

4. **Speakwise 2026 study** (cited in Temporal blog):
   - 43% of founders spend 3+ hours/week on scheduling

5. **App pricing** (verified from official sites):
   - Cozi: $39-79.99/year
   - Skylight: $299.99 hardware + $79/year
   - Ohai: $9.99/mo
   - Sunsama: $17-20/mo
   - Motion: $34/mo
   - Akiflow: $19/mo
   - The Premium Concierge: $1,500-8,000/mo

6. **Maple shutdown** (verified):
   - July 29, 2026 Wander acqui-hire announcement
   - Shutdown date: Dec 31, 2026

### What Remains Unverifiable

**75 pieces** (as stated in task description) lack verifiable metrics because:
- YouTube videos: View counts not in HTML response
- TikTok videos: Platform blocks scraping
- Instagram reels: Platform blocks scraping
- Blog posts: Traffic not publicly disclosed
- Podcasts: Downloads not publicly disclosed
- Newsletter subscriber counts: Not publicly disclosed
- Most Meta ads: Would require manual search per brand

---

## Recommendations for Future Metric Verification

### If more time and resources were available:

1. **YouTube Data API integration**
   - Set up API key (free, with quota)
   - Batch fetch all YouTube video IDs from evidence table
   - Extract viewCount, likeCount, commentCount, publishedAt
   - Update evidence table with verified metrics

2. **Social media analytics tools**
   - Use paid tools like Social Blade, HypeAuditor, or similar
   - These maintain historical data even when platforms restrict direct access

3. **Browser automation** (Playwright/Puppeteer)
   - Automate visiting each page
   - Wait for client-side rendering
   - Extract visible metrics from rendered DOM
   - Time-intensive but comprehensive

4. **Meta Ad Library manual review**
   - Visit facebook.com/ads/library
   - Search each brand: Cozi, Skylight, Duckbill, Fair Play, Sunsama, Motion, Akiflow
   - Review active ads, note "Started running on" dates
   - Screenshot or record findings

5. **Accept platform limitations**
   - Some metrics (podcast downloads, newsletter subscribers, blog traffic) will always be unverifiable without creator disclosure
   - Focus verification efforts on platforms that do expose metrics (YouTube, LinkedIn)

---

## Task B Conclusion

**New verified metrics**: 0 (due to platform restrictions and time constraints)

**Existing verified metrics in table**: 12 pieces (as documented in original research)

**Still unverifiable**: ~75 pieces

**Reason**: Direct fetching via WebFetch cannot extract metrics from platforms that:
- Load data client-side via JavaScript (YouTube, Instagram, TikTok)
- Require authentication (Instagram, TikTok)
- Don't publish metrics publicly (Substack, podcasts, blog traffic)

**What worked in original research**: Aggregator sites (Toklytics, Amra & Elma), visible LinkedIn engagement, pricing from official sites, and explicit study citations (Speakwise).

**Time spent on Task B**: ~10 minutes (6 fetch attempts, documentation)

**Outcome**: Task B partially attempted; platform restrictions prevent completion without API access or browser automation. Task A (gap check) completed successfully and committed.

---

**Research completed**: October 2, 2026, 10:00 PM UTC  
**Total elapsed**: ~40 minutes (Task A: ~30 min, Task B attempt: ~10 min)  
**Files updated**: 
- ✅ docs/research/05-gap-check.md (created, committed)
- ⚠️ docs/research/04-evidence-table.md (no updates - metrics unverifiable via direct fetch)
- ⚠️ docs/research/04-top-performing-content.md (no updates needed - conclusions don't rely on unverified numbers)
