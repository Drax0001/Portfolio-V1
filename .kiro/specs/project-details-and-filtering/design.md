# Design Document

## Overview

This design implements a project details page system with technology-based filtering and an improved skills section. The solution maintains the existing purple theme (#3a2e39), component architecture, and responsive design patterns while adding new functionality through dynamic routing and state management.

## Architecture

### Routing Structure

- Main portfolio: `/` (existing)
- Project details: `/projects/[slug]` (new dynamic route)
- 404 handling for invalid project slugs

### Component Hierarchy

```
app/
├── page.tsx (existing - updated with filtering)
├── projects/
│   └── [slug]/
│       └── page.tsx (new - project detail page)
├── components/
│   ├── ProjectCard.tsx (existing - updated navigation)
│   ├── ProjectFilter.tsx (new - technology filtering)
│   ├── ProjectDetail.tsx (new - detail page content)
│   └── SkillsSection.tsx (existing - updated design)
```

## Components and Interfaces

### ProjectFilter Component

**Purpose:** Technology-based filtering for projects section
**Props:**

- `technologies: string[]` - All unique technologies from projects
- `selectedTechnologies: string[]` - Currently selected filters
- `onFilterChange: (technologies: string[]) => void` - Filter change handler

**Design:**

- Horizontal scrollable chip layout
- Active state styling with reddish (#f15152) background
- Inactive state with black-high-opacity (#00000022) background
- Clear all filters option

### ProjectDetail Component

**Purpose:** Detailed project information display
**Props:**

- `project: ProjectType` - Complete project data

**Layout Sections:**

1. **Header**: Project title, back button, action buttons (GitHub, Demo)
2. **Hero Image**: Large project screenshot/thumbnail
3. **Description**: Detailed project information
4. **Technologies**: Technology chips (non-interactive)
5. **Features**: Bulleted feature list
6. **Links**: GitHub and demo buttons

### Updated ProjectCard Component

**Changes:**

- Remove direct GitHub link navigation
- Add click handler for internal routing to project detail page
- Maintain existing visual design and animations

### Updated SkillsSection Component

**Changes:**

- Remove proficiency percentage display
- Maintain skill categorization and icon layout
- Preserve responsive grid system
- Keep existing color scheme and animations

## Data Models

### Enhanced ProjectType

```typescript
export type ProjectType = {
  title: string;
  slug: string; // new - URL-friendly identifier
  description: string;
  detailedDescription?: string; // new - longer description for detail page
  image: any;
  images?: any[]; // new - additional project images
  technologies: string[];
  features: string[];
  demoLink: string;
  githubLink: string;
};
```

### FilterState

```typescript
type FilterState = {
  selectedTechnologies: string[];
  filteredProjects: ProjectType[];
};
```

## Error Handling

### Invalid Project Slugs

- 404 page for non-existent project slugs
- Graceful fallback to main portfolio page
- Error boundary for project detail page

### Missing Data

- Default placeholder for missing project images
- "Demo Coming Soon" for unavailable demo links
- Fallback descriptions for missing detailed content

## Testing Strategy

### Unit Tests

- ProjectFilter component filtering logic
- Project slug generation and validation
- Skills section rendering without percentages

### Integration Tests

- Navigation flow from project card to detail page
- Filter state management and project filtering
- Responsive design across breakpoints

### User Acceptance Tests

- Complete user journey from portfolio to project details
- Filter functionality with multiple technology selections
- Skills section visual consistency

## Implementation Notes

### Slug Generation

- Convert project titles to URL-friendly slugs
- Handle special characters and spaces
- Ensure uniqueness across all projects

### State Management

- Use React useState for filter state (local to projects section)
- No global state needed for this feature
- Maintain existing Zustand store for contact form

### Responsive Design

- Maintain existing Tailwind breakpoint system
- Ensure project detail pages work on mobile devices
- Preserve horizontal scrolling for filter chips on small screens

### Performance Considerations

- Static generation for project detail pages
- Image optimization using Next.js Image component
- Lazy loading for project images

## Visual Design Consistency

### Color Scheme

- Primary: #3a2e39 (purple-custom)
- Accent: #f15152 (reddish)
- Background: #00000022 (black-high-opacity)
- Text: Existing white/gray hierarchy

### Typography

- Maintain Inter font for headings
- Maintain Satoshi font for body text
- Preserve existing font weight hierarchy

### Animations

- Use existing Framer Motion patterns
- Maintain consistent transition durations (0.5s)
- Preserve scroll-triggered animations
