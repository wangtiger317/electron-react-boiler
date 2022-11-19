async function activateKey(key: any): Promise<boolean> {
  console.log(key);
  // const hwid = await localStorage.getItem('hwid');
  // const hwid = await machineId();
  // const options = {
  //   uri: `${api_url}/${key}`,
  //   headers: {
  //     Authorization: `Bearer ${metalab_key}`,
  //   },
  //   forever: true,
  //   json: true,
  //   resolveWithFullResponse: true,
  // };
  // try {
  //   const response = await rp.get(options);
  //   if (response.body.status === 'active') {
  //     settingsManager.setUserData(response.body.user);
  //     return true;
  //   }
  //   return false;
  // } catch (err) {
  //   console.error(err);
  //   return false;
  // }
  return true;
}

async function checkKey(): Promise<boolean> {
  // const hwid = await machineId();
  // const options = {
  //   uri: `${SERVER_URL}/api/auth`,
  //   headers: {
  //     'X-MODE': Buffer.from('check').toString('base64'),
  //     'X-DATA': Buffer.from(key).toString('base64'),
  //     'X-HWID': Buffer.from(hwid).toString('base64'),
  //   },
  //   forever: true,
  //   json: true,
  //   resolveWithFullResponse: true,
  // };
  return true;
}

async function deactivateKey(): Promise<boolean> {
  // const hwid = await localStorage.getItem('hwid');
  // const hwid = await machineId();
  // const options = {
  //   uri: `${SERVER_URL}/api/auth`,
  //   headers: {
  //     'X-MODE': Buffer.from('deactivate').toString('base64'),
  //     'X-DATA': Buffer.from(key).toString('base64'),
  //     'X-HWID': Buffer.from(hwid).toString('base64'),
  //   },
  //   forever: true,
  //   json: true,
  //   resolveWithFullResponse: true,
  // };
  return true;
}

export default { checkKey, activateKey, deactivateKey };
