import { Box, Grid, TextField, Typography, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { synonymsFetchData } from 'shared/api/home.api'

type Props = {}

const Root = styled(Box)(({ theme }) => ({
  minHeight: '100%',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .synonyms-container--wrapper': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    '& .synonyms-container--synonymsItem': {
      padding: '5px 15px',
      background: '#73AB84',
      borderRadius: 20,
      color: '#fff',
    },
  },
}))

export const SynonymsWrapper: FC<Props> = (props) => {
  const [synonymsText, setSynonymsText] = useState('')
  const [synonymsData, setSynonymsData] = useState<string[]>([])

  const handleSynonyms = () => {
    const url = `https://thesaurus-by-api-ninjas.p.rapidapi.com/v1/thesaurus?word=${synonymsText}`
    synonymsFetchData(url).then((res) => {
      setSynonymsData(res.synonyms)

      window.localStorage.setItem('synonyms_data', JSON.stringify(res.synonyms))
    })
  }

  useEffect(() => {
    const timeoutId = setTimeout(
      synonymsText.toLocaleLowerCase() !== '' ? handleSynonyms : () => console.log('Glory to Ukraine 💙💛'),
      1500
    )
    return () => clearTimeout(timeoutId)
  }, [synonymsText])

  useEffect(() => {
    const LSData = JSON.parse(
      window.localStorage.getItem('synonyms_data')! ? window.localStorage.getItem('synonyms_data')! : ''
    )
    setSynonymsData(LSData)
  }, [])

  return (
    <Root>
      <Grid container columnSpacing={4} padding={4}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Synonyms
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="synonyms-container--textfield"
            onChange={(e) => {
              setSynonymsText(e.target.value)
              window.localStorage.setItem('synonyms_text', e.target.value)
            }}
            value={synonymsText}
            type="text"
            placeholder={window.localStorage.getItem('synonyms_text') || 'Type some things'}
            fullWidth
          />
        </Grid>

        <Grid item xs={8}>
          <Box className={'synonyms-container--wrapper'} columnGap={2} rowGap={2}>
            {synonymsData.map((item: string) => (
              <Box key={item} className={'synonyms-container--synonymsItem'}>
                {item.split('_').join(' ')}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Root>
  )
}
