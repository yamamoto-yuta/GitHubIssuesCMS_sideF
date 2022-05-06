import { Pagination } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

export const CustomPagination = ({
  pageNum,
  page,
  setPage,
}: {
  pageNum: number
  page: number
  setPage: Dispatch<SetStateAction<number>>
}) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#paginationAnchor')

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Pagination
      count={pageNum} //総ページ数
      color="primary" //ページネーションの色
      onClick={handleClick}
      onChange={(e, page) => setPage(page)} //変更されたときに走る関数。第2引数にページ番号が入る
      page={page} //現在のページ番号
      variant="outlined"
      sx={{ justifyContent: 'center', display: 'flex' }}
      hideNextButton
      hidePrevButton
      siblingCount={2}
    />
  )
}
