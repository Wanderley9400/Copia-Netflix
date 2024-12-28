import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import { trendingContent, popularContent, newReleasesContent } from './data/content';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div className="relative z-10 -mt-32">
        <ContentRow title="Trending Now" items={trendingContent} />
        <ContentRow title="Popular on StreamFlix" items={popularContent} />
        <ContentRow title="New Releases" items={newReleasesContent} />
      </div>
    </div>
  );
}

export default App;