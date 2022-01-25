import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import fetchShow from '../../api/fetchShow';
// jest.mock('../../api/fetchShow');

import Display from './../Display';

test('renders without errors with no props', ()=>{
    render(<Display />);
});

test('renders Show component when the button is clicked ', async ()=>{
    // fetchShow().mockResolvedValue({
    //     status: 'complete'
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