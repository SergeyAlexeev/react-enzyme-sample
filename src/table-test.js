import * as React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import { Table } from './table';

chai.use(chaiEnzyme());

describe('Table', () => {
  it('should render table', () => {
    // const table = shallow(<Table />).find('table.table'); // => ' Function.prototype.name sham getter called on non-function'
    const table = shallow(<Table />).find('.table'); // => Works as expected

    expect(table).to.have.length(1);
  });
});
