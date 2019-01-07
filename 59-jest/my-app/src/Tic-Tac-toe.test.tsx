import { configure, shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Board,Square} from './Tic-Tac-toe';

import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

describe('<Board />', () => {
    it('renders a <Board /> components with 9 squares', () => {
        const wrapper = shallow(<Board />);
        expect(wrapper.find(Square).length).toEqual(9);
      });
    it('fill X in respond to a click', () => {
    const wrapper = shallow(<Board />);
    const board = wrapper.instance() as Board;
    board.handleClick(0);
    expect(board.state.squares).toEqual(['X', null, null,
                                        null, null, null,
                                        null, null, null]);
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('propagates the click to parent component', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value={null} onClick={onClick} />);
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
      });

});