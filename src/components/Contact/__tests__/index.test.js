// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..';

afterEach(cleanup)

describe('Contact component', () => {
  it('renders', () => {
    render(<ContactForm />);
    const { asFragment } = render(<ContactForm />)
    expect(asFragment()).toMatchSnapshot()
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />)
    expect(asFragment()).toMatchSnapshot()
  });
})