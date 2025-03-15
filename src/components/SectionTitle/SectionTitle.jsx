import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mb-10 text-center">
        <h2 className="text-[var(--color-secondary)] font-semibold text-lg py-2 relative uppercase">
            {heading}
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {subHeading}
        </p>
    </div>
    );
};

export default SectionTitle;