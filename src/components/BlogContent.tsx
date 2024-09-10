'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";
import { supabase } from '@/lib/supabase'

interface BlogPost {
  id: number
  title: string
  description: string
  image_url: string
  date_created: string
  likes: number
  views: number
}

interface BlogContentProps {
  initialBlogPosts: BlogPost[]
}

export default function BlogContent({ initialBlogPosts }: BlogContentProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts)

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  async function fetchBlogPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date_created', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts:', error)
    } else {
      setBlogPosts(data || [])
    }
  }

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-8">
        My personal website and blog where I share my thoughts on various topics including tutorials, notes, and personal experiences. As a full-stack developer from Hong Kong, I started learning web development as a hobby in December 2020. I use Next.js for building websites, GitHub for code hosting, and Vercel for deployment. Explore my site to learn more about my journey and discover some of the web development resources that have inspired me.
      </p>
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Search articles"
          className="w-full p-2 pl-10 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IoSearchOutline className="text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src={post.image_url}
              alt={post.title}
              width={600}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.date_created).toLocaleDateString()}
              </p>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{post.likes} likes</span>
                <span>{post.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}