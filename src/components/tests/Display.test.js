import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import { fetchShow } from '../../api/fetchShow';
// jest.mock('../../api/fetchShow');

// Mock isn't reaching the API for some reason, can not find anything about it online.
// I have been unable to get the console.log() in the fetchShow api file to fire at any point.

import Display from './../Display';

test('renders without errors with no props', ()=>{
    render(<Display />);
});

test('renders Show component when the button is clicked ', async ()=>{
    // fetchShow.mockResolvedValue({
    //     name: 'This is a test show',
    //     summary: 'This is a test summary',
    //     seasons: [
    //         {id: 1, name: 'Season 1', episodes: [{
    //             id: 1,
    //             image: '',
    //             name: 'This is a test name',
    //             season: 1,
    //             number: 1,
    //             summary: 'This is a test summary',
    //             runtime: 1}]},
    //         {id: 2, name: 'Season 2', episodes: []},
    //         {id: 3, name: 'Season 3', episodes: []},
    //     ]
    // });

    render(<Display />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    screen.debug();

    const showData = await screen.findByTestId('show-container');
    expect(showData).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async ()=>{
    render(<Display />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const seasonOptions = await screen.findAllByTestId('season-option');
    expect(seasonOptions).toHaveLength(4);
});

test('when button is clicked, props function is called', async ()=>{
    const mockDisplayFunc = jest.fn();

    render(<Display displayFunc={mockDisplayFunc}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);

    await new Promise((r) => setTimeout(r, 2000));

    expect(mockDisplayFunc).toHaveBeenCalled();



});