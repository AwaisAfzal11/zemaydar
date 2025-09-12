import React from 'react';
import { Briefcase, TrendingUp, Repeat, UserCheck } from 'lucide-react';

const strategies = [
    { icon: <Briefcase size={32}/>, title: 'Buyback Payment', description: 'The company can repurchase the property after two years.' },
    { icon: <UserCheck size={32}/>, title: 'Upcoming Participation', description: 'Opportunity to join future housing projects.' },
    { icon: <TrendingUp size={32}/>, title: 'High Returns', description: 'Potential for profit through bulk land sales.' },
    { icon: <Repeat size={32}/>, title: 'Transferring', description: 'The certificate of ownership can be transferred.' },
];

const ExitStrategy = () => {
    return (
        // 1. Using a clean white background
        <div className="py-24 bg-white">
            <div className="container mx-auto px-6">
                
                {/* 2. Consistent Typography and Branding */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black">
                        Your Exit Strategy<span className="text-[#BD872E]">.</span>
                    </h2>
                    <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                        We provide clear and flexible options for your investment journey.
                    </p>
                </div>

                {/* 3. Grid for the redesigned strategy cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {strategies.map((strategy, index) => (
                        
                        // 4. Redesigned Card with a clean, professional look and subtle hover effect
                        <div 
                            key={index} 
                            className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-[#BD872E]"
                        >
                            {/* 5. Emphasized Icon in a styled, thematic container */}
                            <div className="mx-auto mb-6 w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                                <div className="text-[#BD872E]">
                                    {strategy.icon}
                                </div>
                            </div>
                            
                            {/* 6. Clear and readable typography for title and description */}
                            <h3 className="text-xl font-bold text-black mb-2">{strategy.title}</h3>
                            <p className="text-gray-600">{strategy.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExitStrategy;