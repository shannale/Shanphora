import React, { useState } from 'react';
import './SearchBar.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../../store/product';
// import { CiSearch } from 'react-icons/ci';
// import { BsSearchHeart } from 'react-icons/bs'

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSearchQuery = async (e) => {
		e.preventDefault();
		dispatch(fetchSearch(searchQuery))
		history.push(`/search/${searchQuery}`)
		setSearchQuery('')
	};

	// const handleKeyPress = (e) => {
	// 	if (e.keyCode === 'Enter') {
	// 		handleSearchQuery();
	// 	}
	// };

	return (
		<form className='search-bar' onSubmit={handleSearchQuery}>
			<div className='search-contents'>
				<div className='search-bar-input'>
					<input
						className='search-input'
						type='search'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder='Search'
						// onKeyDown={handleKeyPress}
					/>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
