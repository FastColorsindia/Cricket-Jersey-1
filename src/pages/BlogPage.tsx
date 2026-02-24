import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowRight, Share2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';

import { articles } from '../data/blogs';

const BlogPage = () => {
    const { id } = useParams();
    const currentIndex = articles.findIndex(a => a.id === id);
    const article = articles[currentIndex];

    const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
    const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link to="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <main className="pt-32 pb-20">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-700 line-clamp-1">{article.title}</span>
                    </div>

                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        {/* Header Image */}
                        <div className="relative h-[400px]">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-8 text-white">
                                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                        {article.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-6 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {article.date}
                                        </div>
                                        <div className="px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold">
                                            {article.readTime}
                                        </div>
                                        <div>By {article.author}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                                {article.content}
                            </div>

                            {/* Share & Actions */}
                            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700">
                                        <Share2 size={18} />
                                        <span>Share</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700">
                                        <MessageCircle size={18} />
                                        <span>Comment</span>
                                    </button>
                                </div>

                                <div className="flex gap-2">
                                    <span className="text-sm text-gray-400 italic">Interested in custom designs?</span>
                                    <a
                                        href="https://wa.me/917812865788?text=Hi%2C%20I'm%20interested%20in%20custom%20jersey%20designs."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-bold text-green-600 hover:text-green-700"
                                    >
                                        Contact Us on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Prev / Next Article Navigation */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prevArticle ? (
                            <Link
                                to={`/blog/${prevArticle.id}`}
                                className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
                            >
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                                    <ChevronLeft size={22} />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-1">Previous Article</p>
                                    <p className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">{prevArticle.title}</p>
                                </div>
                            </Link>
                        ) : <div />}

                        {nextArticle ? (
                            <Link
                                to={`/blog/${nextArticle.id}`}
                                className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group md:flex-row-reverse md:text-right"
                            >
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                                    <ChevronRight size={22} />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-1">Next Article</p>
                                    <p className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">{nextArticle.title}</p>
                                </div>
                            </Link>
                        ) : <div />}
                    </div>

                    {/* Related Articles */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-8 text-navy-dark">More from our Blog</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {articles.filter(a => a.id !== id).slice(0, 2).map((a) => (
                                <Link key={a.id} to={`/blog/${a.id}`} className="group">
                                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                                        <div className="h-40 overflow-hidden">
                                            <img
                                                src={a.image}
                                                alt={a.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg text-navy-dark group-hover:text-blue-600 transition-colors line-clamp-1">
                                                {a.title}
                                            </h3>
                                            <div className="flex items-center gap-3 mt-2">
                                                <p className="text-sm text-gray-500">{a.date}</p>
                                                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">{a.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                            >
                                View All Articles <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default BlogPage;
