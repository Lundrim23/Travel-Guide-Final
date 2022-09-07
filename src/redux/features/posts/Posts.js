import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from './postsSlice'

const Posts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts({}))
    }, [dispatch])

  return (
    <div>
      <h1>Posts...</h1>
    </div>
  )
}

export default Posts
