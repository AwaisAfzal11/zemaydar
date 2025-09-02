import React from 'react';
import { Briefcase, TrendingUp, Repeat, UserCheck } from 'lucide-react';

const strategies = [
    { icon: <Briefcase size={40}/>, title: 'Buyback Payment', description: 'The company can repurchase the property after two years.' },
    { icon: <UserCheck size={40}/>, title: 'Upcoming Participation', description: 'Opportunity to join future housing projects.' },
    { icon: <TrendingUp size={40}/>, title: 'High Returns', description: 'Potential for profit through bulk land sales.' },
    { icon: <Repeat size={40}/>, title: 'Transferring', description: 'The certificate of ownership can be transferred.' },
];

const ExitStrategy = () => {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Exit Strategy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {strategies.map((strategy, index) => (
                        <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:bg-[#3D498A] hover:text-white transition-all duration-300 group">
                            <div className="text-[#3D498A] group-hover:text-white inline-block mb-4">
                                {strategy.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                            <p className="text-gray-600 group-hover:text-gray-200">{strategy.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExitStrategy;