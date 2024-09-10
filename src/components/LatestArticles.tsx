'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

export default function LatestArticles() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    async function fetchLatestPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date_created', { ascending: false })
        .limit(2)

      if (error) {
        console.error('Error fetching latest posts:', error)
      } else {
        setLatestPosts(data || [])
      }
    }

    fetchLatestPosts()
  }, [])

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Latest Articles</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
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
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
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
      <div className="text-center mt-12">
        <Link href="/blog" className="inline-block px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
          See all articles
        </Link>
      </div>
    </section>
  )
}