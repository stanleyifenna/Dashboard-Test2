import React from 'react';
import Milestones from './Milestones';
import Navbar from './Navbar';
import StoreVisits from './StoreVisits';
import Revenue from './Revenue';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="grid">
        <div className="one">
          <Milestones />
        </div>
        <div className="two">
          <Revenue />
          <StoreVisits />
        </div>
      </div>      
    </div>
  )
}
