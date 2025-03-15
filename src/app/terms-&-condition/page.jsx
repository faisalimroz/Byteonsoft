import PageIttle from '@/components/PageItile/PageIttle';
import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className='w-full'>
            <PageIttle pageTitle={"Terms & Conditions"} pageSubTitle={"Terms & Conditions"} />
            <div className='text-gray-700 w-11/12 md:w-4/5 mx-auto mt-8'>
                <p className='mb-4 font-semibold'>
                    Welcome to ByteonSoft! These Terms & Conditions outline your use of our website and services. By using our site, you agree to these terms.
                </p>

                <h3 className='font-semibold text-lg mb-2'>1. Acceptance of Terms</h3>
                <p className='mb-4'>
                    By using our services, you agree to follow these Terms & Conditions.
                </p>

                <h3 className='font-semibold text-lg mb-2'>2. Our Services</h3>
                <p className='mb-4'>
                    ByteonSoft provides web development, graphic design, and marketing services. We can change or discontinue any service at any time.
                </p>

                <h3 className='font-semibold text-lg mb-2'>3. User Responsibilities</h3>
                <p className='mb-4'>
                    You agree not to use our services for illegal activities or in a way that could harm our reputation or services.
                </p>

                <h3 className='font-semibold text-lg mb-2'>4. Intellectual Property</h3>
                <p className='mb-4'>
                    All content on our site belongs to ByteonSoft or our licensors and is protected by copyright.
                </p>

                <h3 className='font-semibold text-lg mb-2'>5. Limitation of Liability</h3>
                <p className='mb-4'>
                    We’re not responsible for any indirect or consequential damages that arise from your use of our services.
                </p>

                <h3 className='font-semibold text-lg mb-2'>6. Indemnification</h3>
                <p className='mb-4'>
                    You agree to protect ByteonSoft from any claims or damages arising from your use of our services or violation of these terms.
                </p>

                <h3 className='font-semibold text-lg mb-2'>7. Governing Law</h3>
                <p className='mb-4'>
                    These terms are governed by the laws of [Your Jurisdiction].
                </p>

                <h3 className='font-semibold text-lg mb-2'>8. Changes to Terms</h3>
                <p className='mb-4'>
                    We may update these terms from time to time. Changes will be posted on our site.
                </p>

                <h3 className='font-semibold text-lg mb-2'>9. Contact Us</h3>
                <p className='mb-4'>
                    If you have any questions about these Terms & Conditions, reach out at <a href="mailto:byteonsoft@gmail.com" className='text-blue-600 underline'>byteonsoft@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
