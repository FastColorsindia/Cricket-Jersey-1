import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { articles } from '../data/blogs';

const BlogListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 3;

    const totalArticles = articles.length;
    const totalPages = Math.ceil(totalArticles / articlesPerPage);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">Our Blog</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Latest insights and tips on cricket jersey design and care
                        </p>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {currentArticles.map((article) => (
                            <Link key={article.id} to={`/blog/${article.id}`} className="group">
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{article.date}</span>
                                            </div>
                                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-blue-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{article.excerpt}</p>
                                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                                            Read More <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination - Matching the user image */}
                    <div className="flex flex-col items-center gap-6 mt-12">
                        <div className="flex items-center gap-2">
                            {/* Previous Button */}
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${currentPage === 1
                                    ? 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-navy-dark hover:bg-gray-50'
                                    }`}
                            >
                                <ChevronLeft size={18} />
                                <span className="hidden sm:inline">Previous</span>
                            </button>

                            {/* Page Numbers */}
                            <div className="flex gap-2">
                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => handlePageChange(pageNumber)}
                                            className={`w-10 h-10 flex items-center justify-center rounded-lg border font-bold transition-all ${currentPage === pageNumber
                                                ? 'bg-navy-dark text-white border-navy-dark shadow-md scale-105'
                                                : 'bg-white text-gray-700 border-gray-200 hover:border-navy-dark hover:bg-gray-50'
                                                }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${currentPage === totalPages
                                    ? 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-navy-dark hover:bg-gray-50'
                                    }`}
                            >
                                <span className="hidden sm:inline">Next</span>
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* Summary Text */}
                        <div className="text-gray-500 text-sm font-medium">
                            Page {currentPage} of {totalPages} — {totalArticles} articles total
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default BlogListPage;
