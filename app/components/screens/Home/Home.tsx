import { Box, Button, Grid, Link, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC, useState } from 'react'
import ReactTyped from 'react-typed'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps } from 'shared/types/home'

import styles from '@/screens/Home/home.module.sass'

import { HeaderPhoto } from '@/assets/icons/photos'

import { user_data } from './data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  width: 'calc(100% - 68px)',
  flexWrap: 'nowrap',
  overflow: 'hidden',
  justifyContent: 'space-between',
  minHeight: '75vh',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    width: 'calc(100% - 42px)',
  },
  margin: '0 auto',
  '& .home--component': {
    width: '100%',
  },
  '& .home--header': {
    padding: '0 ',
  },
  '& .home-image': {
    [theme.breakpoints.down('md')]: {
      order: -5,
    },
  },
}))

export const Home: FC<Props> = (props) => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const [data, setData] = useState(user_data)
  useLanguage({
    dataEN: user_data,
    dataRU: user_data,
    setData,
    language,
    setLanguage,
  })
  return (
    <Root container rowSpacing={10} className={styles.Wrapper}>
      <Grid item xs={12} sm={5}>
        <Typography className={'home-container--subtitle'} variant="body2">
          <ReactTyped
            strings={[
              `Hello! Welcome to ${data.logoName}`,
              `Hola! Welcome to ${data.logoName}`,
              `Привіт! Ласкаво просимо ${data.logoName}`,
            ]}
            typeSpeed={150}
            backSpeed={50}
            loop
          />
        </Typography>
        <Typography className={'home-container--title'} variant="h1" my={3}>
          {data.home_title}
        </Typography>

        <Box className={'home-container--buttons'}>
          {data.home_buttons.map((item, index) => (
            <Button
              key={item.id}
              href={item.href}
              className={`home-container--button ${item.className}`}
              variant={index % 2 ? 'text' : 'contained'}
              sx={{ mr: 2 }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Grid>
      <Grid item xs="auto" className="home-image">
        <Image src={HeaderPhoto} alt="header-foto-image" />
      </Grid>
    </Root>
  )
}
