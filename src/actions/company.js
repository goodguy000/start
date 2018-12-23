import { openConnection } from './connection';

async function getAllCompanies(req, res) {
  const dbo = await openConnection();
  const rawData = await dbo.collection('company').find({});
  const result = await rawData.toArray();

  return res.send(result);
}

module.exports = {
  getAllCompanies
};
