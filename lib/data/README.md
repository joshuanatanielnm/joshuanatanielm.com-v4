# Data Files Structure

The data has been split into separate files for easier management and editing. Each file contains a specific type of data.

## File Structure

```
lib/data/
├── personalInfo.ts      # Your personal information (name, bio, tagline, etc.)
├── workExperience.ts    # Your work experience entries
├── portfolioProjects.ts # Your portfolio projects
├── explorations.ts      # Your experimental projects
├── photography.ts       # Your photography collection
├── skills.ts            # Your skills and technologies
├── contactInfo.ts       # Your contact information
└── index.ts             # Re-exports everything (don't edit this)
```

## How to Edit

### Personal Information
Edit `personalInfo.ts` to update:
- Name, title, bio, tagline
- Avatar image path
- Location
- Available for work status

### Work Experience
Edit `workExperience.ts` to add/update work experience entries:
- Company name, role, location
- Start and end dates
- Description and achievements
- Technologies used
- Metrics (optional)

### Portfolio Projects
Edit `portfolioProjects.ts` to manage your projects:
- Project title, description, category
- Thumbnail and image paths
- Technologies used
- Live URL and GitHub URL
- Metrics (optional)
- Featured status

### Explorations
Edit `explorations.ts` to add experimental projects:
- Title, description, category
- Demo URL and code URL
- Technologies and tags
- Interactive flag

### Photography
Edit `photography.ts` to manage your photo collection:
- Photo title, description
- Image URLs (full and thumbnail)
- Category and tags
- Location, date, camera settings
- Featured status

### Skills
Edit `skills.ts` to update your skills:
- Skill name and category
- Years of experience
- Icon (optional)

### Contact Information
Edit `contactInfo.ts` to update:
- Email and location
- Social media links
- Resume URL
- Calendly URL

## Notes

- All files use TypeScript types for type safety
- The `index.ts` file automatically re-exports everything
- You can import from `@/lib/data` as before - nothing changes in your components
- Make sure to follow the existing data structure when adding new entries
