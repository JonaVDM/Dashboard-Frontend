import React from 'react';
import Dashboard from '../dashboard/Dashbaord';
import { Card, Sizes, Btn, Color, TextField } from '../components/components';

function UITester(): JSX.Element {
  return (
    <Dashboard>
      <div className="grid">
        {/* Full width */}
        <Card size={Sizes.full}>
          <p className="h2">Grid layout/Cards</p>
          <p>
            1/1
          </p>
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
          <p className="h2">Buttons</p>
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

        <Card size={Sizes.full}>
          <h1>h1</h1>
          <p className="h1 pad-bottom">.h1</p>

          <h2>h2</h2>
          <p className="h2 pad-bottom">.h2</p>

          <h3>h3</h3>
          <p className="h3 pad-bottom">.h3</p>

          <p>p</p>
          <p className="bold">p.bold</p>
          <p className="italic pad-bottom">p.italic</p>

          <a href="/grid">Link</a>
        </Card>

      </div>
    </Dashboard>
  );
}

export default UITester;
