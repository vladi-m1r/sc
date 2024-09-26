# Scarab
### Introduction
Scarab is a comprehensive changelog management tool designed for software development teams. It facilitates the effortless tracking of detailed technical changes, providing teams with valuable insights into their development process.

Scarab comes equipped with several features right out of the box:
- [Data Visualization](#data-visualization)
- [Export Functionality](#export-functionality)

### Data Visualization

Scarab leverages various visualization techniques, including charts and timelines, to transform raw data into meaningful insights. It utilizes state-of-the-art data visualization libraries compatible with modern web technologies.

### Export Functionality

Users can export visualized data and comparison results in various formats, enhancing collaboration and allowing for easy sharing of insights.


## Deploy Your Own

> Note: one-click deployment is a bit broken at the moment – you'll need to change some of the hard-coded values in the codebase to get it working. I'm working on fixing this.

You can deploy your own hosted version of Scarab for greater privacy & control. Just click the link below to deploy a ready-to-go version of Dub to Vercel.

[![Deploy with Vercel](https://vercel.com/button)]()

## Built Using
- [Next.js](https://nextjs.org/): Powers the interactive user interface for managing logs.
- [Typescript](https://www.typescriptlang.org/): Provides strong typing and code consistency for maintainability.
- [Tailwind CSS](https://tailwindcss.com/): Streamlines UI development for a clean and responsive interface.
- [Kinde Auth](https://kinde.com/): Manages user authentication and secures release note content.
- [Vercel](https://vercel.com/): Hosts and deploys Scarab for seamless accessibility.


## Implementation

Scarab is built as a standard Next.js application with [Middleware](https://nextjs.org/docs/advanced-features/middleware) to handle multi-tenancy, inspired by [the Vercel Platforms Starter Kit](https://github.com/vercel/platforms).

## Author

- Kelvin Yelyen ([@kelvinyelyen](https://twitter.com/kelvinyelyen))
