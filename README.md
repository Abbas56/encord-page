## Deployment link  :rocket:
https://encord-page.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Design Philosophy


I approached this project with a focus on:

Component Reusability:
Creating modular components that could be easily reused across the application


Responsive Design:
* Ensuring all components worked well across different screen sizes

* Visual Appeal: Implementing engaging visual elements like the rainbow border and interactive carousel

* Accessibility: Making sure components were keyboard navigable and had proper ARIA attributes

* Performance: Keeping components lightweight and optimised

## Development Process
* Component Analysis: I began by analyzing the requirements for each component and breaking them down into smaller, manageable parts.

* Prototyping: Created basic versions of each component to establish structure and functionality.

* Styling: Applied Tailwind CSS classes to match the design requirements.

* Interactivity: Added state management and event handlers for interactive elements.

* Responsive Adjustments: Fine-tuned components to ensure they worked well across all screen sizes.

* Refinement: Polished visual details and animations to enhance user experience.

## AI Tools Leveraged
During development, I utilized the following AI tools:

* GitHub Copilot

* Claude AI

I made sure to review and refine all AI-generated code to ensure it met quality standards and followed best practices. The core architecture decisions and component design were my own work.

## Performance Optimisations
I implemented several performance optimisations throughout the project:

* Image Optimisation:
  * Used Next.js Image component for automatic image optimisation

  * Implemented lazy loading for carousel images

  * Specified image dimensions to prevent layout shifts

* Render Optimisation:

  * Used CSS transitions instead of JavaScript for animations where possible

  * Avoided unnecessary re-renders by optimising state updates

* Bundle Size Considerations:
  * Kept dependencies minimal

  * Used tree-shakable imports

  * Avoided large libraries for simple functionality

* Responsive Performance:
  * Used responsive Tailwind classes instead of media queries where possible

  * Implemented conditional rendering for mobile vs. desktop elements


## Time Log
Initial Setup: 0.5 hours - Setting up Next.js project with TypeScript and Tailwind CSS configuration

Developing components: 2 hours

Responsive Adjustments: 0.5 hours - Fine-tuning all components for mobile and tablet views

Testing & Debugging: 0.5 hours - Testing components across different browsers and fixing issues

Documentation: 0.5 hours - Writing documentation and comments for the codebase

Total: 4 hours

## PageSpeed insights links :rocket:
Desktop: https://pagespeed.web.dev/analysis/https-encord-page-vercel-app/6rerzgw7s6?form_factor=desktop

Mobile: https://pagespeed.web.dev/analysis/https-encord-page-vercel-app/6rerzgw7s6?form_factor=mobile

## Future Improvements
If I had more time to work on this project, I would make the following improvements:

* SVG Icon Color in Carousel: I would refine the implementation of the SVG icons in the carousel to ensure they properly change to purple when active. The current implementation works conceptually but could be improved for better visual consistency.

* Footer Mobile Optimisation: While the footer is functional on mobile devices, there are some layout issues that could be improved. I would refine the spacing, alignment, and column structure to create a more polished mobile experience.






