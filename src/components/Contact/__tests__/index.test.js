import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';
afterEach(cleanup);

describe('ContactForm is rendering', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tagContact')).toHaveTextContent('Contact me');
    });
  
    it('matches snapshot', () => {
      const { asFragment } = render(<ContactForm />)
      expect(asFragment()).toMatchSnapshot()
    });
  });