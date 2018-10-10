import transforms from '../general/transforms';
import moment from 'moment';

const getNearest = function(state, field, distName) {

  let min = Math.min.apply(null, state.sources[field].data.map(function(item) {return item[distName];}));
  let result  = state.sources[field].data.filter(function(item){return item[distName] == min;} );
  let nearest = result? result[0] : null;
  return nearest
};

const titleCase = function(str) {
  str = str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  });
  return str.join(' ');
};

export default {
  key: 'safety',
  icon: 'star',
  label: 'Public Safety',
  dataSources: ['childWelfare','policePSA', 'policeDistr', 'fireStation', 'streetClosures'],

  components: [
    {
      type: 'vertical-table',
      options: {
        nullValue: 'None',
      },
      slots: {
        // title: 'Public Safety',
        fields: [
          {
            label: 'Police Jurisdiction',
            value: function(state) {
              let mail = 'police.co_'+state.geocode.data.properties.police_district+'@phila.gov'
              function nth(n){return n + ([,'st','nd','rd'][n%100>>3^1&&n%10]||'th')};
              return ('<a href="" target="_blank"><b>'
                      + nth(state.geocode.data.properties.police_district)
                      +' District </b></a><br>'
                      +'PSA '+ state.geocode.data.properties.police_service_area
                      + ", " + state.geocode.data.properties.police_division
                      + '<br>' + state.sources.policeDistr.data[0].properties.LOCATION
                      + '<br>(215) '+ state.sources.policeDistr.data[0].properties.PHONE
                      + '<br> <a href="mailto:'+mail+'">'+mail+'</a>');
            },
          },
        ]
      }
    }, // end police table

  ], // end comps
  basemap: 'pwd',
  dynamicMapLayers: [
    //'zoning'
  ],
  identifyFeature: 'address-marker',
  parcels: 'pwd'
}
