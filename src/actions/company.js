import { openConnection } from './connection';

export default async function getAllCompanies(req, res) {
  const dbo = await openConnection();
  const rawData = await dbo.collection('company').find({});
  const result = await rawData.toArray();

  return res.send(result);
}
