let players = `
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Body>
<ns2:mntOverdraftProtectResponse xmlns:ns2="http://tsys.gpn.com/mntOverDraft/">
<status>
<code>999</code>
<message>Request criteria conflict</message>
</status>
</ns2:mntOverdraftProtectResponse>
</soap:Body>
</soap:Envelope>
`
module.exports = players;