export default {
  id: 'liBuildingCerts',
  type: 'http-get',
  url: 'https://phl.carto.com/api/v2/sql',
  options: {
    params: {
      q: function(feature){
        let bin = feature.properties.bin.replace(/\|/g, "', '");
        return `SELECT * FROM building_certs WHERE bin IN ('${bin}')`;
      },
    },
  },
};
