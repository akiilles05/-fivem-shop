import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/FiveM-Logo.png"
                     className="max-w-sm rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-5xl font-bold">Üdvözlünk!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Vásárlás</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;