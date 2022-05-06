const keywordColor: string = '#e74856' // 予約語
const commentColor: string = '#f9f1a5' // コメントアウト
const stringColor: string = '#5c9cf6' // 文字列
const titleColor: string = '#fb8800' // クラス名とか関数名とか
const valueColor: string = '#5fd7ff' // 値とか

export const styles: { [key: string]: any } = {
  base: { background: '#000', color: '#dddddd' },
  'hljs-comment': {
    color: commentColor,
    fontStyle: 'italic',
    display: 'inline',
  },
  'hljs-quote': { color: commentColor, fontStyle: 'italic', display: 'inline' },
  'hljs-keyword': { color: keywordColor, display: 'inline' },
  'hljs-selector-tag': { color: keywordColor, display: 'inline' },
  'hljs-type': { color: keywordColor, display: 'inline' },
  'hljs-string': { color: stringColor, display: 'inline' },
  'hljs-subst': { color: '#daefa3', display: 'inline' },
  'hljs-regexp': { color: '#e9c062', display: 'inline' },
  'hljs-link': { color: '#e9c062', display: 'inline' },
  'hljs-title': { color: titleColor, display: 'inline' },
  'hljs-section': { color: titleColor, display: 'inline' },
  'hljs-built_in': { color: titleColor, display: 'inline' },
  'hljs-tag': { color: titleColor, display: 'inline' },
  'hljs-name': { color: titleColor, display: 'inline' },
  'hljs-title.class_': { textDecoration: 'underline', display: 'inline' },
  'hljs-class': { textDecoration: 'underline', display: 'inline' },
  'hljs-doctag': { textDecoration: 'underline', display: 'inline' },
  'hljs-symbol': { color: valueColor, display: 'inline' },
  'hljs-bullet': { color: valueColor, display: 'inline' },
  'hljs-number': { color: valueColor, display: 'inline' },
  'hljs-params': { color: '#3e87e3', display: 'inline' },
  'hljs-variable': { color: '#3e87e3', display: 'inline' },
  'hljs-template-variable': { color: '#3e87e3', display: 'inline' },
  'hljs-attribute': { color: '#cda869', display: 'inline' },
  'hljs-meta': { color: '#8996a8', display: 'inline' },
  'hljs-formula': {
    backgroundColor: '#0e2231',
    color: '#f8f8f8',
    fontStyle: 'italic',
    display: 'inline',
  },
  'hljs-addition': {
    backgroundColor: '#253b22',
    color: '#f8f8f8',
    display: 'inline',
  },
  'hljs-deletion': {
    backgroundColor: '#420e09',
    color: '#f8f8f8',
    display: 'inline',
  },
  'hljs-selector-class': { color: '#9b703f', display: 'inline' },
  'hljs-selector-id': { color: '#8b98ab', display: 'inline' },
  'hljs-emphasis': { fontStyle: 'italic', display: 'inline' },
  'hljs-strong': { fontWeight: 'bold', display: 'inline' },
}
