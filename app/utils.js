/* @flow */

const events = []

export function listen(handler: Function) {
  events.push(handler)
}
export function setDocumentTitle(title) {
  document.title = title
  events.forEach(handler => handler(title))
}
