import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import ServiceBox from '@/components/ServiceBox'
import { Fade } from 'react-awesome-reveal'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="wrapper">
        <section className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
            <div className="pt-6">
              <Fade triggerOnce cascade direction="up">
                <p className="text-xl font-bold">Your Marketing Coach</p>
                <h1 className="font-serif pb-6 pt-2 text-3xl leading-snug tracking- text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-snug md:text-5xl md:leading-none">
                  Your backend sales could be{' '}
                  <span className="text-transparent bg-clip-text gradLight dark:gradDark">
                    1,000 times
                  </span>{' '}
                  more profitable than your initial sale.
                  <br />
                  <br />
                  Stop leaving money on the table with these digital marketing{' '}
                  <strong className="underline underline-offset-4">power plays</strong>.
                </h1>
              </Fade>
            </div>
          </div>
          <div className="prose flex flex-col items-center my-6 md:flex-row gap-x-12 xl:mb-12">
            <Fade triggerOnce direction="up" delay={1000}>
              <ul className="text-lg prose text-gray-600 dark:text-gray-400 mb-8">
                <li className="text-xl">
                  Are you driving traffic to your offers on a{' '}
                  <strong className="underline underline-offset-4">daily basis</strong>?
                </li>
              </ul>
              <p className="text-lg prose text-gray-600 dark:text-gray-400 mb-8"></p>
            </Fade>
          </div>
        </section>
        <section className="py-40 px-8 full-bleed bg-gray-200 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto grid grid-cols-1">
            <p className="text-xl font-bold">How We Help</p>
            <h2 className="font-serif text-4xl leading-snug tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-snug md:text-5xl md:leading-snug max-w-full md:max-w-6xl my-12">
              We help you build recurring systems to grow your customer base and regularly marketing
              to those customers for maximum profits.
            </h2>
            <Link
              className="gradLight dark:gradDark text-white p-4 rounded-md hover:opacity-80 w-44 font-bold text-lg text-center"
              href="/"
            >
              Learn More
            </Link>
            <Link
              className="gradLight dark:gradDark w-60 h-60 text-white p-4 rounded-md hover:opacity-80 w-44 font-bold text-lg text-center"
              href="/"
            >
              &nbsp;
            </Link>
          </div>
        </section>
        <h2 className="mt-16 flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-yellow-600 dark:text-yellow-500"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
