import { Typography, Box } from '@mui/material'
import { format, formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import React from 'react'
import Del from '../components/Del'

declare const VERSION: string;
declare const PUBLISH_TIME: number;

export const Home = () => {
  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
    }}>
      <Typography variant='h2'>从学生到前端开发者</Typography>
      <Typography variant='caption'>本文由 houzaj 委托 hpp2334 <Del>杜撰</Del> 编写</Typography>

      <Box sx={{
        color: 'text.secondary',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 40,
      }}>
        <Typography variant='caption'>版本: {VERSION}</Typography>
        <Typography variant='caption'>更新时间: {format(PUBLISH_TIME, "yyyy-MM-dd HH:mm:ss")} (距更新已过{(formatDistanceToNow(PUBLISH_TIME, {
          locale: zhCN
        }))}，请注意时效性)</Typography>
      </Box>
    </Box>
  )
}
