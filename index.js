const axios = require('axios');

class Coastimg {
    upload(components) {
        const { access_key, imageurl } = components;

        return axios.get('https://coastline.my.id/cdn/images/upload.php', {
            params: {
                imageurl: imageurl,
                access_key: access_key
            }
        })
            .then(response => {
                const savedImageUrl = response.data.url;
                return savedImageUrl;
            })
            .catch(error => {
                throw new Error("Failed Upload: " + error);
            });
    }
}

const CoastlineImage = new Coastimg();
module.exports = { CoastlineImage };
