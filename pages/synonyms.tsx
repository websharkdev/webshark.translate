import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { SynonymsWrapper } from '@/screens/Synonyms'

import Meta from '@/utils/meta/Meta'

const SynonymsPage: NextPage = () => (
  <Meta title="Synonyms" description="Welcome to the Bortnytskyi Alexey portfolio. It's Help Ukraine page">
    <Layout>
      <SynonymsWrapper />
    </Layout>
  </Meta>
)

export default SynonymsPage
