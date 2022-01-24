import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const exampleData = {
    name: 'This is a test show',
    summary: 'This is a test summary',
    seasons: [
        {id: 1, name: 'Season 1', episodes: [{
            id: 1,
            image: '',
            name: 'This is a test name',
            season: 1,
            number: 1,
            summary: 'This is a test summary',
            runtime: 1}]},
        {id: 2, name: 'Season 2', episodes: []},
        {id: 3, name: 'Season 3', episodes: []},
    ]
}

test('renders without errors', ()=>{
    render(<Show show={exampleData} selectedSeason='none' />);
});

test('renders Loading component when prop show is null', () => {
    render(<Show selectedSeason='none' />);

    const loading = screen.queryByTestId('loading-container');

    expect(loading).toBeInTheDocument();
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={exampleData} selectedSeason='none' />);

    const totalSeasons = screen.getAllByTestId('season-option')
    expect(totalSeasons).toHaveLength(3);
});

test('handleSelect is called when an season is selected', () => {
    const mockHandleSelect = jest.fn();

    render(<Show show={exampleData} selectedSeason='none' handleSelect={mockHandleSelect} />);

    const seasonSelect = document.getElementById('seasons');
    expect(seasonSelect).toBeInTheDocument();

    userEvent.selectOptions(seasonSelect, ["2"])
    expect(mockHandleSelect).toHaveBeenCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={exampleData} selectedSeason='none' />);

    let episodes = screen.queryByTestId('episodes-container');
    expect(episodes).not.toBeInTheDocument();

    rerender(<Show show={exampleData} selectedSeason='1' />)

    episodes = screen.queryByTestId('episodes-container');
    expect(episodes).toBeInTheDocument();
});
