import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import FeaturedHabits from '../featuresHabits/FeaturesHabits';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import TrackProgressSection from '../ExtraSection1/ExtraSection1';
import CommunitySection from '../ExtraSection2/ExtraSection2';
import MotionSection from '../ExtraSection2/ExtraSection2';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <FeaturedHabits></FeaturedHabits>
            <BenefitsSection></BenefitsSection>
            <TrackProgressSection></TrackProgressSection>
            <MotionSection></MotionSection>
        </div>
    );
};

export default Home;
