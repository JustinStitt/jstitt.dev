import { carta } from '$lib/carta.js';

export async function load({ params }) {
  const markdown = `
# some test
## more test
**test**
*test*

- a 
  - c
- b

1. a 
2. b
3. c
`
  const html = await carta.render(markdown)
  return { slug: params.slug, html: html }
}
