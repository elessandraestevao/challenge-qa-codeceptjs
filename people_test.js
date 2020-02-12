const expect = require('chai').expect;
const {I} = inject();

Feature('Validate the endpoint People of the Star Wars API');

Scenario('Verify a successful GET call', async () => {
	const res = await I.sendGetRequest('/people/1');
	expect(res.status).to.eql(200);
});

Scenario('Verify getting single person\'s data', async () => {
	const response = await I.sendGetRequest('/people/1');
  expect(response.data.name).to.eql('Luke Skywalker');
  expect(response.data.height).to.eql('172');
  expect(response.data.mass).to.eql('77');
  expect(response.data.hair_color).to.eql('blond');
  expect(response.data.skin_color).to.eql('fair');
  expect(response.data.eye_color).to.eql('blue');
  expect(response.data.birth_year).to.eql('19BBY');
  expect(response.data.gender).to.eql('male');
});
