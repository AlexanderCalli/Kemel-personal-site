'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'
import Image from 'next/image'
import { PiPushPinFill } from "react-icons/pi";

interface GuestbookEntry {
  id: number
  message: string
  created_at: string
  user_name: string
  user_avatar: string
}

export default function Guestbook() {
  const [user, setUser] = useState<User | null>(null)
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchEntries()
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  async function fetchEntries() {
    setIsLoading(true)
    setError(null)
    const { data, error } = await supabase
      .from('guestbook')
      .select('id, message, created_at, user_name, user_avatar')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching guestbook entries:', error)
      setError('Failed to load guestbook entries. Please try again later.')
    } else {
      setEntries(data as GuestbookEntry[])
    }
    setIsLoading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return

    setIsLoading(true)
    setError(null)
    const { error } = await supabase
      .from('guestbook')
      .insert({
        user_id: user.id,
        message: newMessage,
        user_name: user.user_metadata.full_name || user.email,
        user_avatar: user.user_metadata.avatar_url
      })

    if (error) {
      console.error('Error inserting guestbook entry:', error)
      setError('Failed to submit your message. Please try again.')
    } else {
      setNewMessage('')
      fetchEntries()
    }
    setIsLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).replace(',', '')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Guestbook</h1>
      
      {/* Pinned Message */}
      <div className="mb-8 p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <PiPushPinFill className="text-gray-600 dark:text-gray-300" />
          <span className="font-semibold text-gray-700 dark:text-gray-200">Pinned</span>
        </div>
        <p className="text-gray-800 dark:text-gray-200">
          Hey there! Thanks for visiting my website. If you have a moment,
          I&apos;d love to hear your thoughts on my work. Please log in with your
          account to leave a comment. Thanks!
        </p>
      </div>

      {user && (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Image
                src={user.user_metadata.avatar_url || '/placeholder-avatar.png'}
                alt={user.user_metadata.full_name || user.email || 'User'}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="flex-grow">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Leave a message"
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md mb-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                rows={3}
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Logout
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50"
                  disabled={isLoading || !newMessage.trim()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.id} className="flex items-start space-x-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex-shrink-0">
                <Image
                  src={entry.user_avatar || '/placeholder-avatar.png'}
                  alt={entry.user_name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{entry.user_name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(entry.created_at)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{entry.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}