import React from 'react';
import Dashboard from '../dashboard/Dashbaord';
import { Card, Sizes, Btn, Color } from '../components/components';

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

        <Card size={Sizes.full}>
          Buttons
          <div>
            <Btn className="mar-right mar-bottom mar-top">Default</Btn>
            <Btn className="mar-right mar-bottom mar-top" color={Color.Primary}>Primary</Btn>
            <Btn className="mar-right mar-bottom mar-top" color={Color.Success}>Success</Btn>
            <Btn className="mar-right mar-bottom mar-top" color={Color.Danger}>Danger</Btn>
            <Btn className="mar-right mar-bottom mar-top" color={Color.Primary} disabled>Disabled</Btn>
          </div>
        </Card>
      </div>
    </Dashboard>
  );
}

export default UITester;
