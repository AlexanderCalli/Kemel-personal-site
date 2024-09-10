import { supabase } from '@/lib/supabase'
import BlogContent from '@/components/BlogContent'

export const revalidate = 3600 // revalidate every hour

async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date_created', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data
}

export default async function BlogPage() {
  const initialBlogPosts = await getBlogPosts()

  return (
    <div className="min-h-screen">
      <BlogContent initialBlogPosts={initialBlogPosts} />
    </div>
  )
}