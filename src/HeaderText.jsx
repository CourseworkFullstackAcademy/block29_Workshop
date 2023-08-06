import PropTypes from 'prop-types';

const HeaderText = ({ searchResults }) => {
  const headerText = searchResults.length > 0 ? 'Search Results' : 'All Players';

  return <h1>{headerText}</h1>;
};

HeaderText.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default HeaderText;
