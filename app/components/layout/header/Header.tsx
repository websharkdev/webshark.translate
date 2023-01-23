import { Box, Divider, Grid, IconButton, Link as MuiLink, Typography, styled, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import 'shared/api/home.api'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps, MenuItemProps } from 'shared/types/home'

import { user_data } from '@/components/screens/Home/data'

import styles from '../layout.module.sass'
import Logo from '../logo/Logo'

type Props = {}

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(45, 45, 45, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(45, 45, 45, 1)',
  },
}

const Root = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  marginBottom: theme.spacing(2),
  alignItems: 'center',
  position: 'relative',
  zIndex: 30,
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  },
  '& h5.header-fio': {
    [theme.breakpoints.down('lg')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
}))

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  padding: '34px 34px',
  background: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    padding: '24px 20px',
  },
}))

type RectangleProps = {
  position: number[]
}

const Rectangle = ({ position }: RectangleProps) => {
  return (
    <motion.rect
      initial="hidden"
      animate="visible"
      variants={icon}
      width="4"
      height="4"
      x={position[0]}
      y={position[1]}
    />
  )
}

export const Header: FC<Props> = () => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const [data, setData] = useState(user_data)

  useLanguage({
    dataEN: user_data,
    dataRU: user_data,
    setData,
    language,
    setLanguage,
  })

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { menu, header_fio } = data

  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )

  return (
    <Wrapper>
      <Root container className="wrapper" columnSpacing={3}>
        <Grid item md="auto">
          <Logo />
        </Grid>
        <Grid item xs={12} md="auto">
          {tablet ? (
            <Box sx={{ width: '100%' }}>
              <IconButton
                id="header-menu--burger"
                aria-controls={menuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? 'true' : undefined}
                size="small"
                onClick={menuOpen ? handleClose : handleClick}
              >
                {menuOpen ? (
                  <motion.svg
                    width="24"
                    height="4"
                    viewBox="0 0 24 4"
                    xmlns="http://www.w3.org/2000/svg"
                    className="item"
                    whileInView={'visible'}
                    initial="hidden"
                    variants={icon}
                  >
                    <Rectangle position={[0, 0]} />
                    <Rectangle position={[10, 0]} />
                    <Rectangle position={[20, 0]} />
                  </motion.svg>
                ) : (
                  <motion.svg
                    width="24"
                    height="24"
                    className="item"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileInView={'visible'}
                    initial="hidden"
                    variants={icon}
                  >
                    <Rectangle position={[0, 20]} />
                    <Rectangle position={[10, 10]} />
                    <Rectangle position={[20, 0]} />
                  </motion.svg>
                )}
              </IconButton>
            </Box>
          ) : (
            <Grid container spacing={{ sm: 2, md: 4 }}>
              {menu.map((item: MenuItemProps) => (
                <Grid item sm={6} md={'auto'} key={item.id} className={`header-menu--item ${styles.MenuItem}`}>
                  <MuiLink href={item.link}>{`${item.title}.`}</MuiLink>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
        <Grid item flex={1} pr={0}>
          <Typography variant="h5" align="right" className="header-fio">
            {header_fio}
          </Typography>
        </Grid>
      </Root>
      <Divider light />
    </Wrapper>
  )
}
