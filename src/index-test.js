import * as React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import { Block } from './index';

chai.use(chaiEnzyme());

describe('Block', () => {
  it('should render content', () => {
    const block = shallow(<Block />).find('.block');

    expect(block.text()).to.equal('Just a block');
  });
});
