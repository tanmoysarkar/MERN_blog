import React , {Component} from 'react';
import {Grid, Cell, Footer, FooterSection, FooterLinkList  } from 'react-mdl';
class FooterBody extends Component {
	render(){
		return(
			// <Grid className="footer-header fixed-bottom">
			// 	<Cell col={12}>
			// 		&copy; 2020 Designed & Developed by Tanmoy Sarkar 
			// 	</Cell>
				
				
			// </Grid>
			<Footer size="mini">
				<FooterSection type="left">
					<FooterLinkList>
					&copy; 2020 Designed & Developed by Tanmoy Sarkar 
					</FooterLinkList>
				</FooterSection>
			</Footer>
		)
	}
}

export default FooterBody;