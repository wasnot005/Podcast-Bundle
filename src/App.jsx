import React, { useState, useEffect } from 'react';

// Helper component for consistent slide styling
const Slide = ({ children, title }) => (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-4xl mx-auto transition-all duration-500 ease-in-out transform">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
        <div className="text-gray-600 text-lg leading-relaxed">
            {children}
        </div>
    </div>
);

// Slide 1: Title Slide
const TitleSlide = () => (
    <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Premium Podcast Production Plans
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 italic">
            Elevate Your Content with Professional Editing Bundles for Creators & Brands
        </p>
    </div>
);

// Slide 2: Production Tiers
const TiersSlide = () => (
    <div>
        <p className="text-center mb-10 text-xl">We offer three distinct editing bundles designed to meet the needs of every creator, from those just starting out to established brands seeking a comprehensive content solution.</p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">Studio Edit</h3>
                <p>The essentials for a polished, professional sound and look.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-purple-600 mb-3">Content Pro</h3>
                <p>A complete package to maximize your content's reach and impact.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Brand Suite</h3>
                <p>The ultimate all-in-one solution for seamless brand integration.</p>
            </div>
        </div>
    </div>
);

// Slide 3: Comparison Table
const ComparisonSlide = () => {
    const plans = [
        { name: 'Studio Edit (Basic)', price: 'Rs. 15,300', features: ['Basic Edit', 'Preset-Based', '1 (Horizontal or Vertical)', '1', '1', '1 (YouTube or Instagram)', 'Standard', '-', '-', 'Exclusive Onboarding'] },
        { name: 'Content Pro (Standard)', price: 'Rs. 28,560', features: ['Advanced Edit', 'Advanced Color Grading', '2 (16:9 and 9:16)', '3', '2', '1', '4K & 1080p', '-', '3 Bonus Instagram Posts', 'Platform Optimization'] },
        { name: 'Brand Suite (Pro)', price: 'Rs. 45,900', features: ['Advanced Edit + Intro/Outro', 'Advanced Color Grading', '2', '5', '5', '2 (YouTube + Instagram)', '4K & 1080p', 'For all clips', '5 Bonus Instagram Carousels', 'Full Creative Direction'] }
    ];
    const featureLabels = ['Full Podcast Episode', 'Color Correction', 'Trailers', 'Value Clips', 'Feedback Rounds', 'Thumbnails', 'Export Quality', 'Captions', 'Social Media Content', 'Bonus'];

    return (
        <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Feature</th>
                                {plans.map(plan => (
                                    <th key={plan.name} scope="col" className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        {plan.name}
                                        <div className="font-normal text-gray-700 text-sm">{plan.price}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {featureLabels.map((label, index) => (
                                <tr key={label} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{label}</td>
                                    {plans.map(plan => (
                                        <td key={`${plan.name}-${label}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                                            {plan.features[index] === '-' ? <span className="text-gray-400">-</span> : plan.features[index]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Slide 4: AI Plan Advisor (New Gemini Feature)
const AIAdvisorSlide = () => {
    const [userInput, setUserInput] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const getAIRecommendation = async () => {
        if (!userInput.trim()) {
            setError('Please describe your podcast first.');
            return;
        }
        setIsLoading(true);
        setError('');
        setRecommendation('');

        const prompt = `
            You are an expert podcast production consultant. A potential client is considering one of our three production plans. Based on their needs described below, recommend the most suitable plan (Studio Edit, Content Pro, or Brand Suite) and explain in a friendly and concise way why it's the best fit for them.

            Here are the details of our plans with new discounted prices:
            - **Studio Edit (Basic) - Rs. 15,300:** Includes 1 Full Podcast Episode (Basic Edit), Preset-based Color Correction, 1 Trailer, 1 Feedback Round, 1 Value Clip, 1 Thumbnail. Best for those starting out who need a professional touch.
            - **Content Pro (Standard) - Rs. 28,560:** Includes 1 Podcast with Advanced Color Grading, 2 Trailers, 3 Value Clips, 2 Feedback Rounds, 4K/1080p Export, Thumbnail, and 3 Bonus Instagram Posts. Ideal for creators looking to grow their audience and maximize content repurposing.
            - **Brand Suite (Pro) - Rs. 45,900:** Includes Advanced CC + Intro/Outro Slate, 2 Trailers, 5 Value Clips, 5 Feedback Rounds, Captions for all clips, 2 Thumbnails, Covers for each trailer & reel, 5 Bonus Instagram Carousels, and Full Creative Direction. The ultimate package for established brands needing a comprehensive, hands-off solution.

            Here is the client's description of their podcast and needs:
            ---
            ${userInput}
            ---

            Please provide a clear recommendation and a brief justification. Start with "Based on your needs, I'd recommend the..."
        `;

        const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // API key provided via Vite environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
            
            if (text) {
                setRecommendation(text);
            } else {
                throw new Error("Couldn't get a recommendation. Please try again.");
            }

        } catch (e) {
            setError(e.message || 'An unexpected error occurred.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="text-center">
            <p className="mb-6 text-xl">Tell us about your podcast, and our AI advisor will suggest the perfect plan for you!</p>
            <textarea
                className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-purple-400 transition"
                rows="4"
                placeholder="e.g., 'I'm starting a weekly interview show about technology. I need high-quality video and a few clips for social media...'"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={isLoading}
            ></textarea>
            <button
                onClick={getAIRecommendation}
                disabled={isLoading}
                className="flex items-center justify-center w-full md:w-auto mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing...
                    </>
                ) : (
                    '✨ Get AI Recommendation'
                )}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {recommendation && (
                <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg text-left shadow-inner">
                     <h4 className="font-bold text-lg text-gray-800 mb-2">Our Recommendation:</h4>
                     <p className="text-gray-700 whitespace-pre-wrap">{recommendation}</p>
                </div>
            )}
        </div>
    );
};

// Slide 5: Special Offers
const OffersSlide = () => (
    <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-green-600 mb-4">First-Time Offer</h3>
            <p className="text-lg">Enjoy a <span className="font-extrabold text-2xl text-green-700">20% DISCOUNT</span> on your very first episode with us!</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-yellow-600 mb-4">Bundle & Save</h3>
            <p className="text-lg">Book 3 or more episodes and receive a flat <span className="font-extrabold text-2xl text-yellow-700">20% BUNDLE DISCOUNT</span> on your entire order.</p>
        </div>
    </div>
);

// Slide 6: Price Calculator
const PriceCalculatorSlide = () => {
    const planPrices = {
        studio: 15300,
        content: 28560,
        brand: 45900,
    };

    const [selectedPlans, setSelectedPlans] = useState({
        studio: false,
        content: false,
        brand: false,
    });
    const [numEpisodes, setNumEpisodes] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountType, setDiscountType] = useState('none');

    const handlePlanChange = (plan) => {
        setSelectedPlans(prev => ({ ...prev, [plan]: !prev[plan] }));
    };

    const handleEpisodeChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setNumEpisodes(value);
    };
    
    useEffect(() => {
        let basePrice = 0;
        if (selectedPlans.studio) basePrice += planPrices.studio;
        if (selectedPlans.content) basePrice += planPrices.content;
        if (selectedPlans.brand) basePrice += planPrices.brand;

        let subtotal = basePrice * numEpisodes;
        let finalPrice = subtotal;

        if (discountType === 'firstTime') {
            const discountAmount = basePrice * 0.20;
            finalPrice = subtotal - discountAmount;
        } else if (discountType === 'bundle' && numEpisodes >= 3) {
            finalPrice = subtotal * 0.80;
        }
        
        setTotalPrice(finalPrice);

    }, [selectedPlans, numEpisodes, discountType]);


    return (
        <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side: Controls */}
            <div>
                {/* Plan Selection */}
                <div className="mb-6">
                    <h4 className="font-bold text-lg text-gray-800 mb-3">1. Select Your Plan(s)</h4>
                    <div className="space-y-2">
                        {Object.keys(planPrices).map(plan => (
                             <label key={plan} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                                <input type="checkbox" className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" checked={selectedPlans[plan]} onChange={() => handlePlanChange(plan)} />
                                <span className="ml-3 text-gray-700 capitalize">{plan}</span>
                                <span className="ml-auto font-mono text-gray-600">Rs. {planPrices[plan].toLocaleString()}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Episode Count */}
                <div className="mb-6">
                    <h4 className="font-bold text-lg text-gray-800 mb-3">2. Number of Episodes</h4>
                     <input type="number" min="1" value={numEpisodes} onChange={handleEpisodeChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 transition" />
                </div>
                
                {/* Discount Selection */}
                <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-3">3. Apply Discount</h4>
                    <div className="space-y-2">
                        <label className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                            <input type="radio" name="discount" value="none" checked={discountType === 'none'} onChange={(e) => setDiscountType(e.target.value)} className="h-5 w-5 text-purple-600 border-gray-300 focus:ring-purple-500" />
                            <span className="ml-3 text-gray-700">No Discount</span>
                        </label>
                        <label className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                            <input type="radio" name="discount" value="firstTime" checked={discountType === 'firstTime'} onChange={(e) => setDiscountType(e.target.value)} className="h-5 w-5 text-purple-600 border-gray-300 focus:ring-purple-500" />
                            <span className="ml-3 text-gray-700">First-Time Offer (20% off 1st ep.)</span>
                        </label>
                         <label className={`flex items-center p-3 rounded-lg transition cursor-pointer ${numEpisodes < 3 ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'bg-gray-50 hover:bg-gray-100'}`}>
                            <input type="radio" name="discount" value="bundle" disabled={numEpisodes < 3} checked={discountType === 'bundle'} onChange={(e) => setDiscountType(e.target.value)} className="h-5 w-5 text-purple-600 border-gray-300 focus:ring-purple-500" />
                            <span className="ml-3 text-gray-700">Bundle Discount (20% off 3+ eps.)</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Right side: Total */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl text-center flex flex-col justify-center h-full">
                <h3 className="text-2xl font-semibold opacity-80 mb-2">Estimated Total</h3>
                <p className="text-5xl font-extrabold tracking-tight">
                    Rs. {totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <p className="text-sm opacity-70 mt-4">This is an estimate. Final price may vary based on specific requirements.</p>
            </div>
        </div>
    );
};

// Slide 7: Let's Get Started
const ContactSlide = () => (
    <div className="text-center">
        <p className="mb-8 text-xl">To begin crafting your perfect podcast, we'll need a few details:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left list-none p-0 mx-auto max-w-3xl">
            {['Number of Cameras Used', 'Audio Type (Multitrack or Streamed)', 'Sync Method (Clap or Timecode)', 'Visual Style & References', 'Branding Assets (Logos, etc.)', 'Intro & Outro Music', 'Caption Requirements', 'Desired Delivery Timeline'].map(item => (
                <li key={item} className="bg-gray-100 p-4 rounded-lg flex items-center">
                    <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);


export default function App() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 7; 

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide(prev => (prev < totalSlides ? prev + 1 : 1));
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide(prev => (prev > 1 ? prev - 1 : totalSlides));
    };

    // Render the current slide based on the state
    const renderSlide = () => {
        switch (currentSlide) {
            case 1: return <Slide title=""><TitleSlide /></Slide>;
            case 2: return <Slide title="Our Production Tiers"><TiersSlide /></Slide>;
            case 3: return <Slide title="Plan Comparison"><ComparisonSlide /></Slide>;
            case 4: return <Slide title="✨ AI Plan Advisor"><AIAdvisorSlide /></Slide>; 
            case 5: return <Slide title="Unlock Exclusive Savings!"><OffersSlide /></Slide>;
            case 6: return <Slide title="💰 Price Calculator"><PriceCalculatorSlide /></Slide>; 
            case 7: return <Slide title="Let's Get Started!"><ContactSlide /></Slide>;
            default: return <Slide title=""><TitleSlide /></Slide>;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
            {/* Background decorative shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            {/* Main content area */}
            <div className="relative z-10 w-full">
                {renderSlide()}
            </div>

            {/* Navigation controls */}
            <div className="relative z-10 flex justify-between items-center w-full max-w-4xl mt-8">
                <button 
                    onClick={prevSlide}
                    className="flex items-center bg-white text-gray-700 px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    Previous
                </button>
                <div className="text-gray-600">
                    Slide {currentSlide} of {totalSlides}
                </div>
                <button 
                    onClick={nextSlide}
                    className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    Next
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
             <style>{`
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: -2s;
                }
                .animation-delay-4000 {
                    animation-delay: -4s;
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
            `}</style>
        </div>
    );
}
