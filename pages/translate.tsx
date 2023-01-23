import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { TranslateWrapper } from '@/screens/Translate'

import Meta from '@/utils/meta/Meta'

const TranslatePage: NextPage = () => (
  <Meta title="Translate" description="Welcome to the Bortnytskyi Alexey portfolio. It's Help Ukraine page">
    <Layout>
      <TranslateWrapper />
    </Layout>
  </Meta>
)

export default TranslatePage
