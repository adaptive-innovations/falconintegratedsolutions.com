# AGENTS.md

Guidance for AI/code agents working in this repository.

## Site purpose

- This site represents Falcon Integrated Solutions.
- The service emphasis is agricultural field review, drone-supported field analytics, monitoring, targeted investigation, and treatment planning support.
- Present the work as practical decision support for growers, land managers, and agricultural operations.

## Working style

- Be proactive with changes. When the requested intent is clear, make the needed edits rather than asking for unnecessary confirmation.
- Prefer small, direct improvements that move the site forward.
- Preserve existing wording, structure, and style unless the task clearly calls for changing them.
- When a change implies related cleanup, make the cleanup if it is safe and clearly connected.
- Avoid over-engineering. Keep the site simple, maintainable, and easy to review.
- Do not rewrite unrelated sections or redesign the whole site unless explicitly asked.
- Do not add new frameworks, dependencies, build steps, or third-party services unless there is a clear requirement.

## Multi-user editing rules

- Inspect the current files before making substantial edits.
- Avoid overwriting unrelated recent changes.
- Keep commits focused on the requested change or a clearly related cleanup.
- Reuse existing section patterns, classes, and structure where practical.
- If a conflict or ambiguity is found, preserve the existing content and note the issue in the response.
- Do not remove content unless requested or clearly obsolete.
- If changing a repeated phrase, CTA, footer item, or contact detail, update all obvious matching instances.

## Communication

- Summarize what changed in plain English.
- Do not include verbose commit metadata in user-facing responses.
- Do not paste commit hashes, internal IDs, or long technical details unless specifically requested.
- Mention only the files or areas changed and any meaningful caveats.
- Do not list every tiny line edit unless asked.
- If nothing changed, say so clearly and briefly.

## Content conventions

- Use “we” for Falcon Integrated Solutions where company voice is needed.
- Avoid overusing the word “scan”; prefer field review, field visit, analytics, monitoring, crop health patterns, zones, or treatment planning support where appropriate.
- Describe steps and services plainly rather than adding excessive marketing language.
- Keep calls to action practical and direct.
- Prefer wording such as “Schedule Field Work,” “Request a Field Review,” or “Plan the Next Action” over vague marketing CTAs.
- Avoid hype, buzzwords, and unsupported claims.

## Business constants

- Company name: Falcon Integrated Solutions.
- Contact email: sales@falconintegratedsolutions.com.
- Do not invent phone numbers, addresses, pricing, certifications, licenses, partner relationships, guarantees, or legal claims.
- Do not imply pesticide application, chemical recommendation, aviation compliance, or regulatory authority unless source material explicitly supports it.

## Brand colors

- Primary Green: `#70A040`, RGB `112, 160, 64`, Pantone `7741 C`.
- Primary Blue: `#4080C0`, RGB `64, 128, 192`, Pantone `7683 C`.
- Falcon Green range: dark `#609030`, mid-tone `#70A040`, light `#80B050`.
- Circle Blue range: dark `#3070B0`, mid-tone `#4080C0`, light `#6090D0`.
- Text Gray range: approximately `#7A7A7A` to `#888888`.
- Preserve the logo colors unless a task explicitly asks for an alternate palette.

## Factual claims and risk-sensitive content

- Treat agronomic, pesticide, regulatory, aviation, and compliance claims carefully.
- Phrase analytics as decision support, not guaranteed diagnosis.
- Do not promise yield improvement, disease detection, chemical results, regulatory compliance, or treatment outcomes unless specifically provided and supported.
- Prefer language such as “helps identify,” “supports review,” “can guide scouting,” and “may inform planning.”

## Media and assets

- Always ask users to place site media in `/media`.
- Use `/media` for images, videos, PDFs, and other user-provided site assets.
- Do not scatter media files across the repository unless an existing structure clearly requires it.
- Use descriptive, lowercase filenames with hyphens where practical.

## Mobile and visual review

- Treat mobile layout as a primary review target.
- After visual or content edits, check for obvious desktop and mobile spacing issues.
- Watch for CTA buttons, cards, headings, and footer content wrapping badly.
- Keep text readable and tap targets practical.
- Favor strong contrast and accessible text.
- Do not rely on color alone to communicate meaning.
- Keep imagery appropriate to agriculture, drones, field service, and practical analytics.
- Avoid generic tech imagery, clipart-style visuals, or unrelated stock-photo concepts unless requested.

## Footer and consistency

- Keep footers consistent across pages.
- Keep contact information consistent everywhere.
- Keep page titles, CTAs, and service descriptions aligned with the rest of the site.
- Prefer shared styles and existing layout patterns over one-off styling.

## Repository hygiene

- Keep edits focused on the requested work.
- Do not introduce new dependencies or build tooling unless there is a clear need.
- Check for obvious consistency issues after edits, especially repeated site sections, contact information, and wording patterns.
- Prefer readable HTML, CSS, and Markdown over clever abstractions.
