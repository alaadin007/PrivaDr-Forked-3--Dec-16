import { BlogContent, BlogSection, BlogSubsection } from './types'

export function formatBlogContent(content: BlogContent): string {
  let html = `
    <article class="prose dark:prose-invert max-w-none">
      <p class="lead">${content.introduction}</p>
  `

  content.sections.forEach(section => {
    html += formatSection(section)
  })

  html += `
      <div class="mt-8">
        <p class="font-medium">${content.conclusion}</p>
        <div class="bg-primary/10 p-6 rounded-lg mt-4">
          ${content.cta}
        </div>
      </div>
    </article>
  `

  return html
}

function formatSection(section: BlogSection): string {
  let html = `
    <section class="mt-8">
      <h2 class="text-2xl font-bold mb-4">${section.title}</h2>
      <div class="text-muted-foreground">${section.content}</div>
  `

  if (section.subsections) {
    html += `<div class="mt-6 space-y-6">`
    section.subsections.forEach(subsection => {
      html += formatSubsection(subsection)
    })
    html += `</div>`
  }

  html += `</section>`
  return html
}

function formatSubsection(subsection: BlogSubsection): string {
  return `
    <div class="bg-card/50 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-3">${subsection.title}</h3>
      <div class="space-y-2 text-muted-foreground">
        ${formatList(subsection.content)}
      </div>
    </div>
  `
}

function formatList(content: string): string {
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `<div>${line}</div>`)
    .join('')
}