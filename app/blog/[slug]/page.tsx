import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LeadMagnet from "@/components/LeadMagnet";
import { blogPosts } from "@/content/blog";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold text-navy-900 mt-10 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-navy-900 mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      elements.push(
        <li key={i} className="text-gray-600 leading-relaxed ml-4 mb-1">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .replace("- ", "")
                .replace(/\*\*(.*?)\*\*/g, "<strong class='text-navy-900'>$1</strong>"),
            }}
          />
        </li>
      );
    } else if (line.startsWith("**")) {
      elements.push(
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          <span
            dangerouslySetInnerHTML={{
              __html: line.replace(
                /\*\*(.*?)\*\*/g,
                "<strong class='text-navy-900'>$1</strong>"
              ),
            }}
          />
        </p>
      );
    } else if (line.trim() === "") {
      // skip
    } else {
      elements.push(
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong class='text-navy-900'>$1</strong>"
                )
                .replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  "<a href='$2' class='text-coral hover:text-coral-dark underline'>$1</a>"
                ),
            }}
          />
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge>{post.category}</Badge>
              <span className="text-sm text-gray-400">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-sm">By {post.author}</span>
              <span>|</span>
              <span className="text-sm">
                {new Date(post.date).toLocaleDateString("en-CA", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container>
          <article className="max-w-3xl mx-auto">
            {renderMarkdown(post.content)}
          </article>

          {/* Contextual CTA */}
          {post.cta && (
            <div className="max-w-3xl mx-auto mt-12">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {post.cta.text}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.cta.description}
                </p>
                <Button href={post.cta.href} variant="primary" size="sm">
                  {post.cta.buttonText}
                </Button>
              </div>
            </div>
          )}

          {/* Lead Magnet */}
          <div className="max-w-3xl mx-auto mt-8">
            <LeadMagnet variant="banner" />
          </div>

          {/* Share */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-navy-900 mb-3">
              Share this article
            </p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://rigmarketing.ca/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Twitter / X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://rigmarketing.ca/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://rigmarketing.ca/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-3xl mx-auto mt-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <Badge variant="coral" className="mb-3">
                      {rp.category}
                    </Badge>
                    <h3 className="font-bold text-navy-900 group-hover:text-coral transition-colors mb-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-gray-600">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
