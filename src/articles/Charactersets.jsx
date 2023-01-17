import React from 'react';
import Picture from '../img/1-mysql.jpeg';
function Charactersets() {
	return (
		<article>
			<h1>Teckenuppsättningar – Character sets</h1>
			<img src={Picture} alt="view from error" />
			<div>
				<h2>
					Idag används UTF-8 för att undvika problem ska du se till samtliga program använder denna metod{' '}
				</h2>
				<p>Dock så är det inte alltid standard från början, i exempelvis windows</p>
				<ul>
					i terminalen kan du skriva in chcp för att se vilken teckenuppsättning som används, du kan ändra i
					terminalen genom att skriva in
					<li>chcp 65001</li>
					<li>chcp 1252</li>
				</ul>
			</div>
		</article>
	);
}

export default Charactersets;
