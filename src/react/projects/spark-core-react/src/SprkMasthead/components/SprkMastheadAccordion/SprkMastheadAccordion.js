import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkMastheadAccordionItem from '../SprkMastheadAccordionItem/SprkMastheadAccordionItem';
import addIdsToArray from '../../../utility/addIdsToArray';

class SprkMastheadAccordion extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.setState({
      links: this.props.links ? addIdsToArray(this.props.links) : undefined
    })
  }
  render(){
    const {additionalClasses, analyticsString, idString, links} = this.props;
    return (
      <ul
        data-analytics={analyticsString}
        data-id={idString}
        className={classNames("sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare", additionalClasses)}>
        {links && this.state.links.map((link) => {
          return (
            <SprkMastheadAccordionItem
              {...link}
              key={link.id} />
          );
        })}
      </ul>
    );
  }
}

SprkMastheadAccordion.propTypes = {
  // classes to be added to the masthead
  additionalClasses: PropTypes.string,
  // assigned to data-analytics
  analyticsString: PropTypes.string,
  // assigned to data-id
  idString: PropTypes.string,
  // used to render SprkMastheadAccordionItems inside
  links: PropTypes.array
};

SprkMastheadAccordion.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
  links: []
};

export default SprkMastheadAccordion;