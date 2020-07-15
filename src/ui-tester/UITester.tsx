import React from 'react';
import Dashboard from '../dashboard/Dashbaord';
import { Card, Sizes } from '../components/components';

function UITester(): JSX.Element {
  return (
    <Dashboard>
      <div className="grid">
        {/* Full width */}
        <Card size={Sizes.full}>Grid layout - 1</Card>

        {/* Three Quarter */}
        <Card size={Sizes.three_quarters}>3/4</Card>
        <Card size={Sizes.quarter}>1/4</Card>

        {/* Three Quarter */}
        <Card size={Sizes.two_thirds}>2/3</Card>
        <Card size={Sizes.third}>1/3</Card>

        {/* Half */}
        <Card size={Sizes.half}>1/2</Card>
        <Card size={Sizes.half}>1/2</Card>

        {/* Thirds */}
        <Card size={Sizes.third}>1/3</Card>
        <Card size={Sizes.third}>1/3</Card>
        <Card size={Sizes.third}>1/3</Card>

        {/* Quarters */}
        <Card size={Sizes.quarter}>1/4</Card>
        <Card size={Sizes.quarter}>1/4</Card>
        <Card size={Sizes.quarter}>1/4</Card>
        <Card size={Sizes.quarter}>1/4</Card>
      </div>
    </Dashboard>
  );
}

export default UITester;
