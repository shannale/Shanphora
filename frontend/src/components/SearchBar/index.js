import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../../store/product';
import './SearchBar.css';

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSearchQuery = async (e) => {
		e.preventDefault();
		dispatch(fetchSearch(searchQuery))
		.then (() => history.push(`/search/${searchQuery}`))
		setSearchQuery('')
	};


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
					/>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
