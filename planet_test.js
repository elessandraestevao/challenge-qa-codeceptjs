const expect = require('chai').expect;
const {I} = inject();

Feature('Validate endpoint Planets of the Star Wars API');

Scenario('Verify a successful GET call', async () => {
	const response = await I.sendGetRequest('/planets/1');
	expect(response.status).to.eql(200);
});

Scenario('Verify getting single planet\'s data', async () => {
	const response = await I.sendGetRequest('/planets/1');
  expect(response.data.name).to.eql('Tatooine');
  expect(response.data.rotation_period).to.eql('23');
  expect(response.data.orbital_period).to.eql('304');
  expect(response.data.diameter).to.eql('10465');
  expect(response.data.climate).to.eql('arid');
  expect(response.data.gravity).to.eql('1 standard');
  expect(response.data.terrain).to.eql('desert');
  expect(response.data.surface_water).to.eql('1');
  expect(response.data.population).to.eql('200000');
});
