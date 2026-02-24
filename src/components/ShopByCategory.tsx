import { useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: 1,
            title: 'TEAM JERSEY',
            image: '/RCB.png',
        },
        {
            id: 2,
            title: 'CUSTOMIZED',
            image: '/2.png',
        },
        {
            id: 3,
            title: 'PREMIUM JERSEY',
            image: '/3.jpg',
        },
        {
            id: 7,
            title: 'OFFER JERSEY',
            image: '/1.png',
        },
    ];

    return (
        <section id="shop-by-category" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-light text-navy-dark">
                        SHOP <span className="font-bold">BY CATEGORY</span>
                    </h2>
                    <button
                        onClick={() => navigate('/gallery')}
                        className="px-6 py-1.5 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
                    >
                        View All
                    </button>
                </div>

                {/* Categories Grid/Flex */}
                <div className="flex flex-wrap justify-center sm:justify-between gap-8 md:gap-4 overflow-x-auto pb-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group flex flex-col items-center cursor-pointer min-w-[100px]"
                            onClick={() => navigate('/gallery')}
                        >
                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-transparent group-hover:border-[#BD22B8] transition-all duration-300">
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#E0C0DF]"> {/* Light purple border emulator */}
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-4 text-xs sm:text-sm font-medium text-gray-700 text-center uppercase tracking-wide max-w-[100px]">
                                {category.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ShopByCategory;
