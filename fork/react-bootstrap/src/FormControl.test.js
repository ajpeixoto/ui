import React from 'react';
import { mount, shallow } from 'enzyme';

import FormControl from './FormControl';
import FormGroup from './FormGroup';

import { shouldWarn } from './helpers';

describe('<FormControl>', () => {
  xit('should render correctly', () => {
    shallow(
      <FormControl type="text" id="foo" name="bar" className="my-control" />
    ).assertSingle('input#foo.form-control.my-control[name="bar"]');
  });

  xit('should support textarea', () => {
    shallow(<FormControl componentClass="textarea" />).assertSingle(
      'textarea.form-control'
    );
  });

  xit('should support select', () => {
    shallow(<FormControl componentClass="select" />).assertSingle(
      'select.form-control'
    );
  });

  xit('should not render .form-control for type="file"', () => {
    shallow(<FormControl type="file" />)
      .assertSingle('input[type="file"]')
      .find('.form-control')
      .should.have.length(0);
  });

  xit('should use controlId for id', () => {
    mount(
      <FormGroup controlId="foo">
        <FormControl type="text" />
      </FormGroup>
    ).assertSingle('input#foo.form-control');
  });

  xit('should prefer explicit id', () => {
    shouldWarn('ignored');

    mount(
      <FormGroup controlId="foo">
        <FormControl type="text" id="bar" />
      </FormGroup>
    ).assertSingle('input#bar.form-control');
  });

  xit('should support inputRef', () => {
    class Container extends React.Component {
      render() {
        return (
          <FormGroup controlId="foo">
            <FormControl
              type="text"
              inputRef={(ref) => {
                this.input = ref;
              }}
            />
          </FormGroup>
        );
      }
    }

    const instance = mount(<Container />).instance();
    expect(instance.input.tagName).to.equal('INPUT');
  });

  xit('should properly display size of FormControl', () => {
    mount(<FormControl type="text" bsSize="lg" />).assertSingle(
      'input.form-control.input-lg'
    );
  });
});
