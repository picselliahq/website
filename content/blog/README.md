# Blog

This directory contains all blog posts as MDX files. Each `.mdx` file becomes a page at `/blog/<filename>`.

## Adding a new post

1. Create a file in this directory: `content/blog/your-post-slug.mdx`
2. Add frontmatter and content (see template below)
3. Place images in `public/images/blog/`
4. The post appears automatically on the next build or dev server refresh

## Frontmatter template

```yaml
---
title: "Your Post Title"
description: "A short summary used for SEO meta tags and post previews."
date: "2026-01-29"
author:
  name: "Your Name"
category: "Computer Vision"
image: "/images/blog/your-post-slug-hero.jpg"
published: true
tags: ["tag1", "tag2"]
imageAlt: "Description of the hero image"
---
```

### Required fields

| Field         | Description                          |
| ------------- | ------------------------------------ |
| `title`       | Post title                           |
| `description` | Short summary for SEO and previews   |
| `date`        | Publication date (`YYYY-MM-DD`)      |
| `author.name` | Author display name                  |
| `category`    | One of the categories listed below   |

### Optional fields

| Field      | Default | Description                        |
| ---------- | ------- | ---------------------------------- |
| `image`    | —       | Hero image path (relative to `/public`) |
| `imageAlt` | —       | Alt text for the hero image        |
| `tags`     | `[]`    | Array of tag strings               |
| `published`| `true`  | Set to `false` to hide the post    |

### Categories

- Computer Vision
- Customer Story
- Data Management
- Data Science
- Edge AI
- Manufacturing
- MLOps
- Model Monitoring
- News
- Onboarding
- Product
- Tutorial
- YOLO

## Images

- Place all images in `public/images/blog/`
- Reference them in MDX as `![alt text](/images/blog/filename.jpg)`
- Hero images should be at least 1200px wide for sharp rendering
- Supported formats: `.jpg`, `.png`, `.svg`, `.webp`

## MDX features

Posts support standard Markdown plus:

- **Syntax highlighting** — fenced code blocks with language tags
- **Auto-linked headings** — `##` and `###` headings get anchor links and appear in the table of contents
- **External links** — links starting with `http` automatically open in a new tab

## File naming

The filename (minus `.mdx`) becomes the URL slug. Use lowercase with hyphens:

```
my-post-title.mdx  →  /blog/my-post-title
```

## Old Webflow URLs

Posts migrated from Webflow automatically redirect from `/post/<slug>` to `/blog/<slug>`. New posts don't need this — they only live at `/blog/<slug>`.
