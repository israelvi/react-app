import React from 'react';
import {
	Hero,
	Bids,
	Top_collection,
	Tranding_category,
	NewseLatter,
} from '../../components/shared/component';
import Meta from '../../components/shared/Meta';

const Home_1 = () => {
	return (
		<main>
			<Meta title="Isolux Aparcamientos" />
			<Hero />
			<Bids classes="pt-10 pb-24" bgWhite={false} />
			<Top_collection />
			<Tranding_category />
			<NewseLatter />
		</main>
	);
};

export default Home_1;
