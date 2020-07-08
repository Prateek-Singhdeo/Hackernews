import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout';
import Header from "../components/header";
configure({adapter: new Adapter()});

describe('<Layout>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout/>);
    });
    it('should render the header component correctly', () => {   
        expect(wrapper).toMatchSnapshot();
    });
    it('renders the header', () => { 
        expect(wrapper.find(<Header/>))
    });
});