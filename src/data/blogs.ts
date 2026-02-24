
export interface Article {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    readTime: string;
    author: string;
    content: string;
}

export const articles: Article[] = [
    {
        id: 'cricket-jersey-design-tips',
        title: 'Cricket Jersey Design Tips for Teams',
        date: 'Feb 1, 2026',
        excerpt: 'Essential tips for designing professional and eye-catching cricket jerseys for your team.',
        image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '5 min read',
        author: 'Design Team',
        content: `
Designing a cricket jersey is about more than just looks – it's about team identity, comfort, and professional appearance. Here are some essential tips for creating the perfect design:

1. **Choose the Right Fabric**: Performance is key. Look for moisture-wicking materials that keep players cool during intense matches.
2. **Color Psychology**: Choose colors that represent your team's spirit. Bright colors like orange and yellow signify energy, while blues and greens are often seen as more professional and calm.
3. **Logo Placement**: Ensure your team logo is prominently displayed on the chest. Sponsor logos should be clearly visible but not overshadow the team identity.
4. **Modern Patterns**: Sublimation printing allows for complex gradients and patterns. Don't be afraid to experiment with geometric designs or subtle textures.
5. **Typography**: Use bold, readable fonts for player names and numbers. Visibility from a distance is crucial.
    `
    },
    {
        id: 'choose-perfect-cricket-jersey-colors',
        title: 'How to Choose Perfect Cricket Jersey Colors',
        date: 'Jan 28, 2026',
        excerpt: 'A guide to selecting colors and designs that represent your cricket team brand.',
        image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '4 min read',
        author: 'Color Expert',
        content: `
Color selection is one of the most important aspects of your team's branding. Your jersey colors will define how your team is perceived on and off the field.

- **Primary Colors**: This should be your main brand color. It usually covers about 60-70% of the jersey.
- **Secondary Colors**: Used for accents, sleeves, and side panels. These should complement your primary color.
- **Contrast**: Ensure high contrast between the base color and the text (names/numbers).
- **Tournament Rules**: Always check if there are specific color restrictions in the tournaments you play.
    `
    },
    {
        id: 'maintaining-your-cricket-jerseys',
        title: 'Maintaining Your Cricket Jerseys',
        date: 'Jan 20, 2026',
        excerpt: 'Best practices for maintaining and caring for premium cricket jerseys.',
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '3 min read',
        author: 'Maintenance Pro',
        content: `
Premium cricket jerseys are an investment. Proper care ensures they last many seasons and continue to look vibrant.

1. **Washing**: Always wash inside out in cold water. Avoid harsh detergents or bleach.
2. **Drying**: Air dry only. High heat from dryers can damage the sublimation fibers and cause logos to peel if they are heat-pressed.
3. **Storage**: Fold neatly or hang in a cool, dry place. Avoid direct sunlight for long periods as it can fade even high-quality prints over years.
4. **Stain Removal**: Treat grass or dirt stains immediately with mild stain removers before washing.
    `
    },
    {
        id: 'sublimation-vs-screen-printing',
        title: 'Sublimation vs Screen Printing: Which is Better?',
        date: 'Jan 15, 2026',
        excerpt: 'Understanding the differences between sublimation and screen printing for sports apparel.',
        image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '6 min read',
        author: 'Tech Specialist',
        content: `
When it comes to custom sports apparel, two main printing methods dominate: Sublimation and Screen Printing.

Sublimation uses heat to transfer dye into the fabric, making the design part of the material. It's ideal for complex designs and high-performance wear.

Screen printing involves pressing ink through a stencil onto the surface. It's great for simple designs and large quantities on cotton-based fabrics.
    `
    },
    {
        id: 'top-cricket-jersey-trends-2026',
        title: 'Top Cricket Jersey Trends in 2026',
        date: 'Jan 10, 2026',
        excerpt: 'Discover the latest styles and innovations in cricket jersey designs this year.',
        image: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '5 min read',
        author: 'Trend Analyst',
        content: `
2026 is seeing a shift towards minimalist designs with bold accent colors. Eco-friendly recycled polyester is becoming the standard for professional teams.
    `
    },
    {
        id: 'customizing-jerseys-for-local-clubs',
        title: 'Customizing Jerseys for Local Clubs',
        date: 'Jan 5, 2026',
        excerpt: 'How local cricket clubs can get professional-grade jerseys on a budget.',
        image: 'https://images.pexels.com/photos/163452/basketball-game-ball-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '4 min read',
        author: 'Club Manager',
        content: `
Local clubs don't need to break the bank to look professional. Bulk ordering and choosing semi-custom templates can save costs while maintaining quality.
    `
    },
    {
        id: 'breathable-fabrics-for-sports',
        title: 'The Science of Breathable Fabrics',
        date: 'Dec 28, 2025',
        excerpt: 'Why fabric choice matters for player performance and comfort on the field.',
        image: 'https://images.pexels.com/photos/5246605/pexels-photo-5246605.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '7 min read',
        author: 'Material Scientist',
        content: `
Breathability is achieved through micro-pores in the fabric that allow moisture to escape while keeping the player dry.
    `
    },
    {
        id: 'importance-of-team-unity',
        title: 'Importance of Team Unity and Identity',
        date: 'Dec 20, 2025',
        excerpt: 'How a shared team identity through uniform improves performance.',
        image: 'https://images.pexels.com/photos/4672718/pexels-photo-4672718.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '5 min read',
        author: 'Psychology Coach',
        content: `
Wearing the same colors fosters a sense of belonging and can actually improve on-field communication and trust among players.
    `
    }
];
