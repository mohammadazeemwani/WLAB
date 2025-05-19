import { colors } from './load-elements.js'

export function getCellMarkup({
  atomicNum, label, name, bgColor, textColor
}) {
  return (`
    <div class="cell" style="background-color: ${colors[bgColor]}; color: ${colors[textColor]}">
      <span data-label="atomicNum">${atomicNum}</span>
      <span data-label="label">${label}</span>
      <span data-label="name">${name}</span>
    </div>
    `)
}
export function getCellRangeMarkup({
  atomicNumFrom, atomicNumTo, name, bgColor, textColor
}) {
  return (`
    <div class="cell" style="background-color: ${colors[bgColor]}; color: ${colors[textColor]}">
      <span data-label="atomicNum">${atomicNumFrom}-${atomicNumTo}</span>
      <span data-label="name">${name}</span>
    </div>
    `)
}

export function getColumnSpanner(number) {
  return (`
    <div style="grid-column: span ${number}"></div>
    `)
}