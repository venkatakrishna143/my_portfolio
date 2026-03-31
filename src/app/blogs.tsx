import React, { useMemo, useState } from 'react'
import Link from 'next/link'

'use client'


type Post = {
    id: string
    title: string
    date: string
    excerpt: string
    tags: string[]
    slug: string
}

const POSTS: Post[] = [
    {
        id: '1',
        title: 'Getting started with Next.js 13',
        date: '2024-05-01',
        excerpt: 'Intro to the app router, layouts, and server components in Next.js 13.',
        tags: ['nextjs', 'react', 'app-router'],
        slug: 'getting-started-nextjs-13',
    },
    {
        id: '2',
        title: 'Tailwind CSS: Utility-first styling',
        date: '2024-04-10',
        excerpt: 'How to build responsive UIs quickly with Tailwind CSS.',
        tags: ['tailwind', 'css', 'design'],
        slug: 'tailwind-utility-first',
    },
    {
        id: '3',
        title: 'TypeScript tips for React',
        date: '2024-03-20',
        excerpt: 'Practical TypeScript patterns to make your React code safer and clearer.',
        tags: ['typescript', 'react'],
        slug: 'typescript-tips-react',
    },
    {
        id: '4',
        title: 'Deploying Next.js apps',
        date: '2024-02-15',
        excerpt: 'A simple guide to deploy Next.js apps to Vercel and other providers.',
        tags: ['deployment', 'vercel'],
        slug: 'deploying-nextjs-apps',
    },
    {
        id: '5',
        title: 'Optimizing images in Next.js',
        date: '2024-01-08',
        excerpt: 'Image optimization strategies using the Next/Image component and modern formats.',
        tags: ['images', 'performance'],
        slug: 'optimizing-images-nextjs',
    },
]

export default function Blogs(): JSX.Element {
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return POSTS
        return POSTS.filter(
            (p) =>
                p.title.toLowerCase().includes(q) ||
                p.excerpt.toLowerCase().includes(q) ||
                p.tags.join(' ').toLowerCase().includes(q)
        )
    }, [query])

    return (
        <main className="min-h-screen bg-white text-slate-800 p-6 sm:p-12">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-semibold mb-2">Blog</h1>
                    <p className="text-sm text-slate-600">Latest posts, guides and updates.</p>
                </header>

                <div className="mb-6">
                    <input
                        aria-label="Search posts"
                        placeholder="Search posts by title, excerpt or tag..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <section className="grid gap-4 sm:grid-cols-2">
                    {filtered.map((post) => (
                        <article
                            key={post.id}
                            className="border border-slate-100 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-lg font-medium">
                                    <Link href={`/blogs/${post.slug}`} className="text-slate-900 hover:underline">
                                        {post.title}
                                    </Link>
                                </h2>
                                <time className="text-xs text-slate-500">{post.date}</time>
                            </div>
                            <p className="text-sm text-slate-600 mb-3">{post.excerpt}</p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </section>

                {filtered.length === 0 && (
                    <p className="mt-8 text-center text-slate-500">No posts match your search.</p>
                )}
            </div>
        </main>
    )
}