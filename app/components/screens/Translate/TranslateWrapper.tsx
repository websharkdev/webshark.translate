import { Box, Button, Grid, TextField, styled, useMediaQuery } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { translateFetchData } from 'shared/api/home.api'
import { useWidth } from 'shared/hooks'

import { user_data } from '../Home/data'

type Props = {}

type TranslateLanguagesProps = {
  id: number
  name: string
  code: string
}

const Root = styled(Grid)(({ theme }) => ({}))

export const TranslateWrapper: FC<Props> = (props) => {
  const [originalText, setOriginalText] = useState('')
  const [translatedText, setTranslatedText] = useState(
    window.localStorage.getItem('translated_text') ? window.localStorage.getItem('translated_text') : ''
  )
  const [language, setLanguage] = useState({
    input: 'uk',
    output: 'es',
  })

  const handleTranslate = async () => {
    translateFetchData(
      `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=${language.input}%7C${language.output}&q=${originalText}&mt=1&onlyprivate=0&de=a%40b.c`
    ).then((response) => {
      if (response) {
        const text = response.responseData.translatedText
        setTranslatedText(text)
        window.localStorage.setItem('translated_text', text)
      } else {
        console.log(':(')
      }
    })
  }

  useEffect(() => {
    const timeoutId = setTimeout(
      originalText.trim().length > 1 ? handleTranslate : () => console.log('Glory to Ukraine 💙💛'),
      1500
    )
    return () => clearTimeout(timeoutId)
  }, [originalText, language])

  const handleSwitchLanguages = () => {
    const { output, input } = language
    setLanguage({ input: output, output: input })
    setOriginalText(translatedText!)
    setTranslatedText(originalText)
  }
  const currentWidth = useWidth()
  const large = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('lg')
  )

  const langItem = (item: TranslateLanguagesProps) => {
    switch (currentWidth) {
      case 'xs':
        return item.code
        break
      case 'sm':
        return item.code
        break
      case 'md':
        return item.name.slice(0, 3)
        break
      case 'lg':
        return item.name.slice(0, 3)
        break

      default:
        return item.name
        break
    }
  }

  return (
    <Root>
      <Grid container columnSpacing={4} padding={4} rowSpacing={6}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            {user_data.translate_languages.map((item: TranslateLanguagesProps) => (
              <Button
                key={item.id}
                size={!large ? 'large' : 'medium'}
                variant={language.input === item.code ? 'text' : 'contained'}
                onClick={() => setLanguage({ ...language, input: item.code })}
                className={`translate-box--languageBTN ${language.input === item.code ? 'active' : ''}`}
              >
                {langItem(item)}
              </Button>
            ))}
          </Box>

          <Box>
            <Button
              onClick={handleSwitchLanguages}
              size={!large ? 'large' : 'medium'}
              className={'translate-box--languageBTN unStyled'}
            >
              <img src="https://svgur.com/i/nCS.svg" alt="switch icon" />
            </Button>
          </Box>

          <Box>
            {user_data.translate_languages.map((item: TranslateLanguagesProps) => (
              <Button
                key={item.id}
                size={!large ? 'large' : 'medium'}
                variant={language.output === item.code ? 'text' : 'contained'}
                onClick={() => setLanguage({ ...language, output: item.code })}
                className={`translate-box--languageBTN ${language.output === item.code ? 'active' : ''}`}
              >
                {langItem(item)}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="translate-box--textfield"
            label=""
            multiline
            minRows={6}
            fullWidth
            maxRows={12}
            placeholder={window.localStorage.getItem('original_text') || 'Input text to translate'}
            helperText={`${originalText.length}/5000`}
            onChange={(e) => {
              setOriginalText(e.target.value)
              window.localStorage.setItem('original_text', e.target.value)
            }}
            value={originalText}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="translate-box--textfield"
            label=""
            multiline
            minRows={6}
            fullWidth
            maxRows={12}
            placeholder="Output text to translate"
            helperText={`${translatedText?.length}/5000`}
            value={translatedText}
          />
        </Grid>
      </Grid>
    </Root>
  )
}
