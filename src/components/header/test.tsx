import { h } from 'preact';
import Header from './';
import { render, cleanup } from '@testing-library/preact'

afterEach(cleanup);

describe('Initial Test of the Header', () => {
    test('Header renders 3 nav items', () => {
        const { container } = render(<Header />);
        expect(container.getElementsByTagName("h1")[0].textContent).toBe('Preact App');
        expect(container.getElementsByTagName('a').length).toBe(3);
    });
});
