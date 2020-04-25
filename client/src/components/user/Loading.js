import React, {Component} from 'react';
import { Container } from "reactstrap";
import { Grid, Cell } from "react-mdl";


class Loading extends Component{

    render(){
        return (
           <Container>
                <Grid>
                    <Cell col={12} >
                    <div class="text-center mt-5 loading-container" style={{height:"25rem"}}>
                        <div class="spinner-grow text-primary mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-light mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark mt-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </Container>
        )
    }
}

export default Loading;