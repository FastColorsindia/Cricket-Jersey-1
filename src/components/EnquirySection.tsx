import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const EnquirySection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill in all fields before sending.');
            return;
        }

        const subject = encodeURIComponent(`Enquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        // Use window.open to avoid navigating away from the React app
        const mailtoLink = `mailto:fastcolorsfashion@gmail.com?subject=${subject}&body=${body}`;
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.click();

        setSent(true);

        // Reset form after a delay
        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setSent(false);
        }, 5000);
    };

    return (
        <section id="enquiry" className="py-16 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us an Enquiry</h2>
                    <p className="text-gray-500">Fill in the form and we'll get back to you shortly at <span className="font-semibold text-blue-700">fastcolorsfashion@gmail.com</span></p>
                </div>

                {sent ? (
                    <div className="flex flex-col items-center justify-center py-16 gap-4 text-green-600">
                        <CheckCircle size={60} strokeWidth={1.5} />
                        <p className="text-xl font-semibold">Your email client has opened!</p>
                        <p className="text-gray-500 text-sm text-center">Please send the email that has been pre-filled in your mail app.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="enq-name">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="enq-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Rahul Kumar"
                                required
                                className="block w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="enq-email">
                                Your Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="enq-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="e.g. rahul@example.com"
                                required
                                className="block w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="enq-message">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="enq-message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                placeholder="Tell us about your jersey requirements, team size, design preferences..."
                                required
                                className="block w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
                        >
                            <Send size={18} />
                            Send Enquiry
                        </button>

                        <p className="text-xs text-gray-400 text-center">
                            Clicking "Send Enquiry" will open your email app pre-filled and addressed to us.
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EnquirySection;
