import React, { Component } from 'react';
import { CardFooter } from 'reactstrap';

export class Footer extends Component {

    render() {
        return (
            <div className="fixed-bottom">
                <CardFooter>
                        &copy; 2020 Designed & Developed by Tanmoy Sarkar
                </CardFooter>
            </div>
            
        )
    }
}

export default Footer;