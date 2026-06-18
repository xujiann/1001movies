# 1001 Movies

Live site: https://xujiann.github.io/1001movies/

A static movie catalog website built around a simple structure:

```text
1001 = 13 categories * 11 subcategories * 7 movies
```

The site is a self-contained HTML/CSS/JavaScript app. It displays 1001 movies with real poster URLs, category browsing, search, result counts, and a poster-focused movie detail dialog.

## Features

- 13 top-level movie categories
- 11 subcategories in each category
- 7 movies in each subcategory
- 1001 total movie cards
- Real poster images from a public MovieLens poster mapping dataset
- IMDb `title.basics` genre enrichment when `data/imdb/title.basics.tsv.gz` is available
- Search by title, category, subcategory, or label
- Category and subcategory filters
- Genre, decade, and watch-status filters
- Sorting by list order, title, and year
- Daily recommendation card
- Poster grid and compact list views
- Shareable filter URLs for library states
- Removable active filter chips
- Watch progress summaries
- Empty-state quick reset
- Floating back-to-top control
- Random movie picker
- Local favorites and watched markers using `localStorage`
- Clickable movie detail dialog
- Shareable movie detail hashes such as `#movie-0073`
- One-click copy for movie detail links
- Static deployment friendly: GitHub Pages, Netlify, Vercel, or any file server

## Files

- `index.html` - page structure
- `styles.css` - responsive visual design
- `app.js` - catalog rendering, filtering, and dialog interactions
- `data/movies.js` - generated 1001-movie data file used by the site
- `data/movie_poster.csv` and `data/u.item.txt` - source data files
- `scripts/build-movie-data.js` - regenerates `data/movies.js`

## Regenerate Data

```bash
node scripts/build-movie-data.js
```

The generator uses IMDb genres first when `data/imdb/title.basics.tsv.gz` exists locally. The large IMDb dataset is intentionally ignored by git and should not be committed.

## Local Use

Open `index.html` directly in a browser.

## GitHub Pages

After pushing this repository to GitHub:

1. Open repository settings.
2. Go to Pages.
3. Set the source to the default branch and root directory.
4. Save and wait for GitHub Pages to publish the site.

## Data Source

Poster data is derived from the public GitHub dataset:

https://github.com/babu-thomas/movielens-posters

Genre enrichment can use the official IMDb non-commercial datasets:

https://datasets.imdbws.com/
