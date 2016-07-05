

// my client_id = 408f14aefcb7451db8b00375c783ab69
// my access_token: 910775191.1677ed0.4bb3133b655e40ca811c06522a4c505e
var KK_access_token = '16324296.1677ed0.6f34fde30aad48ffa63471cbea1c63ef';

var my_client_id = '408f14aefcb7451db8b00375c783ab69';
var my_access_token = '910775191.1677ed0.4bb3133b655e40ca811c06522a4c505e';

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'awesome',
    clientId: my_client_id,
    accessToken: KK_access_token,
    userId: 'kawaiiathy'
});

feed.run();
