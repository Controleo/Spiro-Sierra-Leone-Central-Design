var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Freetown_2 = new ol.format.GeoJSON();
var features_Freetown_2 = format_Freetown_2.readFeatures(json_Freetown_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Freetown_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freetown_2.addFeatures(features_Freetown_2);
var lyr_Freetown_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freetown_2, 
                style: style_Freetown_2,
                popuplayertitle: 'Freetown',
                interactive: false,
                title: '<img src="styles/legend/Freetown_2.png" /> Freetown'
            });
var format_SierraLeonePlan_3 = new ol.format.GeoJSON();
var features_SierraLeonePlan_3 = format_SierraLeonePlan_3.readFeatures(json_SierraLeonePlan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SierraLeonePlan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SierraLeonePlan_3.addFeatures(features_SierraLeonePlan_3);
var lyr_SierraLeonePlan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SierraLeonePlan_3, 
                style: style_SierraLeonePlan_3,
                popuplayertitle: 'Sierra Leone Plan',
                interactive: true,
    title: 'Sierra Leone Plan<br />\
    <img src="styles/legend/SierraLeonePlan_3_0.png" /> 12<br />\
    <img src="styles/legend/SierraLeonePlan_3_1.png" /> 30<br />\
    <img src="styles/legend/SierraLeonePlan_3_2.png" /> 48<br />\
    <img src="styles/legend/SierraLeonePlan_3_3.png" /> 2<br />\
    <img src="styles/legend/SierraLeonePlan_3_4.png" /> 6<br />' });
var format_SierraLeoneCentralDesignScores_4 = new ol.format.GeoJSON();
var features_SierraLeoneCentralDesignScores_4 = format_SierraLeoneCentralDesignScores_4.readFeatures(json_SierraLeoneCentralDesignScores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SierraLeoneCentralDesignScores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SierraLeoneCentralDesignScores_4.addFeatures(features_SierraLeoneCentralDesignScores_4);
var lyr_SierraLeoneCentralDesignScores_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SierraLeoneCentralDesignScores_4, 
                style: style_SierraLeoneCentralDesignScores_4,
                popuplayertitle: 'Sierra Leone Central Design — Scores',
                interactive: false,
    title: 'Sierra Leone Central Design — Scores<br />\
    <img src="styles/legend/SierraLeoneCentralDesignScores_4_0.png" /> 0<br />\
    <img src="styles/legend/SierraLeoneCentralDesignScores_4_1.png" /> 1<br />\
    <img src="styles/legend/SierraLeoneCentralDesignScores_4_2.png" /> 2<br />\
    <img src="styles/legend/SierraLeoneCentralDesignScores_4_3.png" /> 3<br />\
    <img src="styles/legend/SierraLeoneCentralDesignScores_4_4.png" /> 4<br />\
    <img src="styles/legend/SierraLeoneCentralDesignScores_4_5.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Freetown_2.setVisible(true);lyr_SierraLeonePlan_3.setVisible(true);lyr_SierraLeoneCentralDesignScores_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_Freetown_2,lyr_SierraLeonePlan_3,lyr_SierraLeoneCentralDesignScores_4];
lyr_Freetown_2.set('fieldAliases', {'fid': 'fid', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_SierraLeonePlan_3.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'No of Racks': 'No of Racks', });
lyr_SierraLeoneCentralDesignScores_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_Freetown_2.set('fieldImages', {'fid': '', 'GID_3': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_SierraLeonePlan_3.set('fieldImages', {'fid': '', 'Location': '', 'No of Racks': '', });
lyr_SierraLeoneCentralDesignScores_4.set('fieldImages', {'fid': '', 'id': '', 'score': '', });
lyr_Freetown_2.set('fieldLabels', {'fid': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_SierraLeonePlan_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'No of Racks': 'inline label - visible with data', });
lyr_SierraLeoneCentralDesignScores_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_SierraLeoneCentralDesignScores_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});