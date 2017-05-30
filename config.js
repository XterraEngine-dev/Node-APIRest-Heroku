module.exports = {

    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://<dbuser>:<dbpassword>@ds157641.mlab.com:57641/heroku_8flx7x2k',
    SECRET_TOKEN : 'miclavedetokens'
}