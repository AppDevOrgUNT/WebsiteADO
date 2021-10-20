import Header from '../../components/Header'
import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
    <Header/>
    <h1>
        Slug here, commented out for example
      </h1>
    </>
  )
}

export default Comment