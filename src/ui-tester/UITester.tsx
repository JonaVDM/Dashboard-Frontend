import React from 'react';
import Dashboard from '../dashboard/Dashbaord';
import { Card, Sizes, Btn, Color, TextField } from '../components/components';

function UITester(): JSX.Element {
  return (
    <Dashboard>
      <div className="grid">
        {/* Full width */}
        <Card size={Sizes.full}>
          Grid layout/Cards
          <div>
            1/1
          </div>
        </Card>

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

        <Card size={Sizes.full}>
          TextFields
          <TextField label="Password" type="password" className="pad-top"/>
          <TextField label="Email" type="email" className="pad-top"/>
          <TextField label="Text" type="text" className="pad-top"/>
        </Card>
      </div>
    </Dashboard>
  );
}

export default UITester;
