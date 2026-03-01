"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { blogPosts } from "@/content/blog";

const categories = [
  "All",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Marketing Insights & Tips
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Actionable advice and industry insights to help you grow your
              business smarter.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-navy-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.1}>
                <Card href={`/blog/${post.slug}`} className="h-full flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="coral">{post.category}</Badge>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        By {post.author}
                      </span>
                      <span className="text-xs text-gray-300">|</span>
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString("en-CA", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
