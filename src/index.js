let client = null

const getClient = async () => {
    const { Client }  = require('pg');
    const client = new Client()
    
    await client.connect()

    return client
}


getClient().then(c => client = c).catch(e => console.log(e))

