import { Link as MuiLink } from '@mui/material'
import { motion } from 'framer-motion'
import { FC } from 'react'

const Logo: FC = () => (
  <MuiLink
    href="/"
    className="logo unstyled"
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <motion.svg width="72" height="72" xmlns="http://www.w3.org/2000/svg" className="item">
      <motion.path
        initial={{
          opacity: 0,
          pathLength: 0,
          fill: 'rgba(119, 101, 227, 0)',
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          fill: 'rgba(119, 101, 227, 1)',
          stroke: 'rgba(119, 101, 227, 1)',
          strokeWidth: 1,
        }}
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
        d="M28.5 18.5L62.5 0V47L28.5 65.5V18.5Z"
      />
      <motion.path
        initial={{
          opacity: 0,
          pathLength: 0,
          fill: 'rgba(256, 256, 256, 0)',
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          fill: 'rgba(256, 256, 256, 1)',
          stroke: 'none',
        }}
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
        d="M38.84 33.88V35.448H51.272V33.88H38.84ZM37.528 26.936V28.552H45.192V26.936H37.528ZM46.6 25.928V27.272H50.824V25.928H46.6ZM46.808 27.96V29.192H50.968V27.96H46.808ZM46.728 29.896V31.144H50.888V29.896H46.728ZM39.496 36.248V37.768H50.488V36.248H39.496ZM37.832 38.6V40.168H52.136V38.6H37.832ZM43.992 34.648V39.608H45.928V34.648H43.992ZM40.488 25.432V27.624H42.28V25.432H40.488ZM38.664 27.864V30.616C38.664 32.28 39.128 32.872 40.904 32.872C41.224 32.872 42.696 32.872 43.08 32.872C43.608 32.872 44.2 32.856 44.52 32.744C44.44 32.328 44.392 31.608 44.344 31.16C44.04 31.224 43.432 31.272 43.032 31.272C42.664 31.272 41.256 31.272 40.92 31.272C40.52 31.272 40.424 31.096 40.424 30.648V27.864H38.664ZM50.28 25.928V26.216C50.168 30.056 50.024 31.432 49.784 31.752C49.672 31.928 49.528 31.976 49.336 31.96C49.096 31.96 48.664 31.96 48.152 31.896C48.36 32.296 48.536 32.92 48.568 33.336C49.224 33.368 49.848 33.368 50.232 33.304C50.68 33.24 51.016 33.096 51.32 32.712C51.704 32.2 51.864 30.68 51.992 26.6C52.008 26.392 52.008 25.928 52.008 25.928H50.28ZM46.088 25.928C46.024 28.92 45.928 31.08 44.216 32.36C44.6 32.648 45.08 33.24 45.288 33.64C47.416 32.088 47.72 29.464 47.8 25.928H46.088Z"
      />
      <motion.path
        initial={{
          opacity: 0,
          pathLength: 0,
          fill: 'rgba(59, 96, 228, 0)',
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          fill: 'rgba(59, 96, 228, 1)',
          stroke: '#3b60e4',
          strokeWidth: 1,
        }}
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
        d="M0 18.5L34 0V47L0 65.5V18.5Z"
      />
      <motion.path
        initial={{
          opacity: 0,
          pathLength: 0,
          fill: 'rgba(256, 256, 256, 0)',
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          fill: 'rgba(256, 256, 256, 1)',
          stroke: 'none',
        }}
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
        d="M25.9513 28.3L22.2873 39.5H19.5033L17.0393 31.916L14.4953 39.5H11.7273L8.04731 28.3H10.7353L13.2633 36.172L15.9033 28.3H18.3033L20.8633 36.236L23.4713 28.3H25.9513Z"
      />
    </motion.svg>
  </MuiLink>
)

export default Logo
