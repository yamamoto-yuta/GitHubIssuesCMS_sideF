import { Box } from '@mui/material'
import { styles } from '../lib/highlightTheme'

export const SyntaxHighlight = (code: any, isScrollable: boolean) => {
  let style = {}
  if (isScrollable) {
    style = {
      overflow: 'scroll',
      overflowY: 'scroll',
      padding: '0.5rem',
    }
  } else {
    style = {
      padding: '0.5rem',
    }
  }
  return (
    <Box maxHeight="600px" sx={styles['base']} style={style}>
      {code.children.map((child: any) => {
        return Highlighting(child)
      })}
    </Box>
  )
}

const HighlightingAll = (node: any) => {
  if (node.type === 'element') {
    return (
      <Box sx={{ display: 'inline' }}>
        {node.children.map((child: any, index: number) => {
          return <Highlighting key={index} {...child} />
        })}
      </Box>
    )
  } else {
    return <Box sx={{ display: 'inline' }}>{node.value}</Box>
  }
}

const Highlighting = (node: any) => {
  if (node.properties?.className[0] === undefined) {
    return <HighlightingAll {...node} />
  }
  const className: string = node.properties?.className[0]
  let style = styles[className]
  if (style === undefined) {
    console.error('[Error]: undefined Highlight className = ', className)
    console.log(node)
    style = { display: 'inline' }
  }
  return (
    <Box sx={style}>
      <HighlightingAll {...node} />
    </Box>
  )
}

export const InlineCode = (props: any) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'inline',
        background: '#fcfcfc',
        color: 'red',
        pr: 0.5,
        pl: 0.5,
        mr: 0.5,
        ml: 0.5,
        border: 1,
        borderColor: '#dddddd',
        borderRadius: 1,
      }}
    />
  )
}
