export default {
  id: 'liBuildingCertSummary',
  type: 'http-get',
  url: 'https://phl.carto.com/api/v2/sql',
  deps: [ 'sources.liBuildingFootprints' ],
  options: {
    params: {
      q: function(feature, state){
        console.log('li-building-certs, feature:', feature);
        let bin;
        if (feature.properties.bin && feature.properties.bin !== '') {
          bin = feature.properties.bin.replace(/\|/g, "', '");
        } else if (state.sources.liBuildingFootprints.data.features.length) {
          bin = state.sources.liBuildingFootprints.data.features[0].attributes.BIN;//.replace(/\|/g, "', '");
        } else {
          bin = '';
        }
        // console.log('li-building-cert-summary.js q function, bin:', bin, 'feature:', feature, 'state.sources.liBuildingFootprints.data.features:', state.sources.liBuildingFootprints.data.features);
        return `SELECT * FROM building_cert_summary WHERE structure_id IN ('${bin}')`;
      },
    },
  },
};
