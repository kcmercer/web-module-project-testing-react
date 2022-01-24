import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const providedExample = {
    id: 1,
    image: '',
    name: 'This is a test name',
    season: 1,
    number: 1,
    summary: 'This is a test summary',
    runtime: 1
  }
test("renders without error", () => {
    render(<Episode episode={[]}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={providedExample}/>)

    const summary = screen.queryByText(/This is a test summary/i);

    expect(summary).toBeInTheDocument();
    expect(summary).toBeDefined();
    expect(summary).not.toBeFalsy();

});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={providedExample}/>)

    const imgAlt = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')

    expect(imgAlt).toBeInTheDocument();

});
