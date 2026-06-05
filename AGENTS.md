# AGENTS.md

Guidance for AI/code agents working in this repository.

## Working style

- Be proactive with changes. When the requested intent is clear, make the needed edits rather than asking for unnecessary confirmation.
- Prefer small, direct improvements that move the site forward.
- Preserve existing wording, structure, and style unless the task clearly calls for changing them.
- When a change implies related cleanup, make the cleanup if it is safe and clearly connected.
- Avoid over-engineering. Keep the site simple, maintainable, and easy to review.

## Communication

- Summarize what changed in plain English.
- Do not include verbose commit metadata in user-facing responses.
- Do not paste commit hashes, internal IDs, or long technical details unless specifically requested.
- Mention only the files or areas changed and any meaningful caveats.
- If nothing changed, say so clearly and briefly.

## Content conventions

- Use “we” for Falcon Integrated Solutions where company voice is needed.
- Avoid overusing the word “scan”; prefer field review, field visit, analytics, monitoring, or treatment planning support where appropriate.
- Describe steps and services plainly rather than adding excessive marketing language.
- Keep calls to action practical and direct.

## Repository hygiene

- Keep edits focused on the requested work.
- Do not introduce new dependencies or build tooling unless there is a clear need.
- Check for obvious consistency issues after edits, especially repeated site sections, contact information, and wording patterns.
- Prefer readable HTML, CSS, and Markdown over clever abstractions.
