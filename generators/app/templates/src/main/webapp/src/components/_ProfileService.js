export default {

    getProfileInfo(context) {
        let dataPromise = context.$http.get('api/profile-info').then(function(result) {
            if (result.data.activeProfiles) {
                console.log(result.data);
                var response = {};
                response.activeProfiles = result.data.activeProfiles;
                response.ribbonEnv = result.data.ribbonEnv;
                response.inProduction = result.data.activeProfiles.indexOf("prod") !== -1;
                response.swaggerEnabled = result.data.activeProfiles.indexOf("swagger") !== -1;
                return response;
            }
        });
        return dataPromise;
    }
}
